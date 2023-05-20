import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <h2 className='phone'>Questions? Call 808630527</h2>
                <div className="footBox">
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Way to Watch</a></li>
                        <li><a href="">Corporate information</a></li>
                        <li><a href="">Netflix Originals</a></li>

                    </ul>
                </div>
                <div className="footBox">
                    <ul>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footBox">
                    <ul>
                        <li><a href="">Accounts</a></li>
                        <li><a href="">Reedem Gift Cards</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Speed Test</a></li>
                    </ul>
                </div>
                <div className="footBox">
                    <ul>
                        <li><a href="">Media Center</a></li>
                        <li><a href="">Buy Gift Cards</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Legal Notices</a></li>
                    </ul>
                </div>


                <div class="dropdown">
                    <button class="dropbtn">English   ⩖</button>
                    <div class="dropdown-content">
                        <a href="#">Malayalam</a>
                        <a href="#">Tamil</a>
                        <a href="#">Hindi</a>
                    </div>
                </div>

                <p className='rights'>@copyrights netflix pvt limited</p>

            </div>

        </div>
    )
}

export default Footer
