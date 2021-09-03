import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import SideNavigation from '../navigation/SideNavigation';
import ListsOfMonth from './ListsOfMonth';
import MonthlyStatistics from '../stats/MonthlyStatistics';

const Dashboard = () => {
   
    const [selectedMonth, setSelectedMonth] = useState(0);
   
   
    return (
    <Container>
        <Grid container>
            <Grid item><SideNavigation /></Grid>
            <Grid item><MonthlyStatistics month={selectedMonth} />        </Grid>
        </Grid>
        <ListsOfMonth />
    </Container>);
}

export default Dashboard;