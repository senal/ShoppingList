import React from 'react'

import { IYearMonth } from '../navigation/IYearMonth';

interface IMonthlyListCollectionProps {
    yearMonth: IYearMonth
}


const MonthlyListCollection = (props: IMonthlyListCollectionProps) => {
    const {yearMonth} = props;
    return (<div>Lists for the month : {yearMonth.year} - {yearMonth.month.text}</div>);
}

export default MonthlyListCollection;
