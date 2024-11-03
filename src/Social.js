import React from 'react'
import { FaBars, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
function Social() {
    return (
        <ul className="social-icons">
            <li>
                <a href="https://twitter.com">
                <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://instagram.com">
                <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                <FaFacebook />
                </a>
            </li>
        </ul>
    )
}

export default Social