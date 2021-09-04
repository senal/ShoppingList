import React from 'react'


interface IListItem {
    name: string,
    dateCreated: Date,
    validUntil: Date,
    isClosed: boolean,
    shop: string,
    isCompleted: boolean,
    items: IItem[]
}

interface IItem {
    productId: number,
    productName: string,
    price: number,
    qty: number
}



interface IListOfMonthProps {
    montth: number
}

/* Display all the shoping list for the given month */
const ListsOfMonth = () => {

    const lists = [{
        name: "#List1",
        dateCreated: new Date(2021, 9, 1),
        shop: "Coles",
        isCompleted: true
    }, 
    {
        name: "#List2",
        dateCreated: new Date(2021, 9, 1),
        shop: "Coles",
        isCompleted: false
    }, 
    {
        name: "#List3",
        dateCreated: new Date(2021, 9, 2),
        shop: "WW",
        isCompleted: false
    }, 
    {
        name: "#List1",
        dateCreated: new Date(2021, 9, 1),
        shop: "WW",
        isCompleted: true
}] as IListItem[];

    return (
        <div>
            {lists.map((l, i) => {
                return <div key={i}>{l.name}</div>
            })}        
        </div>
    )
}

export default ListsOfMonth
