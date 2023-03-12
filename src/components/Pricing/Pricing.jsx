// import React from 'react'

// function Pricing() {
//     return (
//         <div className="flex flex-wrap m-6 justify-center">
//             <div class="w-1/4 flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  m-4 sm:w-full">
//                 <h3 class="mb-4 text-2xl font-semibold">One side</h3>
//                 <p class="font-light  sm:text-lg dark:text-gray-400">Print one side of your page with black and white print</p>
//                 <div class="flex justify-center items-baseline my-8">
//                     <span class="mr-2 text-5xl font-extrabold">Rs. 2 </span>
//                     <span class=" dark:text-gray-400">/Page</span>
//                 </div>
//                 <ul role="list" class="mb-8 space-y-4 text-left">
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>A4 Page</span>
//                     </li>
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>Print only on one side</span>
//                     </li>
//                 </ul>
//                 {/* <a href="#" class=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-primary-900">Get started</a> */}
//             </div>

//             <div class="w-1/4 flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  m-4 sm:w-full" >
//                 <h3 class="mb-4 text-2xl font-semibold">Both side</h3>
//                 <p class="font-light  sm:text-lg dark:text-gray-400">Print both side of your page with black and white print</p>
//                 <div class="flex justify-center items-baseline my-8">
//                     <span class="mr-2 text-5xl font-extrabold">Rs. 2 </span>
//                     <span class=" dark:text-gray-400">/Page</span>
//                 </div>
//                 <ul role="list" class="mb-8 space-y-4 text-left">
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>A4 Page</span>
//                     </li>
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>Print  on both side</span>
//                     </li>
//                 </ul>
//                 {/* <a href="#" class=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-primary-900">Get started</a> */}
//             </div>

//             <div class="w-1/4 flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  m-4 sm:w-full">
//                 <h3 class="mb-4 text-2xl font-semibold">Color Print</h3>
//                 <p class="font-light  sm:text-lg dark:text-gray-400">Fill your file with colors, Posters</p>
//                 <div class="flex justify-center items-baseline my-8">
//                     <span class="mr-2 text-5xl font-extrabold">Rs. 7 </span>
//                     <span class=" dark:text-gray-400">/Page</span>
//                 </div>
//                 <ul role="list" class="mb-8 space-y-4 text-left">
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>A4 Page</span>
//                     </li>
//                     <li class="flex items-center space-x-3">
//                         <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                         <span>Print  on both side or One side</span>
//                     </li>
//                 </ul>
//                 {/* <a href="#" class=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-primary-900">Get started</a> */}
//             </div>
//         </div>
//     )
// }

// export default Pricing

import React from "react";

export default function Pricing() {
    return (
        <>
            <div className="h-98 xl:mx-auto xl:container p-20 ">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">Choose as per need</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Our pricing plan
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                        </p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Black and white</h2>
                                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                        Rs. 2<span className="font-normal text-base">/page</span>
                                    </p>
                                </p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Print file in black and white sign on both side of A4 pages</p>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Color print</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                        Rs. 7<span className="font-normal text-base">/page</span>
                                    </p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Print your posters or gives your files some colors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
