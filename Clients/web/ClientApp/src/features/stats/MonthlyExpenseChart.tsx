import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

import { IYearMonth } from '../navigation/IYearMonth';



interface IMonthlyExpenseChartProps {
    yearMonth: IYearMonth
} 


interface IData {
    name: string,
    date: number,
    total: number
}

const MonthlyExpenseChart = (props: IMonthlyExpenseChartProps) => {

    const {yearMonth} = props;

    const data  = [
        {
            date: 31,
            total: 240.89,
            name: "sep-2"
        },
        {
            date: 20,
            total: 58.90,
            name: "sep-3"
        },
        {
            date: 10,
            total: 120.00,
            name: "sep-4"
        },
        {
            date: 2,
            total: 75.00,
            name: "sep-5"
        },
    ] as IData []


    return (<div>
        <div>Expense chart for the month : {yearMonth.year} - {yearMonth.month.text}</div>
        <div>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="total" />
            <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
        </div>
    </div>);
}

export default MonthlyExpenseChart;
