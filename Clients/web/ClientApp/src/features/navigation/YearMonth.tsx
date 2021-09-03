import React, {Fragment, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto'

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
        <Grid container>
            <Grid container item><Box pb={1} pl={2}><h1> Your shopping History</h1></Box></Grid>
            <Grid  container spacing={2} item>
                <Grid justifyContent="flex-start"  item>
            {    
            items.map(i => <Grid item ><Year selected={selectedYear} year={i.year} onSelect={onYearSelect} > { i.year === selectedYear ? "Active" : ""}</Year> </Grid>)
            
            }
                </Grid>
                <Grid justifyContent="flex-start"  item>
                    <Month year={selectedYear} months={selectedMonths}></Month>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

interface IBaseProps {
    children?: any
}


interface IYearProps extends IBaseProps {
    year: number,
    selected: number
    onSelect: (year: number) => void
}

export const Year = (props: IYearProps) => {
    const {year, selected, children} = props;

    const button = year === selected ? <Button variant="contained" color="primary" onClick={() => props.onSelect(year)}>{year}</Button> 
                : <Button variant="contained" onClick={() => props.onSelect(year)}>{year}</Button>;

    return (<Box p={1}>{button}</Box>);
}


interface IMonthProps extends IBaseProps {
    year: number;
    months: IMonth[] | undefined
}

export const Month = (props: IMonthProps) => {
    
    const { year, months } = props;

    const [selectedMonth, setSelectedMonth] = useState({value: 0, text: ""} as IMonth);

    useEffect(() => {
        if(months && months.length > 0) {
            setSelectedMonth(months[0])     
        }
        
    }, [months]);
    
    
    const onSelect = (month: IMonth) => {
        console.log('selected', month);
        setSelectedMonth(month);
    }

    const content = (currentMonth: IMonth, selectedMonth: IMonth) => {
        const printMonth = currentMonth.value === selectedMonth.value ? <Button variant="outlined" color="secondary" onClick={() => onSelect(currentMonth)}>{currentMonth.text}</Button> :  <Button variant="outlined" color="primary" onClick={() => onSelect(currentMonth)}>{currentMonth.text}</Button>
        return printMonth;
    }


    return (
        <Fragment>
                      {months?.map(m => <Box p={1}> {content(m, selectedMonth)}</Box>)}
        </Fragment>

    );
}


export default YearMonth
