export interface ProcessVersions {
    node: () => string;
    chrome: () => string;
    electron: () => string;
}

declare global {
    interface Window {
      versions: ProcessVersions;
      services:{
          logHello:()=>void,
          spellCheck:(text:string)=>Promise<string[]>,
      }
    }
}
   