import React from 'react'
import Grid from '@material-ui/core/Grid'

import MonthlyExpenseChart from './MonthlyExpenseChart'
import MonthlyListCollection from './MonthlyListCollection'
import { IYearMonth } from '../navigation/IYearMonth'


interface IMonthlyStatisticsProps {
    yearMonth: IYearMonth
}

const MonthlyStatistics = (props: IMonthlyStatisticsProps) => {

    const { yearMonth } = props;

    return (<Grid container>
            <Grid  container spacing={4} item>
                <Grid  item><MonthlyExpenseChart yearMonth={yearMonth}></MonthlyExpenseChart></Grid>
                <Grid item><MonthlyListCollection yearMonth={yearMonth}></MonthlyListCollection></Grid>
            </Grid>
    </Grid>)
}

export default MonthlyStatistics
