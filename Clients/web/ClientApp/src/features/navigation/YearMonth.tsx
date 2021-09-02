import React, {useEffect, useState } from 'react'

interface IMonth {
    value: number,
    text: string
}

interface IYearMonthItem {
    year: number,
    months: IMonth[]
}

interface IMemoryLane {
    items: IYearMonthItem[]
}


const YearMonth = () => {


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

    console.log('Items', items);

    return (
        <div>
            <div>This is sample</div>
            {    
            items.map(i => <><div><Year year={i.year} /></div> <div> <Month year={i.year} months={i.months} /> </div></>)
            }
        </div>
    )
}

interface IYearProps {
    year: number
}

export const Year = (props: IYearProps) => {
    const {year} = props;
    return (<div>{year}</div>)
}


interface IMonthProps {
    year: number;
    months: IMonth[]
}

export const Month = (props: IMonthProps) => {
    
    const { year, months } = props;

    return (
        <div>
          {months.map(m => <div>{m.text}</div>)}
         </div>
    );
}


export default YearMonth
