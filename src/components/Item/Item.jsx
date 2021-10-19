import React from 'react'
import '../../styles/Item.scss'

export default function Item({item}) {
    return (
        <div className='item'>
            <img src= {item.url} alt='' className='item-image'/>
            <span className='item-name'>{item.name}</span>
            <span className='item-price'>${item.price}</span>
        </div>
    )
}
