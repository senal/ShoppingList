import React, {Fragment, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { IBaseProps } from "../common/IBaseProps";
import IMonth from "./IMonth";

interface IMonthProps extends IBaseProps {
    year: number;
    months: IMonth[] | undefined
    onMonthSelect: (selectedMonth: IMonth) => void
}

const Month = (props: IMonthProps) => {
    
    const { year, months, onMonthSelect } = props;

    const [selectedMonth, setSelectedMonth] = useState({value: 0, text: ""} as IMonth);

    useEffect(() => {
        if(months && months.length > 0) {
            setSelectedMonth(months[0])     
            onMonthSelect(months[0]);
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [months]);
    
    
    const onSelect = (month: IMonth) => {
        setSelectedMonth(month);
        onMonthSelect(month);
    }

    const content = (currentMonth: IMonth, selectedMonth: IMonth) => {
        const printMonth = currentMonth.value === selectedMonth.value ? <Button variant="outlined" color="secondary" onClick={() => onSelect(currentMonth)}>{currentMonth.text}</Button> :  <Button variant="outlined" color="primary" onClick={() => onSelect(currentMonth)}>{currentMonth.text}</Button>
        return printMonth;
    }


    return (
        <Fragment>
                      {months?.map(m => <Box key={m.value} p={1}> {content(m, selectedMonth)}</Box>)}
        </Fragment>

    );
}

export default Month;