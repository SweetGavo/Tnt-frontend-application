import React from 'react';

function TextField({label='',...others}) {
    return (
        <div>
            <label>{label}</label>
            <input {...others} />
        </div>
    );
}

export default TextField;