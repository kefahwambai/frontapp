import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Ignition<span>Rentals</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1"><Link to="/">Home</Link></a>
					
					< Link to="/AboutUs">AboutUs</Link>
				
					<Link to="/Services">Services</Link>
				
					<Link to="/ContactUs">Contact Us</Link>
					
					<Link to="/FAQ">FAQ</Link>
					
					<Link to="/PrivacyPolicy">PrivacyPolicy</Link>

          <Link to="/TermsOfService">TermsOfService</Link>

				</p>

				<p class="footer-company-name"> &copy; 2023 IgnitionRentals. All rights reserved.</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Kabati, Kitui</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+25471234567</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@ignitionrentals.com">support@ignitionrentals.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					IgnitionRentals is a trusted provider of car rental services with over 3 years of experience in the industry. Our company is dedicated to providing safe, reliable, and affordable transportation options that suit our customers' needs.
				</p>
				

			</div>

		</footer>
  );
};

export default Footer;


