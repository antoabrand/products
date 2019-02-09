import { ActionReducer } from '@ngrx/store';

export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action: any) => {
        if (action.type === 'SET_STATE') {
            return { ...state, ...action.payload };
        }

        return reducer(state, action);
    };
}
