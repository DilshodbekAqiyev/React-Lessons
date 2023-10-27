import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function SingleProduct({ products, handleAddToCart, handleRemoveFromCart, handleLikeBtnClick, wishlist, cart }) {
  const [singleData, setSingleData] = useState({});
  const { productID } = useParams();
  const { toast } = useToast();

  useEffect(() => {
    const foundProduct = products.find((product) => product._id === productID);

    if (foundProduct) {
      setSingleData(foundProduct);
    } else {
      toast({
        variant: 'destructive',
        title: 'This product not found',
      });
    }
  }, [productID, products, toast]);

  const {
    _id,
    author,
    badgeText,
    bookName,
    description,
    discountPercent,
    discountedPrice,
    imgAlt,
    imgSrc,
    originalPrice,
    rating,
  } = singleData;

  const isWishlisted = wishlist.some((item) => item._id === _id);
  const isCarted = cart.some((item) => item._id === _id);

  return (
    <>
      {products.length ? (
        <section className='py-[60px] flex justify-evenly items-center'>
          <div className='w-[300px] relative'>
            <img src={imgSrc} alt={imgAlt} className='w-[300px] h-[450px] mx-auto' />
            <span className={`${badgeVariants({ variant: 'destructive' })} absolute top-0 left-0 rounded-none`}>
              {badgeText}
            </span>
          </div>
          <div className='w-[50%]'>
            <h2 className='font-bold text-[36px]'>{bookName}</h2>
            <hr className='border' />
            <h3 className='text-[22px]'>
              <span className='mr-5 my-4 font-bold inline-block'>Author:</span> {author}
            </h3>
            <p className='text-[20px]'>
              <span className='font-bold mr-3 text-[22px]'>Description: </span>
              {description}
            </p>
            <div className='my-3 font-bold text-[22px]'>
              Rating:{' '}
              {Array.from({ length: rating }, (_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
            <div className='flex gap-16 items-center w-[400px] font-semibold text-[20px]'>
              <p>R.S {discountedPrice}</p>
              <del>R.S {originalPrice}</del>
              <span className='text-red-500 text-[14px]'>({discountPercent}% off)</span>
            </div>
            <div className='flex justify-between items-center gap-3 mt-5 w-[420px]'>
              {isWishlisted ? (
                <Button
                  className='bg-red-500 w-1/2'
                  onClick={() => {
                    handleLikeBtnClick(_id);
                  }}
                >
                  Remove from Wishlist
                </Button>
              ) : (
                <Button
                  className='bg-red-500 w-1/2'
                  onClick={() => {
                    handleLikeBtnClick(_id);
                  }}
                >
                  Add to Wishlist
                </Button>
              )}
              {isCarted ? (
                <Button
                  className='bg-orange-400 w-1/2'
                  onClick={() => {
                    handleRemoveFromCart(_id);
                  }}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  className='bg-orange-400 w-1/2'
                  onClick={() => {
                    handleAddToCart(_id);
                  }}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className='h-[500px] flex justify-center items-center'>
          <h2 className='text-gray-500'>Loading...</h2>
        </div>
      )}
    </>
  );
}

SingleProduct.propTypes = {
  products: PropTypes.array,
  wishlist: PropTypes.array,
  cart: PropTypes.array,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
};

export default SingleProduct;
