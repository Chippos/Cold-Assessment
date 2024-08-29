import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Products = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const { products, loading, error } = useFetchData(
    'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products',
    refreshKey
  );

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  if (loading)
    return (
      <div className='py-20 flex items-center justify-center gap-5'>
        <div className='loading'></div>
        <p className='text-2xl '>Blobbing Data, Please wait</p>
      </div>
    );
  if (error)
    return (
      <div className='py-20 flex flex-col items-center justify-center gap-5'>
        <p className='text-2xl textGradient'>Oops! Data not found</p>
        <button
          onClick={() => handleRefresh}
          className='globalButton hover:scale-105 transition duration-200 will-change-transform'>
          Try Again
        </button>
      </div>
    );

  return (
    <section className='py-40'>
      <div className='globalContainer'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20'>
          {products[0].map((data, index) => (
            <ProductCard product={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='bg-white rounded-[30px] shadow-xl'>
      <div className='rounded-[30px] shadow-xl aspect-square overflow-hidden'>
        <img
          src={product.image}
          alt=''
          className='w-full h-full object-cover block'
        />
      </div>
      <div className='p-6'>
        <h5 className='text-2xl uppercase font-bold'>{product.name}</h5>
        <span className='text-2xl uppercase font-bold text-neutral-500'>
          £{product.price}
        </span>
      </div>
    </div>
  );
};

export default Products;
