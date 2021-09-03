import React from 'react'


interface IMonthlyExpenseChartProps {
    month: number
} 


const MonthlyExpenseChart = (props: IMonthlyExpenseChartProps) => {
    return (<div>Expense chart for the month : {props.month}</div>);
}

export default MonthlyExpenseChart;
