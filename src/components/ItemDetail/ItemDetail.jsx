import React from 'react'
import '../../styles/ItemDetail.scss';

export default function ItemDetail(item) {
    console.log(item.item)
    return (
        <div className='item-detail__card'>
            <img src={item.item.url} alt="" className='item-detail__image'/>
            <span className='item-detail__name'>{item.item.name}</span>
            <span className='item-detail__price'>{item.item.price}</span>
        </div>
    )
}
