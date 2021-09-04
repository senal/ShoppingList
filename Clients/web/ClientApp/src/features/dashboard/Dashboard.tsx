import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import ListsOfMonth from './ListsOfMonth';
import MonthlyStatistics from '../stats/MonthlyStatistics';
import IYearMonthsItem from '../navigation/IYearMonthsItem';
import YearMonth from '../navigation/YearMonth';
import { IYearMonth } from '../navigation/IYearMonth';

const Dashboard = () => {
   

    
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
    ] as IYearMonthsItem [];

   


    const [selectedYearMonth, setSelectedYearMonth] = useState({year: 0, month: {value: 0, text: ""}} as IYearMonth);


    useEffect(() => {
        if(items && items.length > 0) {
            setSelectedYearMonth({year: items[0].year, month: items[0].months[0]});
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    const onMonthSelect = (selcted: IYearMonth) => {
        setSelectedYearMonth(selcted);
    }

    return (
    <Container>
        <Grid container>
            <Grid item><YearMonth items={items} onSelect={onMonthSelect} /></Grid>
            <Grid item><MonthlyStatistics yearMonth={selectedYearMonth} /></Grid>
        </Grid>
        <ListsOfMonth />
    </Container>);
}

export default Dashboard;