import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LeftMenuBar } from '@components'
import styled from 'styled-components';
import {
    HomePage
} from './pages'

const Guest = () => {
    return (
        <Router>
            <GuestContainer>
                <LeftMenuBar/>
                <Switch>
                    <Route exact={true} path='/' component={HomePage}/>
                </Switch>
            </GuestContainer>
        </Router>
    )
}
const GuestContainer = styled.div `
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 100%;
    position: relative;
    z-index: 22;
    display: flex;
`
export default Guest;