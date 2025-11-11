import React from 'react'
import list from '../assets/list.json'
import Card1 from './Card1'
import { Link } from 'react-router-dom'


export default function Course() {
  return (
    <>
      <div className="container mx-auto px-6 py-10 z-50  min-h-screen">
        {/* Title */}
        <h1 className="flex items-center justify-center text-4xl font-bold">
          We're delighted to have you 
          <span className="text-pink-500 pl-2">here! :)</span>
        </h1>

        {/* Description */}
        <p className="pt-12 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatum fuga iusto nihil dicta, animi repellat necessitatibus rerum nemo esse a exercitationem autem quasi explicabo nobis neque dolor, officiis obcaecati?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus debitis quisquam laudantium laborum dolore, perspiciatis recusandae! Neque ducimus aspernatur id eum.
        </p>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button className="btn btn-secondary w-32 rounded-md">
            <Link to="/">Back</Link>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center mt-10 px-6">
        {list.map((item) => (
          <Card1 key={item.id} item={item} />
        ))}
      </div>
      </div>

      {/* Course Grid */}
    
    </>
  )
}
