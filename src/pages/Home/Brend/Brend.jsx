import React from 'react'
import "./brend.css"
import sony from "../../../assets/images/sony.png"

export const Brend = () => {
  return (
    <div>
        <section>
            <div className="container">
                <div className="sect_head">
                    <div className="top">
                    Top Brands
                    </div>
                </div>
                <hr  className='ha' />
                <div className="blogs">
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                    <div className="blog">
                        <img src={sony} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
