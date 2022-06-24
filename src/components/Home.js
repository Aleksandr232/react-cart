import React from 'react';
import ItemCard from './ItemCard';
import data from './data'

const Home=()=>{
    return(
        <div>
            <h1 className='text-center mt-3'>All items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index)=>{
                        return(
                            <ItemCard img='' title='title' desc='desc'/>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default Home