//File will hold the footer links including
//link to hd, link to nasa
import React from "react";
import styled from "styled-components";

const FOOT = styled.div`
	// border: 5px solid Purple;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding-top: 1.3rem;
	padding-bottom: 2rem;
	background-color: black;
	color: white;
	font-size: 1rem;
	a {
		text-decoration: overline;
		color: white;
	}
	a:hover {
		font-size: 1.5rem;
	}
`;

function Footer(props) {
	return (
		<FOOT>
			<div>
				<a href={props.hdurl}>See Image in HD</a>
			</div>{" "}
			<div>|</div>
			<div>
				<a href="https://www.nasa.gov/">Visit the NASA Website </a>
			</div>{" "}
			<div>|</div>
			<div>
				Project made with{" "}
				<a href="https://api.nasa.gov/">NASA APOD API</a>
			</div>
		</FOOT>
	);
}
export default Footer;
