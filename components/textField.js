import React, {useMemo} from 'react';

function TextField({label='',variant='outline' ,style={},className,radius=10,prependIcon=false,appendIcon=false,...others}) {
    const styles = {
        borderRadius: `${radius}px`,
        ...style
    }

    const prependClass = useMemo(()=>{
        return `${(appendIcon)?'appendIcon':''} ${(prependIcon)?'prependIcon':''}`;

    },[prependIcon,appendIcon])
    return (
        <div className={'form-field '+className}>
            <label>{label}</label>
            <div className={'input-cover '+prependClass}>
                <input {...others} className={`text-input ${variant}`} style={styles} />
                {
                    (prependIcon) &&
                    <div className={'prepend-icon'}>{prependIcon()}</div>
                }
                {
                    (appendIcon) &&
                    <div className={'append-icon'}>{appendIcon()}</div>
                }
            </div>
        </div>
    );
}

export default TextField;