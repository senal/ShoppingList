import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Cell, Tooltip } from 'recharts';

import { IYearMonth } from '../navigation/IYearMonth';



interface IMonthlyExpenseChartProps {
    yearMonth: IYearMonth
} 


interface IData {
    name: string,
    date: number,
    total: number,
    isCompleted: boolean,
}

const MonthlyExpenseChart = (props: IMonthlyExpenseChartProps) => {

    const {yearMonth} = props;

    const data  = [
        {
            date: 31,
            total: 240.89,
            name: "sep-2",
            isCompleted: false,
        },
        {
            date: 20,
            total: 58.90,
            name: "sep-3",
            isCompleted: true,
        },
        {
            date: 10,
            total: 120.00,
            name: "sep-4",
            isCompleted: false,
        },
        {
            date: 2,
            total: 75.00,
            name: "sep-5",
            isCompleted: false,

        },
    ] as IData []


    return (<div>
        <div>Expense chart for the month : {yearMonth.year} - {yearMonth.month.text}</div>
        <div>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="total" />
            <Bar dataKey="total" fill="#8884d8" > 
                {
                    data.map((e, i) => (
                        <>    
                        <Cell key={`cell-${e.date}`}  fill={e.isCompleted ? '#1f77b4' : '#ff7f0e'}  >
                        </Cell>
                        </>
                    ))
                }
            </Bar>
        </BarChart>
        </div>
    </div>);
}

export default MonthlyExpenseChart;
