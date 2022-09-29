import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
const NaivgatoinHeader = ({lable}) => {
    return (
        <Header>
            <LableText>{lable ? lable : 'Realtime'}</LableText>

        </Header>
    )
}

const Header = styled.div `
    background-color: transparent;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
`

const LableText = styled.div `
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica","Arial",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: bold;
    font-size: 2rem;
    color: #f1f1f1;
`

export default connect(state => {
    return {
        user: state.currentUser.data
    }
  }
)(NaivgatoinHeader);