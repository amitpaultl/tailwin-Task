import React from 'react';
import logo from '../image/logo 1.png'
import product from '../image/radiation 1.png'
import aboutimg from '../image/image 83.png'
import './Home.css'
import slider from '../image/image 80.png'
const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li>
                                <a>
                                    Product
                                </a>

                            </li>
                            <li><a>Price</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* hero area */}

            <div className="hero-area py-20">
                <div className="container mx-auto">
                    <div className="hero  ">
                        <div className="hero-content text-center text-white">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Hello there</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-wide text-black bg-white rounded-none border-0 hover:bg-amber-400">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product area */}

            <div className="product-area py-5">
                <div className="container mx-auto">
                    <div className='font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        <div className="card">
                            <figure className="px-10 pt-10">
                                <img src={product} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card">
                            <figure className="px-10 pt-10">
                                <img src={product} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card">
                            <figure className="px-10 pt-10">
                                <img src={product} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About us area */}

            <div className="about-area py-20 bg-slate-200 ">
                <div className="container mx-auto">
                    <div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
                        <div className="about-text pl-9">
                            <h2 className='text-4xl font-bold'>About Us</h2>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem asperiores labore quam sed neque atque, nemo quia itaque reprehenderit eum omnis nostrum voluptatibus architecto accusamus doloremque voluptatem nihil vitae optio?</p>
                        </div>
                        <div className='about-img text-right items-end'>
                            <img src={aboutimg} className='items-end mx-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* slider */}

            <div className="slider-area py-20">
                <div className="container mx-auto">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="slider-part  md:flex  mx-auto">
                                <img src={slider} alt='img' className="w-full sm:m-auto" />
                                <div className="slider-text sm:text-center">
                                    <h3 className='text-4xl font-bold'>John Bro</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate numquam ipsam adipisci optio necessitatibus officiis quibusdam aperiam repellendus explicabo aliquid aliquam vitae nobis praesentium incidunt, veritatis sapiente? Molestias, autem? Placeat.

                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn hover:bg-white bg-white border-0 text-black">❮</a>
                                <a href="#slide2" className="btn hover:bg-white bg-white border-0 text-black">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="slider-part">
                                <img src={slider} alt='img' className="w-full" />
                                <div className="slider-text">
                                    <h3 className='text-4xl font-bold'>John Bro</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate numquam ipsam adipisci optio necessitatibus officiis quibusdam aperiam repellendus explicabo aliquid aliquam vitae nobis praesentium incidunt, veritatis sapiente? Molestias, autem? Placeat.

                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn hover:bg-white  bg-white border-0 text-black">❮</a>
                                <a href="#slide3" className="btn hover:bg-white  bg-white border-0 text-black">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="slider-part">
                                <img src={slider} alt='img' className="w-full" />
                                <div className="slider-text">
                                    <h3 className='text-4xl font-bold'>John Bro</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate numquam ipsam adipisci optio necessitatibus officiis quibusdam aperiam repellendus explicabo aliquid aliquam vitae nobis praesentium incidunt, veritatis sapiente? Molestias, autem? Placeat.

                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn hover:bg-white  bg-white border-0 text-black">❮</a>
                                <a href="#slide4" className="btn hover:bg-white  bg-white border-0 text-black">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="slider-part">
                                <img src={slider} alt='img' className="w-full" />
                                <div className="slider-text">
                                    <h3 className='text-4xl font-bold'>John Bro</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate numquam ipsam adipisci optio necessitatibus officiis quibusdam aperiam repellendus explicabo aliquid aliquam vitae nobis praesentium incidunt, veritatis sapiente? Molestias, autem? Placeat.

                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn hover:bg-white  bg-white border-0 text-black">❮</a>
                                <a href="#slide1" className="btn hover:bg-white  bg-white border-0 text-black">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* input area */}

            <div className="input-area py-20 bg-lime-600 text-center">
                <div className="container mx-auto">
                    <div className="row">
                        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                        <button className="btn hover:bg-amber-400 border-0 bg-white text-slate-900 px-10 ml-6">Info</button>
                    </div>
                </div>
            </div>

            {/* footer area */}

            <div className="footer-area pt-10 bg-base-200">
                <div className="container mx-auto">
                    <footer className="footer pl-9  text-base-content">
                        <div className=' md:w-96'>
                            <span className="footer-title text-black text-2xl font-bold">Services</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, magni deleniti est odit iure quos aliquid numquam. Repellendus et nobis hic sequi corporis molestiae quia nemo, est dolores explicabo eos consectetur impedit inventore aspernatur vel quisquam provident voluptates sit quas.</p>
                        </div>
                        <div>
                            <span className="footer-title text-black text-2xl font-bold">Company</span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                            <span className="footer-title text-black text-2xl font-bold">Legal</span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <div className="md:place-self-center md:justify-self-end">
                                <div className="grid grid-flow-col gap-4">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
            <footer className=" bg-black px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className=" text-center">

                    <p className='text-white'>ACME Industries Ltd. Providing reliable tech since 1992</p>
                </div>

            </footer>
        </div>
    );
};

export default Home;