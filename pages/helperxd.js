import { Router } from 'next/router';
import React from 'react';
export const PublicRoute=({component,...options})=>{
    const isAuth =false;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to ="/"/>

}