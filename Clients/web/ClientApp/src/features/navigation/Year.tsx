import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';

import { IBaseProps } from '../common/IBaseProps'

interface IYearProps extends IBaseProps {
    year: number,
    selected: number
    onSelect: (year: number) => void
}

const Year = (props: IYearProps) => {
    const {year, selected, children} = props;

    const button = year === selected ? <Button variant="contained" color="primary" onClick={() => props.onSelect(year)}>{year}</Button> 
                : <Button variant="contained" onClick={() => props.onSelect(year)}>{year}</Button>;

    return (<Box p={1}>{button}</Box>);
}

export default Year
