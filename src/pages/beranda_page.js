import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Beranda(){
    return(
        <>
        <div className="home">
            <div className="gambar max-sm:w-full">
                <img src={require("../assets/home.png")} alt="cover" className="w-full"></img>
            </div>
            <div className="hero">
                <div>
                    <h2 className=" text-xl mt-8 ml-20 font-bold max-sm:ml-10">Tambahkan makanan favorite kamu!</h2>
                    <div className="object-center  place-content-center mx-auto max-w-full">
                       <form className="flex items-center mt-10  justify-center items">   
                            <label  className="sr-only">Search</label>
                            <div className="relative ">
                            <input placeholder="Cari Makananmu Disini!"  className="border border-gray-400 rounded-xl py-1 px-2  h-11 lg:w-[40vw] md:w-[50vw] sm:w-[50vw] focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 text-center"></input>
                            </div>
                            <button type="submit" className="p-3 ml-5 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </form>
                    </div>                               
                </div>
            </div>

            <div className="menu">
                <div className="jajananpasar mr-20 ">
                    <h2 className=" text-lg mt-8 ml-20 font-bold max-sm:ml-10">Jajanan Pasar</h2>
                    <div className="max-sm:ml-10 relative boxmenu flex-nowrap mt-10 ml-20 sm:flex flex-row lg:flex flex-row">
                       <div className="lg:basis-1/2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 sm:basis-1/2 mb-5">
                                <a href="#">
                                    <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:basis-1/2 mr-5 ml-5 mb-5">
                                <a href="#">
                                    <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-1/2">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:basis-1/2 mr-5 ml-5 mb-5">
                                <a href="#">
                                    <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:basis-1/2 mr-5 ml-5 mb-5">
                                <a href="#">
                                    <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <button className="text-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 w-44 rounded-xl mt-10 text-lg ">Lebih Lanjut</button>
                    </div>
                    
                </div>

                <div className="hidanganutama mr-20">
                    <h2 className=" text-lg mt-8 ml-20 font-bold max-sm:ml-10">Hidangan Utama</h2>
                    <div className="relative boxmenu flex-nowrap mt-10 ml-20 flex flex-row">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        

                    </div>
                    <div className="flex flex-col items-end">
                        <button className="text-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 w-44 rounded-xl mt-10 text-lg ">Lebih Lanjut</button>
                    </div>
                    
                </div>

                <div className="hidanganpembuka mr-20">
                    <h2 className=" text-lg mt-8 ml-20 font-bold max-sm:ml-10">Hidangan Pembuka</h2>
                    <div className="relative boxmenu flex-nowrap mt-10 ml-20 flex flex-row">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        

                    </div>
                    <div className="flex flex-col items-end">
                        <button className="text-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 w-44 rounded-xl mt-10 text-lg ">Lebih Lanjut</button>
                    </div>
                </div>

                <div className="hidanganpenutup mr-20">
                    <h2 className=" text-lg mt-8 ml-20 font-bold max-sm:ml-10 ">Hidangan Penutup</h2>
                    <div className="relative boxmenu flex-nowrap mt-10 ml-20 flex flex-row">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
                            <a href="#">
                                <img className="rounded-t-lg"  src={require("../assets/home.png")} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risoles Mudah</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white text-right"> Silvi</p>
                            </div>
                        </div>
                        

                    </div>
                    <div className="flex flex-col items-end">
                        <button className="text-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 w-44 rounded-xl mt-10 text-lg ">Lebih Lanjut</button>
                    </div>
                    
                </div>
            </div>

            <div className="footer bg-red-600 mt-20 h-64 flex flex-row">
                <div className="kiri basis-1/2 ">
                    <p className="text-white text-2xl ml-10 mt-20">CookWeb</p>
                    <p className="text-white text-sm ml-10 ">CookWeb merupakan website pencarian resep. </p>
                    <p className="text-white text-sm ml-10">Resep yang ditampilkan mulai dari hidangan pembuka hingga hidangan penutup.</p>
                </div>
                <div className="kanan basis-1/2">
                <p className="text-white text-xl ml-10 mt-20">Contact Us</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Beranda;