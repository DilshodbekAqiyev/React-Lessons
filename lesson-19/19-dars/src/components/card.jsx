import PropTypes from 'prop-types';
import { badgeVariants } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from './ui/button';

function Card({
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
  wishlist,
  setWishlist,
}) {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(wishlist?.includes(_id));

  const handleLikeClick = () => {
    setIsLiked(!isLiked);

    if (isLiked) {
      setWishlist(wishlist?.filter((productId) => productId !== _id));
    } else {
      setWishlist([...wishlist, _id]);
    }
  };

  return (
    <div className='w-[250px]  border border-gray-500 cursor-pointer p-1 text-center relative hover:shadow-2xl transition-all'>
      <span
        className={`${badgeVariants({
          variant: 'destructive',
        })} absolute top-0 left-0 rounded-none`}
      >
        {badgeText}
      </span>
      <span className='absolute top-2 right-2 p-2' onClick={handleLikeClick}>
        {isLiked ? '❤️' : '🤍'}
      </span>
      <img src={imgSrc} alt={imgAlt} className='w-[150px] mx-auto mt-2 h-[200px] object-contain' />
      <h3 className='font-bold mt-2'>{bookName}</h3>
      <span className='my-4 inline-block'>
        by <span className='font-semibold'>{author}</span>
      </span>
      <div className='flex justify-around items-center'>
        <p>R.S {discountedPrice}</p>
        <del>R.S {originalPrice}</del>
        <span className='text-red-500 text-[12px]'>({discountPercent}%)</span>
      </div>
      <div className='flex justify-around items-center'>
        <span>{genre.charAt(0).toUpperCase() + genre.slice(1)}</span>
        <Button variant='link' onClick={() => navigate('/product/' + _id)} className='font-semibold'>
          more...
        </Button>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
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
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func,
};
