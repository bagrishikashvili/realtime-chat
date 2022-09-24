import React, { useState } from "react";
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Toast } from 'antd-mobile';

const HomePage = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        // myApi({
        //     endpoint: '/login',
        //     method: 'POST',
        //     body: {...values}
        // }).then( async (res) => {
        //     setLoading(false);
        // }).catch((err) => {
        //     setLoading(false);
        //     Toast.show({
        //         icon: 'fail',
        //         content: err.message
        //     });
        // });
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
                <Button block htmlType="submit" loading={loading}>Sign in</Button>
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
export default HomePage;