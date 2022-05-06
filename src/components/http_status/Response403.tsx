import {useLocation} from "react-router-dom";
import React from "react";

export default function Response403({description}: any) {
    let location = useLocation();

    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh', textAlign:'center'}}>
            <div>
                <h1>403</h1>
                <h2>Forbidden</h2>
                <p style={{marginTop: '1em'}}>You don't have permission to access <code>{location.pathname}</code></p>
                {description}
            </div>
        </div>
    );
}