/* eslint-disable prettier/prettier */
import React from 'react';
import InActive from './inactivateAdmin';
import Disabled from './deleteAdminDisabled';

// const loginUser = "API CALL TO GET USER DATA"
const loginUser = 'Admin2';
// This could be changed to be the users Key/unique ID and most likely should be chagned to that but at the moment that key doesn't exist in the database.

export default function isActive(props){
    if(loginUser === props.name){
        return(
            <Disabled />
        );
    }
    return(
        <InActive />
    );
    
}