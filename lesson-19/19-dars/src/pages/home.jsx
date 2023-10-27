import PropTypes from 'prop-types';
import Genres from '@/components/genres';
import NewArrivals from '@/components/new-arrivals';

function Home({ selectedGenres, setSelectedGenres, wishList, setWishList, isLogged }) {
  return (
    <div className='mt-3'>
      <h1 className='text-center text-[42px] my-8'>Genres</h1>
      <Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
      <h1 className='text-center text-[42px] my-8'>New Arrivals</h1>
      <NewArrivals setWishList={setWishList} wishList={wishList} isLogged={isLogged} />
    </div>
  );
}
export default Home;

Home.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
  isLogged: PropTypes.any,
};
