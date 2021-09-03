import React from 'react'
import Grid from '@material-ui/core/Grid'
import MonthlyExpenseChart from './MonthlyExpenseChart'
import MonthlyListCollection from './MonthlyListCollection'


interface IMonthlyStatisticsProps {
    month: number
}

const MonthlyStatistics = (props: IMonthlyStatisticsProps) => {

    const { month } = props;

    return (<Grid container>
        <Grid item><MonthlyExpenseChart month={month}></MonthlyExpenseChart></Grid>
        <Grid item><MonthlyListCollection month={month}></MonthlyListCollection></Grid>
    </Grid>)
}

export default MonthlyStatistics
