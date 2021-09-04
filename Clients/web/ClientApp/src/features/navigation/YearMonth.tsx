import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import '@fontsource/roboto';

import IMonth  from './IMonth';
import IYearMonthsItem from './IYearMonthsItem';
import Year from './Year';
import Month from './Month';
import { IYearMonth } from './IYearMonth';


interface IYearMonthProps {
    items: IYearMonthsItem[],
    onSelect: (select: IYearMonth) => void
}

const YearMonth = (props: IYearMonthProps) => {

    const { items, onSelect } = props;
   
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState({} as IMonth);
    const [selectedMonths, setSelectedMonths] = useState([] as IMonth[] | undefined);

    useEffect(() => {
        if(items && items.length > 0) {
            setSelectedYear(items[0].year);
            setSelectedMonths(items[0].months);
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        const months = items.find(i => i.year === selectedYear)?.months;
        setSelectedMonths(months);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedYear]);

    const onYearSelect = (year: number) => {
        setSelectedYear(year);
        onSelect({year: year, month:selectedMonth});
    }

    const onMonthSelect = (selectedMonth: IMonth) => {
        setSelectedMonth(selectedMonth);
        onSelect({year: selectedYear, month: selectedMonth});
    }


    return (
        <Grid container>
            <Grid justifyContent="flex-start" container spacing={3} item>
                <Grid   item>
            {    
            items.map(i => <Grid key={i.year} item ><Year key={i.year} selected={selectedYear} year={i.year} onSelect={onYearSelect} > { i.year === selectedYear ? "Active" : ""}</Year> </Grid>)
            
            }
                </Grid>
                <Grid   item>
                        <Month year={selectedYear} months={selectedMonths} onMonthSelect={onMonthSelect}></Month>
                </Grid>
                <Grid item></Grid>
            </Grid>
            
        </Grid>
    )
}

export default YearMonth
