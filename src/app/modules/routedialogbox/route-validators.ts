export const regExps: { [key: string]: RegExp } = {
    routeid: /^R\d+$/,
    source: /^[a-zA-Z]+$/,
    destination: /^[a-zA-Z]+$/,
    scheduleid: /^[S][0-9]{1,3}$/
};

export const errorMessages: { [key: string]: string } = {
    routeid: 'Required field, Should start from R. Ex: R234322',
    source: 'Required field, Should include letters only. Ex: wSasdqgh',
    destination: 'Required field, Should include letters only. Ex: wSasdqgh',
    scheduleid: 'Required field, Should include letters only. Ex: S123',

};
