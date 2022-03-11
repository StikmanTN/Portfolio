export const ClassNames = (...classes)=> {
    return classes.filter(Boolean).join(' ');
};