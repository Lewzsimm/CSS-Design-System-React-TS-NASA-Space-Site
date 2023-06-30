
export enum DEST_ACTION {
    ONMOON,
    ONMARS,
    ONEUROPA,
    ONTITAN,
}

type DestReducerAction = {
    type: DEST_ACTION,
    payload?: number 
}


export const initState = {id: 0, smInput: "moon", moonTF: true, marsTF: false, EuropaTF: false, TitanTF: false};



export const gReducer = (state: typeof initState, action: DestReducerAction): typeof initState => {
        switch (action.type) {
            case DEST_ACTION.ONMOON:
                return {...state, id: 0, smInput: "moon", moonTF: true, marsTF: false, EuropaTF: false, TitanTF: false};
            case DEST_ACTION.ONMARS:
                return { ...state, id: 1, smInput: "mars", moonTF: false, marsTF: true, EuropaTF: false, TitanTF: false}
            case DEST_ACTION.ONEUROPA:
                return { ...state, id: 2, smInput: "europa", moonTF: false, marsTF: false, EuropaTF: true, TitanTF: false}
            case DEST_ACTION.ONTITAN:
                return { ...state, id: 3, smInput: "titan", moonTF: false, marsTF: false, EuropaTF: false, TitanTF: true }
            default:
                return state;
    
                    }
        };
    
                

