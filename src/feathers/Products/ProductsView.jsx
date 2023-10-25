import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductSlice';

const ProductsView = () => {
    const dispatch = useDispatch();
    const {isLoding, products, error} = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            {isLoding && <h2>loding..</h2>}
            {error && <h2>{error}</h2>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  '>
                {products && products.map((product) => {
                    return (
                        <div key={product.id} className=''>
                            <div className=' bg-slate-700 hover:bg-slate-400 transition-all p-3 rounded-md'>
                                <div className=' max-w-[300px] mb-5'>
                                    <img src={product.image} alt="logo" className=' h-[200px] w-full rounded-lg text-center' />
                                </div>
                                <div className='flex'>
                                    <h2 className='text-[26px]'>{product.title}</h2>
                                    <h2 className='text-[32px]'>${product.price}</h2>
                                </div>
                                <div className='mt-6'>
                                    <p>{product.category}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default ProductsView;