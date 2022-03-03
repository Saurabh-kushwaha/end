/**
 * A function used to get value
 * @param {string} key localStorage Key
 * @returns JSON value from localStorage,
 * undefined in case of errors
*/

export const getValue = (key) => {
    try {
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value);
        return parsedValue;
    } catch (e) {
        return undefined;
    }
}

/**
 * 
 * @param {string} key key
 * @param {JSON} value value to be stored in localStorage
*/

export const updateValue = (key,value) => {   
   localStorage.setItem(key, JSON.stringify(value)); 
}