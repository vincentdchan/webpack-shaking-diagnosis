import lodash from 'lodash-es';

function isArray(obj) {
    return lodash.isArray(obj);
}

function isNull(obj) {
    return null === obj;
}

export {isArray, isNull};