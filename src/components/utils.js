
import { startCase } from 'lodash'

export const toTitle = (str) => startCase(str)

export const downloadFile = ( filename, content, type ) => {
    var file = new Blob([content], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

export const hasContent = (target) => (target && target.length !== 0)

export const isFunction = (functionToCheck) => (
    functionToCheck
    && {}.toString.call(functionToCheck) === '[object Function]'
)

export const objToHTMlAttribute = (targetObj) => {
    console.log(targetObj)
    const keys = Object.keys(targetObj)
    const keysMap = keys.filter((key) => typeof targetObj[key] !== 'undefined')

    return keysMap.map((key) => `${dasherization(key)}="${targetObj[key]}"`).join(' ')
}

export const objectDasherization = (target) => {
    let out = {}
    for (const key in target) {
        out[dasherization(key)] = target[key]
    }

    return out;
}

export const dasherization = (targetStr) => targetStr.replace(/\.?([A-Z]+)/g,(x,y) => `-${y.toLowerCase()}`).replace(/^-/, '');

export const getFromStorage = ({ target, defaultValue, callback }) => {
    let out = defaultValue
    if ( typeof window !== 'undefined' ) {
        const itemExist = window.localStorage.getItem(target)
        if (itemExist) {
            out = JSON.parse(itemExist)
        } else {
            window.localStorage.setItem(target, JSON.stringify(defaultValue))
        }
    } else {
        out =  window.localStorage.getItem(target)
    }

    if ( typeof callback === 'function' ) {
        callback(out)
    } else {
        return out
    }
}

export const generateID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) =>  {
    const r = Math.random()*16|0
    const v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
});
