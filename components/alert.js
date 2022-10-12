import React from 'react';
import Button from "./button";

function Alert({type='error',message='',closeAlert=false}) {

    return (
        <>
            {
                (message) &&
                <div className={`alert-${type} alert`} >
                        <Button variant={'outline'}  className={'close-alert'}>

                        </Button>
                    <p className={'alert-message'}>
                        {
                            message
                        }
                    </p>
                </div>
            }
        </>
    );
}

export default Alert;