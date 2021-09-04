import React, {useState, useEffect} from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import { IYearMonth } from '../navigation/IYearMonth';
import { IListItemMeta } from './IListItemMeta';
import { Grid } from '@material-ui/core';

interface IMonthlyListCollectionProps {
    yearMonth: IYearMonth
}


// TODO: temp data structure until the backend is ready
interface IFilterListItem {
    year: number,
    month: number 
    items: IListItemMeta[]
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
    },
  }),
);





const MonthlyListCollection = (props: IMonthlyListCollectionProps) => {
    const {yearMonth} = props;
    const classes = useStyles();

    // temp list meta should be able to filter by the year and the month being passed

    const listItems = [{
        year: 2021,
        month: 9,
        items: [
            {
                id: 1,
                caption: "sep-1",
                activeUntil: new Date(2021, 10, 31),
                isCompleted: false
            },
            {
                id: 2,
                activeUntil: new Date(2021, 9, 31),
                isCompleted: false,
                caption: "sep-2"
            },
            {
                id: 3,
                activeUntil: new Date(2021, 9, 20),
                isCompleted: true,
                caption: "sep-3"
            },
            {
                id: 4,
                activeUntil: new Date(2021, 9, 10),
                isCompleted: false,
                caption: "sep-4"
            },
            {
                activeUntil: new Date(2021, 9, 2),
                isCompleted: false,
                id: 5,
                caption: "sep-5"
            },
        ]
    },
    {
        year: 2021,
        month: 8,
        items: [
            {
                activeUntil: new Date(2021, 8, 31),
                isCompleted: true,
                id: 6,
                caption: "aug-1"
            },
            {
                activeUntil: new Date(2021, 8, 20),
                isCompleted: true,
                id: 7,
                caption: "aug-2"
            },
            {
                activeUntil: new Date(2021, 8, 14),
                isCompleted: true,
                id: 8,
                caption: "aug-3"
            },
            {
                activeUntil: new Date(2021, 8, 8),
                isCompleted: true,
                id: 9,
                caption: "aug-4"
            },
            {
                activeUntil: new Date(2021, 8, 1),
                isCompleted: true,
                id: 10,
                caption: "aug-5"
            },
        ]
    },

    ]


    const [list, setList] = useState([] as IListItemMeta[]);

    useEffect(() =>{
        console.log('Init with list items');
        const { year, month} = yearMonth;
        const lists = [] as IListItemMeta[];
        const items = listItems.filter( i => i.year === year && i.month === month.value).map(i => {
            i.items.map(l => lists.push(l));
        });
        setList(lists);
    }, [yearMonth]);


    const createListItem = (item: IListItemMeta) => {

        const {isCompleted, activeUntil, caption} = item;
        
        const secondary =  isCompleted ? `Completed on ${activeUntil.getDate()} - ${activeUntil.getMonth()} - ${activeUntil.getFullYear()}` 
                                            : `Active until ${activeUntil.getDate()} - ${activeUntil.getMonth()} - ${activeUntil.getFullYear()}`
        const listItem = isCompleted ? <ListItem><ListItemAvatar><AssignmentTurnedInIcon color={'disabled'} /></ListItemAvatar><ListItemText primary={caption} secondary={secondary} /></ListItem> 
                                     : <ListItem><ListItemAvatar><EditIcon color={'primary'} /></ListItemAvatar><ListItemText primary={caption} secondary={secondary} /></ListItem>;
        return listItem;
    }

    return (
        <Grid container>
        <List>
            {
                list.map(i => createListItem(i))
            }
        </List>
        </Grid>
    );
}

export default MonthlyListCollection;
