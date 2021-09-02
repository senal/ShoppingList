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
] as IYearMonthItem [];

    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonths, setSelectedMonths] = useState([] as IMonth[] | undefined);


    useEffect(() => {
        if(items && items.length > 0) {
            setSelectedYear(items[0].year);
            setSelectedMonths(items[0].months);
        }
    }, []);


    useEffect(() => {
        const months = items.find(i => i.year === selectedYear)?.months;
        setSelectedMonths(months);
    }, [selectedYear]);

    const onYearSelect = (year: number) => {
        setSelectedYear(year);
    }

    return (
        <div>
            <div>Your shopping History</div>
            {    
            items.map(i => <><div><Year year={i.year} onSelect={onYearSelect} > { i.year === selectedYear ? "Active" : ""}</Year> </div> </>)
            
            }
            <div>--------------</div>
            <Month year={selectedYear} months={selectedMonths}></Month>
        </div>
    )
}

interface IBaseProps {
    children?: any
}


interface IYearProps extends IBaseProps {
    year: number,
    onSelect: (year: number) => void
}

export const Year = (props: IYearProps) => {
    const {year, children} = props;
    return (<div onClick={() => props.onSelect(year)} >{year} {children}</div>)
}


interface IMonthProps extends IBaseProps {
    year: number;
    months: IMonth[] | undefined
}

export const Month = (props: IMonthProps) => {
    
    const { year, months } = props;

    const [selectedMonth, setSelectedMonth] = useState(0);

    useEffect(() => {
        if(months && months.length > 0) {
            setSelectedMonth(months[0].value)     
        }
        
    }, [months]);

    return (
        <div>
          {months?.map(m => <div>{m.text} {selectedMonth === m.value ? "Acive" : "" }</div>)}
         </div>
    );
}


export default YearMonth
