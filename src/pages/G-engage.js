import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './G-engage.css';
import institution from '../assets/screen_inst.png';
import network from '../assets/screen_network.png';
import profile from '../assets/screen_profile.png';
import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function G_engage() {
	const [ toggleScroll, setToggleScroll ] = useState(false);
	const hideScroll = () => {
		if (window.scrollY >= document.documentElement.clientHeight - 500) {
			setToggleScroll(true);
		} else {
			setToggleScroll(false);
		}
	};
	// var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	useEffect(() => {
		AOS.init();
		window.addEventListener('scroll', hideScroll);
	}, []);
	return (
		<div className="Gengage">
			<Navbar />
			<section className="top">
				<div className="title">
					<h1>Engage with your members</h1>
					<p>
						Tools to create a vibrant community by eliminating
						tedious administration.
					</p>
				</div>
				<Link to="content" spy={true} smooth={true}>
					<div className={`box ${toggleScroll ? 'hide' : 'show'}`}>
						<span />
						<span />
						<span />
					</div>
				</Link>
			</section>

			<div id="content" className="content">
				<div className="displayUnitRight">
					<div className="imgContainer">
						<img src={institution} alt="" />
					</div>
					<div data-aos="fade-left" className="textBoxRight">
						<h1>Eliminate manual member management</h1>
						<p>
							Hate manually updating contact spreadsheets and
							chasing down lapsed memberships? We've streamlined
							membership applications, and automated renewals and
							contact updates.
						</p>
					</div>
				</div>
				<div className="displayUnitLeft">
					<div data-aos="fade-right" className="textBoxLeft">
						<h1>Expand your reach</h1>
						<p>
							A single, integrated institutional profile allows
							you to engage with your members and wider industry
							meaningfully through status/industry updates, and
							show off your members' products and offerings
							through custom catalogues.
						</p>
					</div>
					<div className="imgContainerLeft">
						<img src={network} alt="" />
					</div>
				</div>
				<div className="displayUnitRight">
					<div className="imgContainer">
						<img src={profile} alt="" />
					</div>
					<div data-aos="fade-left" className="textBoxRight">
						<h1>Maximise your resources</h1>
						<p>
							Give your members controlled access to your digital
							resources and files, with fully customisable
							permissions and fee structures.
						</p>
					</div>
				</div>
			</div>
			<footer>
				<span> &#169; 2020 Galigo Pte Ltd</span>
				<span>Terms</span>
				<span>Privacy</span>
			</footer>
		</div>
	);
}
