import { useState } from 'react';

const useCounter = (minimumValue = -20, maximumValue = 20, initialValue = 5) => {
    const [value, setValue] = useState(initialValue);

    // To increment the value
    const increment = () => setValue((value < maximumValue) ? value + 1 : value)
    // To decrement the value
    const decrement = () => setValue((value > minimumValue) ? value - 1 : value)
    // To reset the value
    const reset = () => setValue(0)

    return {value, minimumValue, maximumValue, increment, decrement, reset}
};

export default useCounter;