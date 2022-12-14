import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { LoginOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';
import { Dialog } from 'antd-mobile';
import { map } from "lodash";
import { clearCurrentUser } from '@redux/actions/signin';
import { getRooms, clearRooms } from '@redux/actions/getRooms';
import { Link, useHistory } from "react-router-dom";
const LeftMenuBar = ({clearCurrentUserAction, rooms, clearRoomsActions, getRoomsActions}) => {
    const navigate = useHistory();
    useEffect(() => {
        getRoomsActions();

        return () => {
            clearRoomsActions();
        }
    }, []);



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
                    <RoomsContainer>
                        {
                            map(rooms, (item, index) => {
                                return (
                                    <MenuItem key={item.roomId} onClick={() => navigate.push(`/room/${item.roomId}`, { room: item.name })}>
                                        {item.name}
                                    </MenuItem>
                                )
                            })
                        }
                    </RoomsContainer>
                </LeftColumnBody>
            </LeftColumnBlock>
        </LeftColumn>
    )
}
const MenuItem = styled.div `
    padding: 20px 16px;
    cursor: pointer;
    border-bottom: 1px solid #292929;
    color: #fff;
    transition: .2s linear;
    &:last-child {
        border-bottom: 0px solid #292929;
    }
    &:hover {
        background-color: #1b1b1b;
    }
`
const LeftColumn = styled.div `
    min-width: 22.5rem;
    width: 22.5rem;
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
const RoomsContainer = styled.div `
    display: flex;
    flex-direction: column;

`

export default connect(state => {
    return {
        user: state.currentUser.data,
        rooms: state.rooms.data
    }
  },
  dispatch => ({
    clearCurrentUserAction: () => dispatch(clearCurrentUser()),
    getRoomsActions: () => dispatch(getRooms()),
    clearRoomsActions: () => dispatch(clearRooms())
  })
)(LeftMenuBar);