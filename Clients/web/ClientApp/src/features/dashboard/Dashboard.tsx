import React from 'react'
import SideNavigation from '../navigation/SideNavigation';
import ListsOfMonth from './ListsOfMonth';
import Container from '@material-ui/core/Container';

const Dashboard = () => {
    return (
    <Container>
        <SideNavigation />
        <ListsOfMonth />
    </Container>);
}

export default Dashboard;