import React from 'react'
import photo from '../assets/img.jpg'
import Freebook from './Freebook'
export default function Banner() {
  return (
    <div className='container min-h-screen mx-auto px-4'>
    <div className=' grid grid-cols-2'>
        <div className='mt-28 px-4'>
            <h1 className='text-4xl'>Hi welcome here to learn something <span className='text-pink-500'>new everyday! :)</span></h1>
            <br></br>
            <br></br>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quia doloremque esse, dicta ullam laudantium itaque velit quibusdam <br></br> excepturi, vero neque nam? Inventore, praesentium similique <br></br> perferendis laborum sequi modi atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas omnis nisi praesentium, quod cumque obcaecati ullam facere
            </p><br></br>
            <div>

    <label className="input w-full max-w-md border border-black mt-8">
     <svg className="h-[1em]  opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow " placeholder="📧 Email" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
    </label>

            </div>
            <br></br>
            <button className="btn btn-secondary w-48 mt-4">Search</button>

        </div>
        <div className='mt-6 rounded rounded-b-md '>

            <img src={photo} alt ="Hello" />

        </div>
       
    </div>
    <div>
    <Freebook/>
    </div>
    </div>
  )
}
