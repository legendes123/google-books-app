import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {addFilter, clearFilter} from "../../../../store/booksSliceApi";
interface CheckboxElem {
    name:string,
    isActive:boolean
}
interface ICheckboxForm{
    title:string,
    formElem:CheckboxElem[],
}
interface ICheckboxAll{
    formElem: CheckboxElem[]
    handleAddFilter (value:string,status:boolean): void
}

const CheckboxForm = ({title,formElem}:ICheckboxForm) => {
    const dispatch = useAppDispatch()

    const [isOpen,setIsOpen] = useState(false)
    const elemFormClose = formElem.slice(0, 3)
    function handleFormOpen(){
        setIsOpen(prev => !prev)
    }
    function handleAddFilter(value: string,status:boolean){
        const namedFilter = title.toLowerCase()
        if(status){
            dispatch(addFilter({namedFilter,value}))
        }else {
            dispatch(clearFilter(value))
        }

    }
    return (
        <Box sx={{width:'20wh'}} mt={3}>
            <Typography sx={{
                color: '#000',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '900',
                lineHeight: '24px',
                letterSpacing:' 0.03px'
            }}>{title}</Typography>

            {
                isOpen ? (
                    <CheckboxAll handleAddFilter={handleAddFilter} formElem={formElem}></CheckboxAll>
                ):(
                    <CheckboxAll handleAddFilter={handleAddFilter} formElem={elemFormClose}></CheckboxAll>
                )
            }

            {formElem.length > 2 &&
                <Button onClick={handleFormOpen}>
                    {
                        isOpen ? (
                            <Typography variant="h6" sx={{ color:'#000000', textDecoration: 'underline' }}>
                                Hide
                            </Typography>
                        ):(
                            <Typography sx={{
                                color: 'var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                letterSpacing: '0.021px',
                                textDecoration: 'underline'
                            }}>VIEW ALL</Typography>
                            // <Typography variant="h6" sx={{ color:'#000000', textDecoration: 'underline' }}>
                            //     VIEW ALL
                            // </Typography>
                        )
                    }

                </Button>
            }

        </Box>
    );
};
const CheckboxAll = (props: ICheckboxAll) => {
    const {handleAddFilter,formElem} = props
    const filters = useAppSelector((state) => state.booksApi.filters)
    const as = Object.values(filters)
    const arrayAllFilters = Object.values(filters).flat(1)

    return (
        <FormGroup>
            {
                formElem.map((elem:CheckboxElem)=>{
                    const isChecked = arrayAllFilters.includes(elem.name)
                    return <FormControlLabel checked={isChecked} onChange={(event)=>{
                        const target = event.target as HTMLInputElement
                        handleAddFilter(elem.name,target.checked)
                    } } control={<Checkbox/>} label={elem.name}/>

                })
            }
        </FormGroup>

    );
};

export default CheckboxForm;
