import React from 'react'
import '../../styles/ItemDetail.scss';

export default function ItemDetail(item) {
    return (
        <div className='item-detail__card'>
            <img src={item.url} alt="" className='item-detail__image'/>
            <span className='itemd-detail__name'>{item.name}</span>
            <span className='item-detail__price'>{item.price}</span>
        </div>
    )
}
