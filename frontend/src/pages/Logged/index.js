import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LeftMenuBar } from '@components'
import styled from 'styled-components';
import {
    HomePage,
    RoomPage
} from './pages'

const Guest = () => {
    return (
        <Router>
            <GuestContainer>
                <LeftMenuBar/>
                <Container>
                    <Switch>
                        <Route exact={true} path='/' component={HomePage}/>
                        <Route exact={true} path='/room/:room' component={RoomPage}/>
                    </Switch>
                </Container>
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
const Container = styled.div `
    flex: 1;
`
export default Guest;