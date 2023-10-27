import PropTypes from 'prop-types';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useRef, useState } from 'react';

function CartCard({
  bookName,
  originalPrice,
  author,
  discountedPrice,
  imgSrc,
  imgAlt,
  badgeText,
  discountPercent,
  _id,
  genre,
  onUpdateQuantity, // Function to update quantity on the backend
  onRemoveFromCart,
  quantity, // Quantity from the backend
}) {
  const [number, setNumber] = useState(quantity); // Use the quantity from the backend

  const InputRef = useRef();

  const handleQuantityChange = async (newQuantity) => {
    setNumber(newQuantity);

    // Call the provided callback function to update the quantity on the backend
    onUpdateQuantity(_id, newQuantity);
  };

  const inputValueChange = () => {
    const inputValue = InputRef.current.value;
    const newQuantity = parseInt(inputValue, 10);
    handleQuantityChange(newQuantity);
  };

  return (
    <div className='w-[550px]  border border-gray-500 cursor-pointer p-1 relative flex'>
      <div>
        <span
          className={`${badgeVariants({
            variant: 'destructive',
          })} absolute top-0 left-0 rounded-none`}
        >
          {badgeText}
        </span>

        <img src={imgSrc} alt={imgAlt} className='w-[180px] mx-auto mt-5 h-[250px] object-contain' />
      </div>
      <div className='ml-[40px]'>
        <h3 className='text-2xl font-semibold'>{bookName}</h3>
        <div className='my-4 text-lg'>- By {author}</div>
        <div className='flex justify between items-center font-semibold gap-5'>
          <p>R.S {discountedPrice}</p>
          <del>R.S {originalPrice}</del>
          <span className='text-red-500 text-[12px]'>({discountPercent}%)</span>
        </div>
        <h4 className='my-3'>Genre: {genre}</h4>
        <div className='text-2xl flex items-center'>
          Quantity:
          <Button variant='outline' className='p-5 rounded-full' onClick={() => handleQuantityChange(number - 1)}>
            -
          </Button>
          <Input type='number' ref={InputRef} value={number} onChange={inputValueChange} className='w-[80px]' />
          <Button variant='outline' className='p-5 rounded-full' onClick={() => handleQuantityChange(number + 1)}>
            +
          </Button>
        </div>
        <div>
          <Button variant='destructive' className='p-5 rounded-md w-full my-3' onClick={() => onRemoveFromCart(_id)}>
            Remove from Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

CartCard.propTypes = {
  bookName: PropTypes.string,
  originalPrice: PropTypes.number,
  author: PropTypes.string,
  discountedPrice: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  badgeText: PropTypes.string,
  discountPercent: PropTypes.number,
  _id: PropTypes.string,
  genre: PropTypes.string,
  onUpdateQuantity: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  quantity: PropTypes.number,
};
