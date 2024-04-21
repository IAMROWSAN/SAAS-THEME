import React from "react";

import Details_image from '../imgs/1.png'

export default function Details(){
    return(
        <>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row  flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-BaseFont">That makes us special!
       
      </h1>
      <p class="mb-8 leading-relaxed font-BaseFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi est exercitationem odio omnis blanditiis perferendis aperiam animi quaerat corrupti nostrum natus neque, quo mollitia. Magnam labore nulla amet atque..</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none  rounded-3xl font-BaseFont text-md">Get Started</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-3xl font-BaseFont text-md">Read more?</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={Details_image}></img>
    </div>
  </div>
</section>
        </>
    )
}