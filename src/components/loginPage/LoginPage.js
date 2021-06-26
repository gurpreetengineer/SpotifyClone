import React from 'react';
import styled from 'styled-components';
import LoginPageHeader from './LoginPageHeader';
import LoginPageBody from './LoginPageBody';
import LoginPageFooter from './LoginPageFooter';


function LoginPage() {
	return (
		<LoginPageContainer>
			<LoginPageHeaderComponent />
			<LoginPageBodyComponent />
			<LoginPageFooterComponent />
		</LoginPageContainer>
	);
}

const LoginPageContainer = styled.div`

`;
const LoginPageHeaderComponent = styled(LoginPageHeader)``;
const LoginPageBodyComponent = styled(LoginPageBody)``;
const LoginPageFooterComponent = styled(LoginPageFooter)``;

export default LoginPage;
