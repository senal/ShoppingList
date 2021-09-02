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

    const [defaultYear, setDefaultYear] = useState(0);
    const [defaultMonths, setDefaultMonths] = useState([] as IMonth[]);


    useEffect(() => {
        if(items && items.length > 0) {
            setDefaultYear(items[0].year);
            setDefaultMonths(items[0].months);
        }
    }, []);


    // <div> <Month year={i.year} months={i.months} /> </div>
    return (
        <div>
            <div>This is sample</div>
            {    
            items.map(i => <><div><Year year={i.year} > { i.year === defaultYear ? "Active" : ""}</Year> </div> </>)
            
            }
            <div>--------------</div>
            <Month year={defaultYear} months={defaultMonths}></Month>
        </div>
    )
}

interface IBaseProps {
    children?: any
}


interface IYearProps extends IBaseProps {
    year: number
}

export const Year = (props: IYearProps) => {
    const {year, children} = props;
    return (<div>{year} {children}</div>)
}


interface IMonthProps extends IBaseProps {
    year: number;
    months: IMonth[]
}

export const Month = (props: IMonthProps) => {
    
    const { year, months } = props;

    const [defautMonth, setDefaultMonth] = useState(0);

    useEffect(() => {
        setDefaultMonth(months[0].value)
    }, []);

    return (
        <div>
          {months.map(m => <div>{m.text} {defautMonth === m.value ? "Acive" : "" }</div>)}
         </div>
    );
}


export default YearMonth
