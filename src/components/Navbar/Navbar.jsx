import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserContext } from '../../context/user.context'
import { signOutAuth } from '../../utils/firebase'

export default function Navbar() {
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <div className="w-full">
            <header class=" body-font  bg-[#cdd5e0] z-50">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    {
                        currentUser ?
                            <Link
                                to='/dashboard'
                                class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                            >
                                <img src={logo} alt="" width="100" />
                            </Link> : <Link
                                to='/'
                                class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                            >
                                <img src={logo} alt="" width="100" />
                            </Link>
                    }

                    {
                        !currentUser ? <>
                            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-xxl">
                                <Link to="/" class="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
                                <a class="mr-5 hover:text-gray-900 cursor-pointer" href='#about-us'>About us</a>
                                <Link
                                    to='/add-shop'
                                    class="mr-5 hover:text-gray-900 cursor-pointer" >Add Your shop</Link>
                            </nav>
                            <Link to='login'>
                                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">LogIn
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                        </> : <>
                            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-xxl">
                                <Link to="/dashboard" class="mr-5 hover:text-gray-900 cursor-pointer">Dashboard</Link>
                            </nav>
                            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black"
                                onClick={() => {
                                    signOutAuth()
                                    localStorage.removeItem('user')
                                    navigate('/login')
                                }
                                }
                            >LogOut
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </>
                    }

                </div>
            </header>
        </div>
    )
}
