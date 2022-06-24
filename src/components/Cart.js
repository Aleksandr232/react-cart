import React from 'react'
import  {useCart } from'react-use-cart'

const Cart=()=>{
    const {
        items,
        totalItems,
        isEmpty,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
}=useCart();
    if(isEmpty) return <h1 className='text-center'>dfb</h1>
    return(
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                        <h5>Корзина({totalUniqueItems}) Количество:({totalItems}) </h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{height:'6rem'}}  />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>Итог ({item.quantity})</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                </div>
            </div>
        </section>
    )
}

export default Cart;