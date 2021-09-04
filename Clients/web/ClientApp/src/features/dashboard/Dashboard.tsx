import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import ListsOfMonth from './ListsOfMonth';
import MonthlyStatistics from '../stats/MonthlyStatistics';
import IYearMonthItem from '../navigation/IYearMonthItem';
import YearMonth from '../navigation/YearMonth';

const Dashboard = () => {
   
    const [selectedMonth, setSelectedMonth] = useState(0);
   
 // TDOO: should fetch from backend when ready
 const items = [{
    year: 2021,
    months: [ {
        value: 9,
        text: "Sep"
    },
    {
        value: 8,
        text: "Aug"
    },
    {
        value: 7,
        text: "July"
    },
    {
        value: 6,
        text: "Jun"
    },
    {
        value: 5,
        text: "May"
    },
    {
        value: 4,
        text: "Apr"
    },
    {
        value: 3,
        text: "Mar"
    },
    {
        value: 2,
        text: "Feb"
    },
    {
        value: 1,
        text: "Jan"
    }
]
},
{
    year: 2020,
    months: [ {
        value: 12,
        text: "Dec"
    },
    {
        value: 11,
        text: "Nov"
    }
]
}
] as IYearMonthItem [];

   
    return (
    <Container>
        <Grid container>
            <Grid item><YearMonth items={items} /></Grid>
            <Grid item><MonthlyStatistics month={selectedMonth} />        </Grid>
        </Grid>
        <ListsOfMonth />
    </Container>);
}

export default Dashboard;