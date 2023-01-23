import React from "react";
import { Link } from "react-router-dom"

function Register() {

    return (
        <div className="flex flex-row h-full wrap-content">
            
            <div className="basis-3/4">
                <h2 className="m-10 font-bold text-2xl">Cookweb</h2>
                <div className="">
                    <div className="">
                        <div className="translate-x-2">

                        <div>

                            <h2 className="font-semibold text-xl mt-32 mb-10 text-center" >Buat Akunmu</h2>
                        </div>
                        <div className="h-screen flex justify-center items">
                        <form className="">
                            <input for="email" name="email" id="email" placeholder="Email" className="border border-gray-400 rounded-xl py-1 px-2 mb-3 h-11 lg:w-[40vw] md:w-[50vw] sm:w-[50vw] focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"></input><br></br>
                            <input for="nama" name="nama" id="nama" placeholder="Nama" className="border border-gray-400 rounded-xl py-1 px-2 mb-3 h-11 lg:w-[40vw] md:w-[50vw] sm:w-[50vw] focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"></input><br></br>
                            <input for="password" name="password" id="password" placeholder="Password" required className="border border-gray-400 rounded-xl px-2 py-1 h-11 lg:w-[40vw] md:w-[50vw] sm:w-[50vw] focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"></input>

                            <p className="mt-5 text-sm">Sudah punya akun? <span className="text-red-600">Masuk</span></p> 

                            <div className="flex justify-center">
                            <button className="text-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 w-44 rounded-xl mt-20 text-lg center-block">Buat Akun</button>

                            </div>
                        </form>

                        </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="max-lg:hidden">
                <img src={require("../assets/cover.png")} alt="cover"></img>
            </div>
        </div>

    )
}

export default Register