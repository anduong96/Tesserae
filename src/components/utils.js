
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


export default {
    toTitle,
    downloadFile,
    hasContent,
    isFunction,
    objToHTMlAttribute,
    dasherization,
    objectDasherization
}
