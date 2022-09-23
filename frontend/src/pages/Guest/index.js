import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
    HomePage
} from './pages'

const Guest = () => {
    return (
        <Router>
            <GuestContainer>
                <Switch>
                    <Route exact={true} path='/' component={HomePage}/>
                </Switch>
            </GuestContainer>
        </Router>
    )
}
const GuestContainer = styled.div `
    position: relative;
    z-index: 22;
`
export default Guest;