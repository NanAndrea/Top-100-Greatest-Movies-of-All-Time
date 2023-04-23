import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    
    const [state, setState] = useState(() => {
        
        const localStorageElement = localStorage.getItem(key);
        if (localStorageElement) {
            return JSON.parse(localStorageElement);
        }
        return initialValue;
       
    });

    function handleStateChange(newValue) {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [state, handleStateChange];
}