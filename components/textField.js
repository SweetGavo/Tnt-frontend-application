import React, {useMemo} from 'react';

function    TextField({label='',variant='' ,style={},className,radius=10,prependIcon=false,appendIcon=false,...others}) {
    const styles = {
        borderRadius: `${radius}px`,
        ...style
    }

    const prependClass = useMemo(()=>{
        return `${(appendIcon)?'appendIcon':''} ${(prependIcon)?'prependIcon':''}`;

    },[prependIcon,appendIcon])
    const labelValue = useMemo(()=>{
        return (label)?<label>{label}</label>:'';
    },[label])
    return (
        <div className={'form-field '+className}>
            {
                labelValue
            }

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