import PropTypes from 'prop-types';
import { instance } from '@/utils/use-request';
import { useEffect, useState } from 'react';
import Card from './card';
import Loader from 'react-js-loader';

function NewArrivals({ wishlist, setWishlist }) {
  const [arrivals, setArrivals] = useState();
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const data = await instance.get('/home/newarrivals');
      setArrivals(data.data?.newArrivalList);
    })();
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        {arrivals?.length ? (
          arrivals?.map((arrival) => (
            <Card key={arrival._id} {...arrival} wishlist={wishlist} setWishlist={setWishlist} />
          ))
        ) : (
          <div className='w-full flex justify-center items-center h-[370px]'>
            <Loader type='bubble-loop' bgColor={'#ccc'} color={'#ccc'} size={125} />
          </div>
        )}
      </div>
    </>
  );
}

NewArrivals.propTypes = {
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func,
};

export default NewArrivals;
