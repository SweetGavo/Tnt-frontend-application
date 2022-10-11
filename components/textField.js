import React from 'react';

function TextField({label='',...others}) {
    return (
        <div className={'form-field'}>
            <label>{label}</label>
            <input {...others} className={'text-input'} />
        </div>
    );
}

export default TextField;