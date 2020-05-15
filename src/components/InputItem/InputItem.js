import React from 'react';
import TexField from '@material-ui/core/TextField';

const InputItem = ({className}) => (<p className={className}>
    <TexField
       id="standard-dense"
       label="Добавить задание"
       margin="0"
       fullWidth
    />
</p>);

export default InputItem;
