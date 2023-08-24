import React from 'react'
import "./Footer.css"
import {FaLinkedin,FaMailBulk,FaPhone, FaInstagram,FaYoutube,FaTwitter,FaFacebookF} from "react-icons/fa"

function Footer() {
  return (
    <div className='footer'>

        <div className="footer-container">
        
            <div className="left">
            
                <div className="location">
                <div>
                <h2>Address</h2>
                <h4>Vignana Jyothi Nagar, Pragathi Nagar, Nizampet (S.O)</h4>
                <h4>Hyderabad, Telangana
                    India - 500 090</h4>
                <h4>Fax : 91-040-23042761
                </h4>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>Ph. No. : 91-040-230427 58/59/60</h4>
                </div>      
                <div className="gmail">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>E-mail : postbox@vnrvjiet.ac.in</h4>
                    </div>     
                   
            </div>

            <div className="right">
            <h2>Contact Us</h2>
                <h5>Rahul</h5>
                <h5>Sai</h5>

                <h2>Connect With Us</h2>
                  
                <div className="social">
                    <a target='_blank' href="https://www.instagram.com/vnrvjiet.hyd/"><FaInstagram size={20} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a target='_blank' href="https://twitter.com/i/flow/login?redirect_after_login=%2Fvnrvjiethyd"><FaTwitter size={20} style={{color:"#fff", marginRight:"1rem"}}/></a>    
                    <a target='_blank' href="https://www.youtube.com/@vnrvjiethyd/"><FaYoutube size={20} style={{color:"#fff", marginRight:"1rem"}}/></a>
                
                
                <a target='_blank' href="https://www.linkedin.com/school/vnrvjiethyd/"><FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem"}}/></a>
                <a target='_blank' href="https://www.facebook.com/people/Vnrvjietofficial/100064949286608/"><FaFacebookF size={20} style={{color:"#fff", marginRight:"1rem"}}/></a>
                <a href="https://www.google.com/maps?ll=17.538882,78.386293&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8864362971979968148" className="cta-button">Get Directions </a>

                
                    </div>     
            </div>
        </div>
    </div>
  )
}

export default Footer;