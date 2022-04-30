import React from 'react';

import loading from '../../images/Quarter-Circle-Loading-Image-1.gif';
const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <img className='' src={loading} alt="" />
        </div>
    );
};

export default Loading;