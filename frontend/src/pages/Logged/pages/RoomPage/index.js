import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { isEmpty } from "lodash";
import { NaivgatoinHeader } from '@components'
import { io } from 'socket.io-client';


const RoomPage = ({match, location, user}) => {
    const [conversation, setConvesation] = useState([...Array(55)]);
    const {id, username} = user.user;
    const scrollRef = useRef(null);
    const socket = useRef(io("ws://localhost:3001"));

    const scrollToBottom = () => {
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        const data = { userName: username, roomId: match?.params?.room };
        socket.current.emit("join-room", data);
        //scrollToBottom();
        return () => {
            socket.current.emit("leave-room", data);
        } 
        
    }, [match?.params?.room]);


    useEffect(() => {
        socket.current.on('join-user-room', (userName) => {
            const newArray = [...conversation, {id_name: 'joinRoom', message: `${userName} joined room`}];
            setConvesation(newArray);
            console.log(`${userName} join room`);
        });

        socket.current.on('leave-user-room', (data) => {
            console.log(`${data} leave room`);
        });
    }, []);


  
    




    return (
        <Container>
            <NaivgatoinHeader lable={`#${location.state.room}`}/>
            <HomeBody>
                <ContainerBody>
                    <Scroll className="custom-scroll" ref={scrollRef}>
                    {
                        conversation.map((x,i) => {
                            return (<div key={i}>{i}</div>)
                        })
                    }
                    </Scroll>
                </ContainerBody>
                <TypeArea>
                    
                </TypeArea>
            </HomeBody>
        </Container>
    )
}
const Container = styled.div `
    
`
const Scroll = styled.div `
    height: 100%;
    overflow-y: overlay;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0) rgba(0,0,0,0);
    transition: scrollbar-color .3s ease;
    -webkit-overflow-scrolling: touch;
    pointer-events: auto;
`
const HomeBody = styled.div `
    padding: 0px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4em);
`
const ContainerBody = styled.div `
    background-color: transparent;
    border-radius: 5px;
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    overflow: auto;
    flex: 1;
`


const TypeArea = styled.div `
    background-color: #212121;
    border-radius: 5px;
    padding: 16px;
    margin-top: 0px;
    height: 65px;
`


export default connect(state => {
    return {
        user: state.currentUser.data
    }
  }
)(RoomPage);