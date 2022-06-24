import React from 'react'


 const ItemCard=(props)=>{
    return (
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className='card p-0 overflow-hidden h-100 shadow'>
            <img className='card-img-top img-fluid' src={props.img} alt="" />
                <div className='card-body text-center'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.desc}</p>
                    <p className='card-text'>{props.price}₽</p>
                    <button className='btn btn-success'>Купить</button>
                </div>
        </div>
      </div>
    )
 
}

export default ItemCard

