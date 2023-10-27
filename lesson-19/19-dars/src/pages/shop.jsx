import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '@/components/ui/slider';
import Card from '@/components/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { genres } from '@/constants/genre';
import { Button } from '@/components/ui/button';

function Shop({ products, selectedGenres, setSelectedGenres, handleLikeBtnClick, wishList }) {
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  });
  const [range, setRange] = useState([sliderValues?.min, sliderValues?.max]);
  const [selectedRating, setSelectedRating] = useState('1');
  const [selectedSorting, setSelectedSorting] = useState('lowToHigh');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    range: [sliderValues?.min, sliderValues?.max],
    genres: [...genres],
    rating: '1',
    sorting: 'lowToHigh',
  });

  const handleRangeChange = (value) => {
    setRange(value);
  };

  useEffect(() => {
    if (!selectedGenres.length) {
      setSelectedGenres([...genres]);
    }
  }, [selectedGenres.length, setSelectedGenres]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if (products.length) {
      setSliderValues(
        products.reduce((acc, curr) => (curr.originalPrice > acc.max ? { ...acc, max: curr.originalPrice } : acc), {
          min: 0,
          max: 0,
        })
      );
    }
  }, [products]);

  useEffect(() => {
    setAppliedFilters({
      range,
      genres: selectedGenres,
      rating: selectedRating,
      sorting: selectedSorting,
    });
  }, [range, selectedGenres, selectedRating, selectedSorting]);

  useEffect(() => {
    let newProducts = [...products];

    // Range filter
    newProducts = newProducts.filter(
      (product) =>
        (product.discountedPrice >= appliedFilters.range[0] || product.originalPrice >= appliedFilters.range[0]) &&
        (product.discountedPrice <= appliedFilters.range[1] || product.originalPrice <= appliedFilters.range[1])
    );

    // Genre filter
    newProducts = newProducts.filter(
      (pr) => appliedFilters.genres.findIndex((gr) => gr.title.toUpperCase() === pr.genre.toUpperCase()) !== -1
    );

    // Rating filter
    newProducts = newProducts.filter((product) => product.rating >= appliedFilters.rating);

    // Sorting
    if (appliedFilters.sorting === 'lowToHigh') {
      newProducts.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (appliedFilters.sorting === 'highToLow') {
      newProducts.sort((a, b) => b.originalPrice - a.originalPrice);
    }

    setFilteredProducts(newProducts);
  }, [products, appliedFilters]);

  useEffect(() => {
    setRange([sliderValues.min, sliderValues.max]);
  }, [sliderValues]);

  const handleGenreChange = (title) => {
    const currentGrIdx = selectedGenres.findIndex((gr) => gr.title === title);
    if (currentGrIdx === -1) {
      setSelectedGenres((prev) => [...prev, { title }]);
    } else {
      const updatedGenres = selectedGenres.filter((gr) => gr.title !== title);
      setSelectedGenres(updatedGenres);
    }
  };

  const onClear = () => {
    setSelectedGenres([...genres]);
    setRange([0, sliderValues.max]);
    setSelectedRating('1');
    setSelectedSorting('lowToHigh');
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSortingChange = (sorting) => {
    setSelectedSorting(sorting);
  };

  const ratingOptions = [
    { value: '4', label: '4 stars or above' },
    { value: '3', label: '3 stars or above' },
    { value: '2', label: '2 stars or above' },
    { value: '1', label: '1 stars or above' },
  ];

  return (
    <div className='flex justify-between items-stretch'>
      <div className='w-[20%] pr-8'>
        <Button onClick={onClear} className='my-5'>
          Clear Filter
        </Button>
        <Slider
          defaultValue={[sliderValues.min, sliderValues.max]}
          max={sliderValues?.max}
          min={0}
          step={0.5}
          value={range}
          onValueChange={handleRangeChange}
          formatLabel={(value) => `${value} `}
        />
        <div className='mt-8'>
          {genres.map((genre) => (
            <div className='flex items-center space-x-2 mt-2' key={genre.title}>
              <Checkbox
                id={genre.title}
                checked={selectedGenres.findIndex((gr) => gr.title === genre.title) !== -1}
                onCheckedChange={() => handleGenreChange(genre.title)}
              />
              <Label
                htmlFor={genre.title}
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {genre.title}
              </Label>
            </div>
          ))}
        </div>
        <div className='pt-8'>
          {ratingOptions.map((option) => (
            <div key={option.value}>
              <input
                type='radio'
                name='rating'
                value={option.value}
                checked={appliedFilters.rating === option.value}
                onChange={() => handleRatingChange(option.value)}
                id={`${option.label}`}
              />
              <label htmlFor={option.label}>{option.label}</label>
            </div>
          ))}
        </div>
        <div className='pt-8'>
          <div>Sort By:</div>
          <div>
            <input
              type='radio'
              name='sorting'
              value='lowToHigh'
              id='lowToHigh'
              checked={appliedFilters.sorting === 'lowToHigh'}
              onChange={() => handleSortingChange('lowToHigh')}
            />
            <label htmlFor='lowToHigh'>Price - Low to High</label>
          </div>
          <div>
            <input
              type='radio'
              name='sorting'
              value='highToLow'
              id='highToLow'
              checked={appliedFilters.sorting === 'highToLow'}
              onChange={() => handleSortingChange('highToLow')}
            />
            <label htmlFor='highToLow'>Price - High to Low</label>
          </div>
        </div>
      </div>

      <div className='w-[80%]'>
        <div className='text-center font-semibold my-3 text-2xl'>Showing {filteredProducts.length} products</div>
        <div className='flex justify-around mt-8 gap-5 flex-wrap'>
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <Card
                key={product._id}
                {...product}
                handleLikeBtnClick={handleLikeBtnClick}
                isLiked={wishList.findIndex((wishItem) => wishItem._id === product._id) === -1}
              />
            ))
          ) : (
            <h1>Not found</h1>
          )}
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
  wishList: PropTypes.array,
};

export default Shop;
