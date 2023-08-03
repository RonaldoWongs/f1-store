/* eslint-disable no-unused-vars */
import React from 'react'

const about = () => {
  return <>
  <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Know Us</h1>
            <p className='text-white fs-3'>Get to know us more</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us p-5">
    <div className="row">
      <div className="col-md-6">
        <img src={"https://graffica.info/wp-content/uploads/2017/11/F1_Unveil_Images_Final-640x400.png"} alt="" className='img-fluid p-5' />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1><b>Formula 1</b></h1>
        <p className="card-text mb-3">Formula 1, abbreviated as F1 and also called the "queen class of motorsports" or "the highest category of motorsports", is the most popular and prestigious international motorsport competition, surpassing motorsport categories such as NASCAR, the World Championship of Rally, the World Touring Car Championship or Formula E, among others. Each race is called a Grand Prix and the tournament that brings them together is called the Formula 1 World Championship. The entity that runs it is the International Automobile Federation (FIA). The Formula One Group has been controlled by the American company Liberty Media since September 2016.

The cars used are single-seaters with the latest available technology, always limited by a technical regulation; some improvements that were developed in Formula 1 ended up being used in commercial cars, such as the disc brake. Most of the racing circuits where the Grand Prix are held are road tracks, although street circuits are also used and road circuits were previously used.

The beginning of modern Formula 1 dates back to 1950, in which teams such as Ferrari, Alfa Romeo and Maserati participated. Some were replaced by new ones such as McLaren, Williams, Lotus and Renault, which have won the Constructors' World Championship several times. The teams have to plan their signings and contract renewals 2 or 3 races before the end of the season. For their part, the drivers must have the FIA ​​Super License to compete, which is obtained on the basis of results in other championships.</p>
        <p className="card-text"></p>
      </div>
    </div>
  </section>

  </>;
}

export default about