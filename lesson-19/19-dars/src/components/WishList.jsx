import PropTypes from 'prop-types';
import Card from './card';

function Wishlist({ wishlist, products, setWishlist }) {
  const wishlistProducts = products.filter((product) => wishlist?.includes(product._id));

  return (
    <div className='py-[60px]'>
      <h3 className='text-center text-[46px]'>
        {wishlistProducts.length ? wishlistProducts.length : '0'}{' '}
        {wishlistProducts.length <= 1 ? 'product' : 'products'} in Wishlist
      </h3>

      <div className='flex justify-around mt-8 gap-5 flex-wrap'>
        {wishlistProducts.length ? (
          wishlistProducts.map((product) => (
            <Card key={product._id} {...product} wishlist={wishlist} setWishlist={setWishlist} />
          ))
        ) : (
          <h1>No Liked Products</h1>
        )}
      </div>
    </div>
  );
}

Wishlist.propTypes = {
  wishlist: PropTypes.array,
  products: PropTypes.array,
  setWishlist: PropTypes.func,
};

export default Wishlist;
