import React from "react";
import ItemList from "../ItemList/ItemList";
import Products from '../productos.json';



function ItemListContainer(){
    return(
<section>
    <ItemList items={Products}/>
</section>
    )
};

export default ItemListContainer;