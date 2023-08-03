/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import Hero from '../components/hero';


const home = () => {
  return <>
    <section className="banner">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-column justify-content-center ">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className='back-details'>
                    <p className='mb-3'>Store in offer</p>
                    <h1>Super Value Deals</h1>
                    <h2>On all products</h2>

                    <p className='mb-3'>Save more today with F1 Store</p>

                    <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Hero />

    <section className="featured-products p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Featured Products</h1>
            <p> New Modern Designs</p>
          </div>
          <Featuredproducts />
        </div>
      </div>
    </section>
    <section className="new-arrivals p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>New Arrivals</h1>
            <p>Your Best Designer Outfits</p>
          </div>
          <Newarrivals />
        </div>
      </div>
    </section>
    <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card m-auto mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={"https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fmx%2Ffull%2FBMX_20230727_BMX_10615_GettyImages-1486308298-scaled-e1690428954561.webp&width=470&height=352"} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">hot news</h5>
                    <h2 className="card-text mb-2">Know the news of the moment.</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">Best news on de moment</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  </>;
}

export default home