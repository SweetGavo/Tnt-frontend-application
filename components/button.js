import React, {memo} from 'react';
import { useRouter} from "next/router";
import Link from "next/link";

function Button({variant='fill', style='black' ,size='md', radius=0, to='' , children, className,...others}) {
    const router = useRouter();
    const navigate = ()=>{
        if (to){
            router.push(to);
        }
    }

    return (
        <a className={`btn btn-${variant} btn-${style}  btn-${size} ${className}`} style={{
            borderRadius:radius
        }}  {...others} >
            {
                children
            }
        </a>
    );
}

export default memo(Button);