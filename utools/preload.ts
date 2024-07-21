// 您可以在进行窗口交互
// utools文档

var dictionary = require('dictionary-en')
var nspell = require('nspell')
dictionary(ondictionary)
let spell: { suggest: (arg0: string) => string[] }
function ondictionary (e:any, dict:any){
    console.log(e)
    spell = nspell(dict)
}

// https://www.u.tools/docs/developer/api.html#%E7%AA%97%E5%8F%A3%E4%BA%A4%E4%BA%92
window.versions={
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
}
window.services = {
    logHello:()=>{
        console.log('geelo')
    },
    spellCheck:async (text:string)=>{
        return spell.suggest(text)
        // let  result:[] =[]
        // function ondictionary(err:any, dict:any) {
        //     if (err) {
        //         throw err
        //     }
        //     var spell = nspell(dict)
        //     result = spell.suggest(text)
        // }
        // return Promise.resolve(result)
    }
}