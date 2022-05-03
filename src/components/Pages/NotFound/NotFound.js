import React from 'react';
import './NotFound.css';

import Image from '../../../images/CodePen-404-Page.gif';

const NotFound = () => {
    return (
        <div>
            <img src={Image} alt="404" className="w-full h-full object-cover" />
        </div>
    );
};

export default NotFound;