import React from 'react'
import './Property.css'
import image1 from '../assets/pic2.jpg'

function Property() {
  return (
    <div className='property'>
      <div className="imgDiv">
        <img src={image1} alt="" />
      </div>
      <div className="popularTag">
        popular
      </div>
      <div className="like">
      {/* AiOutlineHeart */}
      </div>
      <div className="pBox">

        <div className="sBox">
          <span><span className='bigSpan'>$2,095</span>/month</span>
          <h4 className='propertyHeading'>Palm Harbour</h4>
          <span style={{ fontSize: "14px" }}>2699 Green Valley, Highland Lake, FL </span>
        </div>

        <hr style={{ width: "80%", marginTop: "10px" }} />

        <div className="functionBox" style={{ display: "flex", width: "100%", justifyContent: "space-around", marginBottom: "20px", marginTop: "10px" }}>
          <div>
            <span>I</span> &nbsp;&nbsp;&nbsp;
            <span>3 Beds</span>
          </div>

          <div>
            <span>I</span> &nbsp;&nbsp;&nbsp;
            <span>2 Bathrooms</span>
          </div>

          <div>
            <span>I</span> &nbsp;&nbsp;&nbsp;
            <span>5 &times; 7 m &sup2;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property