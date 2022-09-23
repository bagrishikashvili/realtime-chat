
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector } from "react-redux";
import { ScreenLoading } from '@components';
import { isEmpty } from 'lodash';
import Guest from './Guest'
import { generateJSXMeshGradient } from "meshgrad";
import styled from 'styled-components';
const RootScreens = () => {
    const user = useSelector((state) => state.user);
    const [loadingScreen, setLoadingScreen] = useState(true);
    // useLayoutEffect(() => {
    //     document.documentElement.setAttribute(
    //       'data-prefers-color-scheme', 'dark'
    //     )
    //   }, [])


    useEffect(() => {
        setTimeout(() => {
            setLoadingScreen(false);
        }, 1000)
    }, [])

    // const getCurrentUser = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:8000/api/messages/" + currentChat?._id);
    //     } catch (err) {
    //     console.log(err.message);
    //     }
    // }


    return (
        loadingScreen ? 
            <ScreenLoading/> 
        :
        <GuestContainer style={generateJSXMeshGradient(12)}>
            <BackgroundContainer>
                {isEmpty(user) ? <Guest/> : null }
            </BackgroundContainer>
        </GuestContainer>
    )
}
const GuestContainer = styled.div `
    background-color: #000;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    min-width: 0;
`
const BackgroundContainer = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    background-color: rgb(0 0 0 / 92%);
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-position: top right;
        background-repeat: repeat;
        background-size: 510px auto;
        background-image: url('https://web.telegram.org/z/chat-bg-pattern-dark.ad38368a9e8140d0ac7d.png');
        mix-blend-mode: unset;
    }

    
`
export default RootScreens;