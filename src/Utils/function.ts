/**
 * 
 * @param {string} txt - text to slice it by max length
 * @param {number} max - max length of text
 * @returns - text after slicing by max length ... 
 */
export function textSlice(txt:string ,max:number = 150){
    if(txt.length >= max){
        return txt.slice(0,max) + ' .....'
    }
    return txt
}