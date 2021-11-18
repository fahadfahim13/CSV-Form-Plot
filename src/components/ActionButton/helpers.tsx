export const validateFormItems = (form: object) => {
    for (let [key, value] of Object.entries(form)) {
        if(`${value}` && `${value}`!=='') return true;
    }
    return false;
}