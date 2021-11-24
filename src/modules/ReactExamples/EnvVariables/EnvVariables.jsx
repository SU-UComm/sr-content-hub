import React from 'react';

export const EnvVariables = () => {
    return (
        <div className="section">
            <h2 className="section__heading">ENV variables</h2>
            <p>
                ENV = <strong>{process.env.ENV}</strong>
            </p>
            <p>
                SITE_URL = <strong>{process.env.SITE_URL}</strong>
            </p>
        </div>
    );
};
