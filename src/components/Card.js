import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShop } from 'react-icons/ai'

function Card({ shop }) {
  return (
    <div class="w-full p-4 md:w-1/2 xl:w-1/4 custom_card m-3">
      <div class="mb-10 overflow-hidden rounded-lg bg-white flex justify-center flex-col ">
        <img
          src={shop.img}
          alt="image"
          class="w-full h-56 object-cover object-center mb-7"
        />
        <div class="text-center flex flex-col gap-2 ">
            <h3 className='text-xl font-bold'> 
              {shop.name}</h3>
          <p class="text-body-color text-base leading-relaxed">
            {shop.address}
          </p>
          <p class="text-body-color text-base leading-relaxed">
            {shop.phoneNo}
          </p>
          <Link
            to={`/shop/${shop.Id}`}
            class="text-body-color hover:border-primary hover:bg-blue-600 hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white cursor-pointer"
          >
            Print Your files
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card
