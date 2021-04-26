import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './G-engage.css';
import galigoWhite from '../assets/white.png';
import institution from '../assets/screen_inst.png';
import network from '../assets/screen_network.png';
import profile from '../assets/screen_profile.png';
import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>
						<div className="content">{children}</div>
					</Typography>
				</Box>
			)}
		</div>
	);
}

export default function G_engage() {
	const [ toggleScroll, setToggleScroll ] = useState(false);
	const [ value, setValue ] = useState(0);
	const theme = useTheme();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`
		};
	}
	const hideScroll = () => {
		if (window.scrollY >= document.documentElement.clientHeight - 500) {
			setToggleScroll(true);
		} else {
			setToggleScroll(false);
		}
	};

	const StyledTabs = withStyles({
		indicator: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			'& > span': {
				maxWidth: 70,
				width: '100%',
				backgroundColor: '#2ec1ac'
			}
		}
	})((props) => (
		<Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
	));

	const StyledTab = withStyles((theme) => ({
		root: {
			textTransform: 'none',
			color: 'black',
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: theme.typography.pxToRem(15),
			marginRight: theme.spacing(1),
			'&:focus': {
				opacity: 1
			}
		}
	}))((props) => <Tab disableRipple {...props} />);
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1
		},
		padding: {
			padding: theme.spacing(3)
		},
		demo1: {
			backgroundColor: theme.palette.background.paper
		},
		demo2: {
			backgroundColor: '#2e1534'
		}
	}));
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
					<img src={galigoWhite} alt="" />
					<h1>Unite. Engage. Influence.</h1>
					<p>
						Galigo-engage gives your association elegantly simple
						tools to create and manage vibrant communities - with
						absolutely no subscription fees.
					</p>
					<form action="">
						<input
							type="text"
							placeholder="Enter your email address and we'll get started right away"
						/>
						<button>Let's try</button>
					</form>
				</div>
				<Link to="content" spy={true} smooth={true}>
					<div className={`box ${toggleScroll ? 'hide' : 'show'}`}>
						<span />
						<span />
						<span />
					</div>
				</Link>
			</section>

			<div id="content">
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					centered
					style={{ padding: '0' }}
				>
					<StyledTab
						label="Membership Management"
						{...a11yProps(0)}
					/>
					<StyledTab label="Community Engagement" {...a11yProps(1)} />
					<StyledTab label="Member database" {...a11yProps(2)} />
				</StyledTabs>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChangeIndex}
				>
					<TabPanel value={value} index={0}>
						<div className="displayUnitRight">
							<div className="imgContainer">
								<img src={institution} alt="" />
							</div>
							<div
								data-aos="fade-left"
								className="textBoxRight"
								style={{ top: '5%' }}
							>
								<h1>Streamline your application process</h1>
								<p>
									G-engage fully automates online membership
									applications to give your new members a
									fantastic first impression and eliminate
									paperwork. Our built-in “request for
									information” system reduces unnecessary
									emails asking for missing information.
								</p>
							</div>
						</div>
						<div className="displayUnitLeft">
							<div data-aos="fade-right" className="textBoxLeft">
								<h1>Automate your member renewals</h1>
								<p>
									Stop chasing down lapsed members for
									theirdues. Galigo automates renewal
									reminders and invoices automatically without
									you having to fiddle with complicated
									settings.
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
								<h1>Versatile and simple payments options</h1>
								<p>
									Collecting cheques by mail that take two
									weeks to bank is a thing of the past with
									G-engage’s simple online payments that allow
									members to pay by credit card or Paynow.
								</p>
							</div>
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="displayUnitLeft">
							<div className="imgContainerLeft">
								<img src={institution} alt="" />
							</div>
							<div data-aos="fade-right" className="textBoxLeft">
								<h1>Post instant status-updates</h1>
								<p>
									Why use email to spam your members with
									less-important updates when you can just
									post using the social media format we all
									know and love?
								</p>
							</div>
						</div>
						<div className="displayUnitRight">
							<div data-aos="fade-left" className="textBoxRight">
								<h1>Send one-click email blasts</h1>
								<p>
									For very important updates that you
									absolutely need your members to see, a
									single click is all it takes to send an
									email blast of that update to all your
									members
								</p>
							</div>
							<div className="imgContainer">
								<img src={network} alt="" />
							</div>
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<div className="displayUnitRight">
							<div className="imgContainer">
								<img src={institution} alt="" />
							</div>
							<div data-aos="fade-left" className="textBoxRight">
								<h1>Easily add your existing members</h1>
								<p>
									Whether you want to add existing members
									into your database all at once with a
									spreadsheet or one-by-one, Galigo’s got you
									covered.
								</p>
							</div>
						</div>
						<div className="displayUnitLeft">
							<div data-aos="fade-right" className="textBoxLeft">
								<h1>Find the right people effortlessly</h1>
								<p>
									Need to find current members currently
									working in particular companies? Just check
									a few boxes and presto!
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
								<h1>Keep your member information up-to-date</h1>
								<p>
									Member changed their email address or phone
									number and they suddenly become
									uncontactable? Such silliness is no more
									with each member profile being linked
									directly to the main member database.
								</p>
							</div>
						</div>
					</TabPanel>
				</SwipeableViews>
			</div>
			<footer>
				<span> &#169; 2020 Galigo Pte Ltd</span>
				<span>Terms</span>
				<span>Privacy</span>
			</footer>
		</div>
	);
}
