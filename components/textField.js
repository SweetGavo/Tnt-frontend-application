import React from 'react';

function TextField({label='',variant='outline' ,style={},className,radius=0,...others}) {
    const styles = {
        borderRadius: `${radius}px`,
        ...style
    }
    return (
        <div className={'form-field '+className}>
            <label>{label}</label>
            <input {...others} className={`text-input ${variant}`} style={styles} />
        </div>
    );
}

export default TextField;