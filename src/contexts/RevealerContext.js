import React, { createContext, useState } from 'react';

export const RevealerContext = createContext();

export const RevealerProvider = props => {

    const [actionBtn, setActionBtn] = useState("")
    const [revealerNav, setRevealerNav] = useState()

    return (
        <RevealerContext.Provider value={[actionBtn, setActionBtn, revealerNav, setRevealerNav]}>
            {props.children}
        </RevealerContext.Provider>
    );
};