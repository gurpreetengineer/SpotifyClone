import React from 'react';
import styled from 'styled-components';
import LoginPageHeader from './LoginPageHeader';
import LoginPageBody from './LoginPageBody';
import LoginPageFooter from './LoginPageFooter';


function LoginPage() {
	return (
		<LoginPageContainer>
			<LoginPageHeader />
			<LoginPageBody />
			<LoginPageFooter />
		</LoginPageContainer>
	);
}

const LoginPageContainer = styled.div``;

export default LoginPage;
