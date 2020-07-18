import React from 'react';
import { AuthorizationActionTypes, AuthorizationState, AUTHORIZATION } from './types';

const initialState  : AuthorizationState = {
    authorized : false
};

export function authorizationReducer (state = initialState,action : AuthorizationActionTypes ) 
: AuthorizationState{
     
        switch(action.type){
            case AUTHORIZATION : {

                state.authorized = action.payload.authorization;

                return {
                    ...state
                };
            } default : 
            return state
        }
}


   
