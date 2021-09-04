import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import MonthlyExpenseChart from './MonthlyExpenseChart'
import MonthlyListCollection from './MonthlyListCollection'
import { IYearMonth } from '../navigation/IYearMonth'


interface IMonthlyStatisticsProps {
    yearMonth: IYearMonth
}

const MonthlyStatistics = (props: IMonthlyStatisticsProps) => {

    const { yearMonth } = props;

    return (<Grid container>
            <Grid  container item>
                <Grid item><Box p={2}><MonthlyExpenseChart yearMonth={yearMonth}></MonthlyExpenseChart></Box></Grid>
                <Grid item><MonthlyListCollection yearMonth={yearMonth}></MonthlyListCollection></Grid>
            </Grid>
    </Grid>)
}

export default MonthlyStatistics
