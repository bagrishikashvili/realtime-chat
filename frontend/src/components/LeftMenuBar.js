import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { LoginOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';
import { Dialog } from 'antd-mobile';
import { clearCurrentUser } from '@redux/actions/signin';
const LeftMenuBar = ({clearCurrentUserAction}) => {

    const logOut = () => {
        Dialog.confirm({
            content: 'Are you sure you want to log out?',
            cancelText: 'Cancel',
            confirmText: 'Log out',
            onConfirm: () => exit()
          });
    }

    const exit = async () => {
        await localStorage.removeItem('access_token');
        await clearCurrentUserAction({});

    }

    return (
        <LeftColumn>
            <LeftColumnBlock>
                <LeftColumnBody>
                    <LeftColumnHeader>
                        <TextLogo>Realtime</TextLogo>
                        <LogOut onClick={() => logOut()}><LoginOutlined /></LogOut>
                    </LeftColumnHeader>
                </LeftColumnBody>
            </LeftColumnBlock>
        </LeftColumn>
    )
}
const LeftColumn = styled.div `
    min-width: 12rem;
    width: 33vw;
    max-width: 26.5rem;
    height: 100vh;
    position: relative;
    background-color: rgb(33,33,33);
`
const LeftColumnBlock = styled.div `
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const LeftColumnBody = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1;
`
const LeftColumnHeader = styled.div `
    background-color: #1e1e1e;
    padding: 0px 16px;
    height: 65px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const TextLogo = styled.div `
    margin-bottom: 5px;
    font-size: 2.3rem;
    font-weight: 900;
    letter-spacing: -1px;
    background: linear-gradient(122deg, #4C54D2 0%, #BF14A2 40%, #F73A1C 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    line-height: 2.3rem;
`
const LogOut = styled.span `
    font-size: 1.4rem;
    cursor: pointer;
    color: #8c8c8c;
    transition: color .2s linear;
    &:hover {
        color: #fff;
    }
`

export default connect(state => {
    return {
        user: state.currentUser.data
    }
  },
  dispatch => ({
    clearCurrentUserAction: () => dispatch(clearCurrentUser())
  })
)(LeftMenuBar);