import './App.css'
import { Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useEffect, useState} from "react";
import VConsole from 'vconsole';




const spell = async ({text,setData}:{text:string,setData:(arg:{ value: string,
        label: string,}[])=>void})=>{
   const res =  await window.services.spellCheck(text)
    const temp = res.map((item)=>{
        return {label:item,value:item}
    })
    setData(temp)
}
function App() {

// or init with options
    const vConsole = new VConsole({ theme: 'dark' });
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    console.log(vConsole)


    const onSearch = (value: string) => {
        spell({text:value,setData:setResults})
        // window.services.logHello()
        // console.log(`selected ${value}`);
    };

    const [results,setResults] = useState< {
        value: string,
        label: string,
    }[]>([]);
    useEffect(()=>{
        if (results.length > 0){
            utools.onMainPush(({code, type, payload })=>{
                console.log(code,type,payload)
                return results.map((item)=>{
                    console.log(item)
                    return {icon:'icon.png',text:item.value,title:item.value}
                })
            },()=>{

            })
        }
    },[results])
    useEffect(()=>{
        utools.setSubInput(({text}:any)=>{
            spell({text:text,setData:setResults})
        })
        utools.onPluginEnter(({code, type, payload, option}) => {
            console.log('用户进入插件应用', code, type, payload,option)
        })
    },[])

  return (
    <>
        <Select
            filterOption={false}
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={results}
        />

        <TextArea value={results.map((item)=>item.value).join('')}/>
    </>
  )
}

export default App
