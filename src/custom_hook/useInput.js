import {useState} from "react";

export const useInput = initValue => {
    const [val, setVal] = useState(initValue);
    return [
        {value : val, onChange : e=>setVal(e.target.value)},
        () => setVal(initValue)
    ];
};