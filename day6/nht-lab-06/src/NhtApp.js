import React from 'react';
import NhtEventForm1 from './components/NhtEventForm1';
import NhtEventForm2 from './components/NhtEventForm2';
import NhtEventForm3 from './components/NhtEventForm3';
import NhtEventForm4 from './components/NhtEventForm4';
import NhtEventForm5 from './components/NhtEventForm5';

const NhtApp = () => {
    const nhtHandleSubmitForm = (param) => {
        console.log("Dữ liệu form:", param);
    };

    return (
        <div className='container border my-3 bg-white'>
            <h1 className='text-center'>Event Form - Demo</h1>
            <hr />
            <NhtEventForm1 onNhtHandleSubmit={nhtHandleSubmitForm} />
            <NhtEventForm2 onNhtHandleSubmit={nhtHandleSubmitForm} />
            <NhtEventForm3 onNhtHandleSubmit={nhtHandleSubmitForm} />
            <NhtEventForm4 onNhtHandleSubmit={nhtHandleSubmitForm} />
            <NhtEventForm5 onNhtHandleSubmit={nhtHandleSubmitForm} />
        </div>
    );
};

export default NhtApp;
