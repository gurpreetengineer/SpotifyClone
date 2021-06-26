import React from 'react';
import styled from 'styled-components';
import footerData from '../assets/footer.json';
import SpotifyLogo from '../assets/images/svg/logo.svg';
import facebookGif from '../assets/images/gifs/icons8-facebook-circled-white.gif';
import githubGif from '../assets/images/gifs/icons8-github.gif';
import instagramGif from '../assets/images/gifs/icons8-instagram-white.gif';

function LoginPageFooter() {
	return (
		<LoginPageFooterContainer>
			<InnerDiv>
				<MainDiv>
					<ImageDiv src={SpotifyLogo} />
					{/* <ColumnContainer> */}
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
					{/* </ColumnContainer> */}
					<GifsContainer>
						<Gif src={githubGif} />
						<Gif src={facebookGif} />
						<Gif src={instagramGif} />
					</GifsContainer>
				</MainDiv>
			</InnerDiv>
		</LoginPageFooterContainer>
	);
}

const LoginPageFooterContainer = styled.div`
	min-height: 500px;
	background-color: black;
	color: white;
	// display: flex;

	// align-items: center
`;
const GifsContainer = styled.div``;
const Gif = styled.img`
	height: 50px;
	margin: 10px;
	border-radius: 99px;
	object-fit: contain;
`;
const InnerDiv = styled.div`
	height: 50vh;
	overflow: hidden;
	padding: 100px 0;
`;
const MainDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const ImageDiv = styled.img`
	height: 65px;
`;

// const ColumnContainer = styled.div`
// 	display: flex;
// `;
const ColumnData = styled.div``;


const RowHeading = styled.div`
	text-transform: uppercase;
`;

const RowDataContainer = styled.div`
	color: white;
`;

const RowDataLinks = styled.a`
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
	
`;

export default LoginPageFooter;
