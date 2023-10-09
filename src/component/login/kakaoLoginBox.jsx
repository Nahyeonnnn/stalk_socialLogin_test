import React from 'react';
// import axios from 'axios';
import { styled } from 'styled-components';
import LoginButton from './kakao_login_large_narrow.png';

const ButtonImg = styled.img`
    width: 16rem;
    max-width: 250px;
`;

const KakaoLoginBox = () => {

    const REST_API_KEY = ''; //kakao에서 발급받은 secret key
    const REDIRECT_URI = 'https://stalk-login-test.pages.dev/kakao/callback';//kakao_callback_url
    const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    function LoginClick(){
        window.location.href = link;
    }

    return (
        <div>
            <ButtonImg src={LoginButton} onClick={LoginClick}></ButtonImg>
        </div>
    );
};

export default KakaoLoginBox;
