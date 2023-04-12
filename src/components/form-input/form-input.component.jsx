import React from 'react';

import {  
    GroupContainer,
    FormInputContainer,
    FromInputLabel
} from './form-input.styles'

const FormInput = ({handleChange, label, ...props}) => (
    <GroupContainer className='group'>
        <FormInputContainer onChange={handleChange} {...props}/>
        {
            label 
            ? (
            <FromInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FromInputLabel>
            )
            : null
        }
    </GroupContainer>
)

export default FormInput;
