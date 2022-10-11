import React, {memo} from 'react';
import { useRouter} from "next/router";

function Button({variant='fill', style='black' ,size='md', radius=0, to='' , children}) {
    const router = useRouter();
    const navigate = ()=>{
        if (to){
            router.push(to);
        }
    }

    return (
        <a className={`btn btn-${variant} btn-${style}  btn-${size}`} style={{
            borderRadius:radius
        }}  onClick={navigate} >
            {
                children
            }
        </a>
    );
}

export default memo(Button);