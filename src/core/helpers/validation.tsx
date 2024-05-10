export const pinValidationLength = (documentNumber: number | string | null) => {
    switch (Number(documentNumber)) {
        case 1:
            return {
                length: 8,
                pattern: /^[0-9]{8}$/
            };
        case 2 || 3:
            return {
                length: 7,
                pattern: /^[0-9]{7}$/
            };
        case 4:
            return {
                length: 7,
                pattern: /^[0-9]{7}$/
            };
        default:
            return {
                length: 8,
                pattern: /^[0-9]{8}$/
            };
    }
};

export const pinValidationType = (value:  string ) => {
    return value?.replace(/[^A-Na-n0-9P-Zp-z]/, '').toUpperCase();
};

export const documentNumberValidationType = (value:  string ) => {
    return value?.replace(/[^0-9]+/g, '');
};

