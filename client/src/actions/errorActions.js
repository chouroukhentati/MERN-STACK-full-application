import {GET_ERRORS,CLEAR_ERRORS} from './types'

//return errors 
export const returnErrors=(msg,status,id=null)=>{
    return {
        type:GET_ERRORS,
        payload:{msg,status,id}
    }
}

//CLEAR ERROrs

export const clearErrors=()=>{
    return{
        type:CLEAR_ERRORS
    };
};