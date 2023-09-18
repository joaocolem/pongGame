import React, { useEffect, useReducer } from 'react';

const GameContext = React.createContext();

const reducer = (state, action) =>{
    return 'Novo Estado';
}



const GameProvider = (props) => {
    const [state, dispatch] = useReducer(reducer);

    useEffect(() => {
        dispatch();
    }, []);

    return (
        <GameContext.Provider value={state}>
            {props.children}
        </GameContext.Provider>
    )
};
export {GameContext, GameProvider};