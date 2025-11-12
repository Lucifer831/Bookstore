import React from 'react'

export default function Card1({item}) {
  return (
    <div>


<div className="card bg-base-100 w-80 shadow-sm ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" 
      className='h-78 w-80' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline text-black">{item.price}</div>
      <div className="badge badge-outline">{item.category}</div>
    </div>
  </div>
</div>
    </div>
  )
}
