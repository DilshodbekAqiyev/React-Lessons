import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home.jsx';

import Header from './components/header.jsx';
import Layout from './components/layout.jsx';
import SingleProduct from './pages/single-product.jsx';
import Shop from './pages/shop.jsx';
import { instance } from './utils/use-request.js';
import Wishlist from './components/WishList.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  console.log('wishlist', wishlist);

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const data = await instance.get('/home/products');
      setProducts(data.data?.productsList);
    })();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
          <Route
            path='/shop'
            element={
              <Shop
                products={products}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />
          <Route
            path='/product/:productID'
            element={<SingleProduct products={products} wishlist={wishlist} setWishlist={setWishlist} />}
          />
          <Route
            path='/wishlist'
            element={<Wishlist products={products} wishlist={wishlist} setWishlist={setWishlist} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
