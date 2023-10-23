import PropTypes from 'prop-types';
import Genres from '@/components/genres';
import NewArrivals from '@/components/new-arrivals';

function Home({ selectedGenres, setSelectedGenres, wishlist, setWishlist }) {
  return (
    <div className='mt-3'>
      <Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
      <NewArrivals wishlist={wishlist} setWishlist={setWishlist} />
    </div>
  );
}
export default Home;

Home.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func,
};