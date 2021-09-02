import React from 'react'


interface IListItem {
    name: string,
    date: Date,
    shop: string
    isCompleted: boolean
}


interface IListOfMonthProps {
    montth: number
}

/* Display all the shoping list for the given month */
const ListsOfMonth = () => {

    const lists = [{
        name: "#List1",
        date: new Date(2021, 9, 1),
        shop: "Coles",
        isCompleted: true
    }, 
    {
        name: "#List2",
        date: new Date(2021, 9, 1),
        shop: "Coles",
        isCompleted: false
    }, 
    {
        name: "#List3",
        date: new Date(2021, 9, 2),
        shop: "WW",
        isCompleted: false
    }, 
    {
        name: "#List1",
        date: new Date(2021, 9, 1),
        shop: "WW",
        isCompleted: true
}] as IListItem[];

    return (
        <div>
            {lists.map((l, i) => {
                return <div>{l.name}</div>
            })}        
        </div>
    )
}

export default ListsOfMonth
