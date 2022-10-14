import React, {forwardRef, Fragment} from 'react';
import Button from "./button";

function Alert({type='error',message='',closeAlert=false},ref) {

    const closeAlertComponent = ()=>{
        if(closeAlert){
            return  (<Button variant={'outline'}  className={'close-alert'} onClick={closeAlert}><span>
                x
            </span></Button>);
        }
    }
    return (
        <Fragment ref={ref}>
            {
                (message) &&
                <div className={`alert-${type} alert`} >
                    {
                        closeAlertComponent()
                    }
                    <p className={'alert-message'}>
                        {
                            message
                        }
                    </p>
                </div>
            }
        </Fragment>
    );
}

export default forwardRef(Alert);