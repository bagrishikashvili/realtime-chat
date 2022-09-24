import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { login, setCurrentUser } from '@redux/actions/signin';
import { isEmpty } from "lodash";

const HomePage = ({singin, isLoading, loginAction, setCurrentUserAction}) => {

    useEffect(() => {
        if (!isEmpty(singin)) {
            const setTokenToLocalStorage = async () => {
                await localStorage.setItem('access_token', singin.token);
                setCurrentUserAction(singin);
            }
            setTokenToLocalStorage();
        }
    }, [singin]);

    const onFinish = async (values) => {
        await loginAction(values);
    };


    return (
        <Container>
            <Title>Realtime</Title>
            <LoginContainer>
            <Form name="basic" onFinish={onFinish} autoComplete="off">
                <Form.Item name="username">
                    <Input placeholder="Username"/>
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password placeholder="Password"/>
                </Form.Item>
                <Button block htmlType="submit" loading={isLoading}>Sign in</Button>
            </Form>
            </LoginContainer>
        </Container>
    )
}
const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const LoginContainer = styled.div `
    /* background-color: rgb(33,33,33); */
    min-width: 400px;
    border-radius: 10px;
    padding: 16px;
`
const Title = styled.div `
    margin-bottom: 5px;
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: -2px;
    background: linear-gradient(122.53deg, #4C54D2 0%, #BF14A2 56.25%, #F73A1C 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    line-height: 4rem;
`
export default connect(state => {
    return {
        singin: state.signIn.data,
        isLoading: state.signIn.loading
    }
  },
  dispatch => ({
    loginAction: (values) => dispatch(login(values)),
    setCurrentUserAction: (user) => dispatch(setCurrentUser(user))
  })
)(HomePage);