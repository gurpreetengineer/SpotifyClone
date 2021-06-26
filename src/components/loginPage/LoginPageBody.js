import React from 'react';
import styled from 'styled-components';
import GlobalFonts from './GlobalFonts';

function LoginPageBody() {
	return (
		<LoginPageBodyContainer>
			<GlobalFonts />
			<BodyHeading>
				<Heading>Listening is everything</Heading>
			</BodyHeading>
			<SubHeading>
				Millions of songs and podcasts. No credit card needed.
			</SubHeading>
		</LoginPageBodyContainer>
	);
}

const LoginPageBodyContainer = styled.div`
  min-height: 846px;
  background-image: url('https://www-growth.scdn.co/static/home/bursts.svg');
  background-color: rgb(41, 65, 171);
  background-size: 170%;
  background-position: 44% 7%;

	// for <Heading>
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const BodyHeading = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	padding-bottom: 70px;
`;
const Heading = styled.div`
	color: #1ED760;
	font-size: 156px;
	font-family: SpotifyFont;
	max-width: 837px;

	// To give our font a little right spacing, after "is"
	transform: translate(125px, 0px);
	text-indent: -1.3em;
	line-height: 166px;
`;

const SubHeading = styled.div`
	font-size: 18px;
	line-height: 24px;
	color: #1ED760;
`;



export default LoginPageBody;
