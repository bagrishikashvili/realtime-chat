import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { isEmpty } from "lodash";
import { NaivgatoinHeader } from '@components'
import { io } from "socket.io-client";

const HomePage = ({user}) => {
    const socket = useRef(io("ws://localhost:8900"));

    useEffect(() => {
        //socket.current.emit("join-room", user.user);
    }, []);

    return (
        <Container>
            <NaivgatoinHeader lable="Watchlist"/>
            <HomeBody>
                <ContainerBody>

                </ContainerBody>
            </HomeBody>
        </Container>
    )
}
const Container = styled.div `

`
const HomeBody = styled.div `
    padding: 0px 30px;
`
const ContainerBody = styled.div `
    background-color: #212121;
    border-radius: 5px;
    padding: 16px;
`


export default connect(state => {
    return {
        user: state.currentUser.data
    }
  }
)(HomePage);