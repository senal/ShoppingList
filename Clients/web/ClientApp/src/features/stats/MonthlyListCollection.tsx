import React from 'react'

interface IMonthlyListCollectionProps {
    month: number
}


const MonthlyListCollection = (props: IMonthlyListCollectionProps) => {
    return (<div>Lists for the month : {props.month}</div>);
}

export default MonthlyListCollection;
