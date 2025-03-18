import React from 'react'
interface ProductProps{
    name: string,
    price: string | number,
}
const Product = (props: ProductProps) => {
  return (
    <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
    </div>

  )
}

export default Product