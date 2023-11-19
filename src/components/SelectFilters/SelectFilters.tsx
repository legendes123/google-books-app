import React, {FC} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
type PropsSelectFilters = {
    nameFilters: string[],
    dispatchFilters:(sortingByValue:string) => void,
    selectValue:string
}
const SelectFilters:FC<PropsSelectFilters> = ({nameFilters,dispatchFilters,selectValue}) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Сategories"
                value={selectValue}
                onChange={(event)=>{dispatchFilters(event.target.value)}}
            >

                {nameFilters.map((elem)=>{
                   return <MenuItem value={elem}>{elem}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default SelectFilters;
