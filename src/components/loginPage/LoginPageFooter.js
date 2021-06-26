import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import GlobalFonts from './GlobalFonts';
import styled from 'styled-components';
import Globe from '../assets/images/svg/Globe.svg';
import footerData from '../assets/footer.json';
import SpotifyLogo from '../assets/images/svg/logo.svg';
import facebookGif from '../assets/images/gifs/icons8-facebook-circled-white.gif';
import githubGif from '../assets/images/gifs/icons8-github.gif';
import instagramGif from '../assets/images/gifs/icons8-instagram-white.gif';

function LoginPageFooter() {
	return (
		<Fragment>
			<GlobalFonts />
			<LoginPageFooterContainer>
				<InnerDiv>
					<MainDiv style={{ flex: 2 }}></MainDiv>
					<MainDiv>
						<MainDivDivider>
							<ColumnContainer>
								<FooterLogoLink to="/">
									<ImageDiv src={SpotifyLogo} />
								</FooterLogoLink>
							</ColumnContainer>
							<ColumnContainer>
								{footerData.map(footerdatum => (
									<ColumnData key={footerdatum.id}>
										<RowHeading>{footerdatum.name}</RowHeading>
										{footerdatum.data.map(rows => (
											<RowDataContainer key={rows.key}>
												<RowDataLinks href={rows.source}>{rows.heading}</RowDataLinks >
											</RowDataContainer>
										))}
									</ColumnData>
								))}
							</ColumnContainer>
						</MainDivDivider>
						<MainDivDivider>
							<ColumnContainer>
								<GifsContainer>
									<li>
										<GifLink href='https://github.com/gurpreetreact'><Gif src={githubGif} /></GifLink>
									</li>
									<li>
										<GifLink href='https://www.facebook.com/garrybamra/'><Gif src={facebookGif} /></GifLink>
									</li>
									<li>
										<GifLink href='https://www.instagram.com/thegarrybamrah/'><Gif src={instagramGif} /></GifLink>
									</li>
								</GifsContainer>
							</ColumnContainer>
						</MainDivDivider>
					</MainDiv>
					<MainDiv style={{ flex: 2 }}></MainDiv>
				</InnerDiv >
				<FooterDownContainer>
					<FooterDownMainDiv style={{ flex: 2 }}></FooterDownMainDiv>
					<FooterDownMainDiv>
						<FooterDownLeft>
							<FooterDown href="https://www.spotify.com/us/legal/">Legal</FooterDown>
							<FooterDown href="https://www.spotify.com/us/privacy/">Privacy Center</FooterDown>
							<FooterDown href="https://www.spotify.com/us/legal/privacy-policy/">Privacy Policy</FooterDown>
							<FooterDown href="https://www.spotify.com/us/legal/cookies-policy/">Cookies</FooterDown>
							<FooterDown href="https://www.spotify.com/us/legal/privacy-policy/#s3">About Ads</FooterDown>
							<FooterDown href="https://www.spotify.com/us/legal/California-privacy-disclosure/">Additional CA Privacy Disclosures</FooterDown>
						</FooterDownLeft>
						<FooterDownRight>
							<FooterDownRightChild style={{ padding: '0 0 6px', alignItems: 'center' }}>
								<GlobeImage src={Globe} />
								India
							</FooterDownRightChild>
							<FooterDownRightChild>© 2021 Spotify Clone GB</FooterDownRightChild>
						</FooterDownRight>
					</FooterDownMainDiv>
					<FooterDownMainDiv style={{ flex: 2 }}></FooterDownMainDiv>
				</FooterDownContainer>
			</LoginPageFooterContainer>
		</Fragment>
	);
}

const LoginPageFooterContainer = styled.div`
	min-height: 560px;
	background-color: black;
	justify-content: space-around;
`;
const GifsContainer = styled.ul`
	display: flex;
	list-style-type: none;
	flex-direction: flex-end;
`;
const GifLink = styled.a``;
const Gif = styled.img`
	height: 50px;
	margin: 10px;
	border-radius: 99px;
	object-fit: contain;
`;
const InnerDiv = styled.div`
	// height: 33vh;
	// overflow: hidden;
	padding: 65px 0;
	display: flex;
`;
const MainDiv = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 6;
`;
const MainDivDivider = styled.div`
	display: flex;
`;
const ImageDiv = styled.img`
	height: 65px;
`;
const ColumnContainer = styled.div`
	display: flex;
`;
const FooterLogoLink = styled(Link)``;
const ColumnData = styled.div`
	margin: 15px 50px;
	font-size: 16px;
	font-weight: 400;
	font-family:	SpotifyFont;
`;
const RowHeading = styled.div`
	text-transform: uppercase;
	color: #919496;
	font-size: 12px;
	font-weight: 900;
	margin: 20px 0;
`;
const RowDataContainer = styled.div`
	color: white;
	margin: 30px 0;

`;
const RowDataLinks = styled.a`
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: none;
		color: #1ED760;
	}	
`;

const FooterDownContainer = styled.div`
	color: white;
	display: flex;
`;

const FooterDownMainDiv = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 6;
	align-items: flex-end;
`;

const FooterDown = styled.a`
	font-size: 12px;
	color: #919496;
	text-decoration: none;

	&:hover {
		color: #1ED760;
		cursor: pointer;
	}
`;

const FooterDownLeft = styled.div`
	display: flex;
	flex: 4;
	justify-content: space-between;
`;

const FooterDownRight = styled.div`
	font-size: 12px;
	color: #919496;
	text-align: end;
	flex: 3;
`;

const FooterDownRightChild = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const GlobeImage = styled.img`
	padding-right: 6px;
`;

export default LoginPageFooter;
