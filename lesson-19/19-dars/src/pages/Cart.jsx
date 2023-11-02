import { useEffect, useState } from 'react';
import CartCard from '@/components/cart-card.jsx';
import { instance } from '@/utils/use-request';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [newCart, setNewCart] = useState([]);
  const deliveryCharges = 50;

  const getData = async () => {
    const data = await instance.get('/user');
    setCart(data.data?.user?.cart);
    // eslint-disable-next-line no-unsafe-optional-chaining
    setNewCart([...data.data?.user?.cart]);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const total = newCart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);
    setTotalAmount(total);

    const totalDiscount = newCart.reduce(
      (acc, curr) => acc + (curr.originalPrice - curr.discountedPrice) * curr.quantity,
      0
    );
    setDiscount(totalDiscount);
  }, [newCart]);

  const handleRemoveFromCart = async (id) => {
    await instance.delete(`/cart/${id}`);
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    setNewCart((prevNewCart) => prevNewCart.filter((item) => item._id !== id));
  };

  const updateQuantityOnBackend = async (productId, newQuantity) => {
    try {
      const response = await instance.patch(`/cart/${productId}`, { quantity: newQuantity });
      const updatedCart = newCart.map((item) => (item._id === productId ? { ...item, quantity: newQuantity } : item));
      setNewCart(updatedCart);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {cart.length ? (
        <div className='flex justify-between mt-5'>
          <div className='w-[600px] gap-5 flex flex-col'>
            {newCart?.map((item) => (
              <CartCard
                key={item._id}
                onUpdateQuantity={updateQuantityOnBackend}
                onRemoveFromCart={() => handleRemoveFromCart(item._id)}
                quantity={item.quantity}
                {...item}
              />
            ))}
          </div>
          <div className='w-[600px] mt-5 flex flex-col gap-8 p-3'>
            <h1 className='text-[35px] text-center'>Bill Details</h1>
            <hr />
            {newCart?.map((cartItem) => (
              <div className='text-xl text-end' key={cartItem._id}>
                {cartItem.bookName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X{' '}
                {cartItem.quantity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹&nbsp;
                {(cartItem.discountedPrice || cartItem.originalPrice) * cartItem.quantity}
              </div>
            ))}
            <hr />
            <p className='text-[25px]'>Discount: ₹ {discount}</p>
            <p className='text-[25px]'>Delivery Charges: ₹ {deliveryCharges}</p>
            <hr />
            <p className='text-[25px] font-semibold'>Total Charges: ₹ {totalAmount + deliveryCharges}</p>
            <hr />
            <p className='text-[25px]'>
              Apply Coupon: Try <Input type='text' placeholder={'BOOKS200'} />
            </p>
            <Button>Place Order</Button>
          </div>
        </div>
      ) : (
        <h1 className='text-[40px] text-center'>No Cart</h1>
      )}
    </div>
  );
}

export default Cart;
