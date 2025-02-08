import axios from "axios"
import { CrossIcon } from "../../icons/crossIcon"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { useRef, useState } from "react"
import { BACKEND_URL } from "../../config"

interface ModelProps{
    open : boolean,
    onClick?: () => void
}

enum contentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModel(props: ModelProps){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type,setType] = useState(contentType.Youtube);

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers: {
                "authorization" : localStorage.getItem("token")
            }
        })
        props.onClick();
    }
    
    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 bg-opacity-60 flex justify-center"> 
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded-md">
                        <div className="flex justify-end m-1" >
                            <div onClick={props.onClick} className="cursor-pointer">
                                <CrossIcon size="lg"/>
                            </div>
                        </div>
                        <div>
                            <InputBox refProp={titleRef} placeholder="Title"/>
                            <InputBox refProp={linkRef} placeholder="Link"/>
                        </div>

                        <div>
                            <h1 className="mt-2">
                                Type
                            </h1>

                            <div className="flex gap-1 p-4">
                                <Button text="Youtube"variant={type===contentType.Youtube ? "primary" : "secondary"} size="md" onClick={()=>{
                                    setType(contentType.Youtube)
                                }} />
                                <Button text="Twitter"variant={type===contentType.Twitter ? "primary" : "secondary"} size="lg" onClick={()=>{
                                    setType(contentType.Twitter)
                                }} />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" size="lg" text="Submit"/>
                        </div>
                        
                    </span>
                </div>
        </div>}
    </div>
}

