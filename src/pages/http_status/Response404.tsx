import {useLocation} from "react-router-dom";
import React from "react";

const Response404: React.FC = ()=> {
    let location = useLocation();

    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh', textAlign:'center'}}>
            <div>
                <h1>404</h1>
                <h2>Page not found</h2>
                <p style={{marginTop: '1em'}}>No match for <code>{location.pathname}</code></p>
            </div>
        </div>
    );
}

export default Response404