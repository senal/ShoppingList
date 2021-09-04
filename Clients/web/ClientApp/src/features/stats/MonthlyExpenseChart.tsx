import React from 'react'

import { IYearMonth } from '../navigation/IYearMonth';


interface IMonthlyExpenseChartProps {
    yearMonth: IYearMonth
} 

const MonthlyExpenseChart = (props: IMonthlyExpenseChartProps) => {

    const {yearMonth} = props;

    return (<div>Expense chart for the month : {yearMonth.year} - {yearMonth.month.text}</div>);
}

export default MonthlyExpenseChart;
