import { useEffect, useState } from 'react'
import { useHelperContext } from '../../Context/HelperContext'

import './TitleList.css'

const TitleList = ({filter}) => {
    const imgNone='https://static.nike.com/a/images/w_960,c_limit,f_auto/6a9257a2-e7bf-4cdc-b5cc-75cb9ff2ce4c/what-you-got-mins-pie.jpg' 
    const [titleSrc, setTitleSrc]=useState({title:"none", img:imgNone})
    const {tittleResource}=useHelperContext()

    let style = {backgroundImage: "url("+titleSrc.img+")"}

    useEffect(() => {
        setTitleSrc(
            tittleResource(filter)
        )
    }, [filter])
    
    return (
        <div className="titleList">
            <div className="imgTittleList" style={style}></div>
            <div className="title">
                <h1>{titleSrc.title}</h1>
            </div>
        </div>
    )
}

export default TitleList
