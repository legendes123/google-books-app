import React, {ReactNode} from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Stack, SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from "@mui/material/OverridableComponent";
interface ICheckbox{
    label:string,
    icon: ReactNode,
    checkedIcon: ReactNode
}
function Checkbox({ label, icon, checkedIcon }:ICheckbox) {
    return (
        <FormControlLabel
            label={label}
            control={
                <MuiCheckbox defaultChecked icon={icon} checkedIcon={checkedIcon} />
            }
        />
    );
}
interface ICheckboxes{
    label:string
}
const Checkboxes = ({ label }:ICheckboxes) => {
    return (
        <Stack>
            <Checkbox
                label={label}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
            />
        </Stack>
    );
};

export default Checkboxes;
