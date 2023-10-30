import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home.jsx';
import { useToast } from '@/components/ui/use-toast';
import Header from './components/header.jsx';
import Layout from './components/layout.jsx';
import SingleProduct from './pages/single-product.jsx';
import Shop from './pages/shop.jsx';
import WishList from './pages/wishlist';
import { instance } from './utils/use-request.js';
import Login from './pages/login.jsx';
import Cart from './pages/Cart.jsx';
import PrivateRoutes from './utils/PrivateRoutes.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLogged, setIsLogged] = useState(() => localStorage.getItem('access_token'));
  const { toast } = useToast();

  const getData = async () => {
    const data = await instance.get('/user');
    if (data.data?.user) {
      setWishList(data.data?.user?.wishlist);
      setCart(data.data?.user?.cart);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await instance.get('/home/products');
      setProducts(data.data?.productsList);
    })();
    getData();
  }, []);

  const handleLikeBtnClick = async (id) => {
    if (!isLogged) {
      toast({
        variant: 'destructive',
        title: 'You are not registered.',
        description: 'Please register and try again!',
        action: <Link to={'/login'}>Login</Link>,
      });
      return;
    } else {
      const el = wishList.find((wishItem) => wishItem._id === id);

      if (!el) {
        const product = products.find((arr) => arr._id === id);
        setWishList((prev) => [...prev, product]);
        await instance.patch('/wishlist', {
          productdetails: product,
        });
      } else {
        setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
        await instance.delete('/wishlist/' + id);
      }
    }
  };

  const handleAddToCart = async (id) => {
    if (!isLogged) {
      toast({
        variant: 'destructive',
        title: 'You are not registered.',
        description: 'Please register and try again!',
        action: <Link to={'/login'}>Login</Link>,
      });
      return;
    } else {
      const product = products.find((arr) => arr._id === id);
      setCart((prev) => [...prev, product]);
      await instance.patch('/cart', {
        productdetails: product,
      });
    }
  };

  const handleRemoveFromCart = async (id) => {
    setCart((prev) => prev.filter((cartItem) => cartItem._id !== id));
    await instance.delete('/cart/' + id);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} cartCount={cart.length} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishList={wishList}
                setWishList={setWishList}
                isLogged={isLogged}
              />
            }
          />
          <Route
            path='/shop'
            element={
              <Shop
                handleLikeBtnClick={handleLikeBtnClick}
                handleAddToCart={handleAddToCart}
                products={products}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishList={wishList}
                setWishList={setWishList}
              />
            }
          />
          <Route
            path='/product/:productID'
            element={
              <SingleProduct
                products={products}
                wishlist={wishList}
                cart={cart}
                setWishlist={setWishList}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleLikeBtnClick={handleLikeBtnClick}
              />
            }
          />
          <Route path='/login' element={<Login setIsLogged={setIsLogged} />} />
          <Route element={<PrivateRoutes isLogged={isLogged} />}>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/wishlist' element={<WishList wishList={wishList} setWishList={setWishList} />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
