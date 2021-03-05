import React from 'react';
import ErrorComponent from '../util/ErrorComponent';

const PageNotFound = () => {
    return (
        <div>
            <ErrorComponent data={{message : "PAGE NOT FOUND"}} />
        </div>
    );
};

export default PageNotFound;