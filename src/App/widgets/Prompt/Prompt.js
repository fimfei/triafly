/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Alert} from "../Alert";

import './scss/prompt.scss';

const Prompt = ({children, ...props}) => {

    return (
        <Alert {...props} >
            {children}
        </Alert>
    )
};

export default Prompt;