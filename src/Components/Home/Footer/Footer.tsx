import React from 'react'
import {FaGithubAlt,FaTwitter} from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div>Made with ❤️ By Arman Kazi</div>
        <div style={{"display":"flex","justifyContent":"center","gap":"10px"}}>
            <a href='https://github.com/Amyx000' target={"_blank"} rel="noreferrer noopener"><FaGithubAlt className='social-icon'/></a>
            <a href='https://twitter.com/Armankazi111' target={"_blank"} rel="noreferrer noopener"><FaTwitter className='social-icon'/></a>
        </div>
    </div>
  )
}

export default Footer