import { ReactElement } from "react"


export const SideBarItem = ({text,icon}:{text:string,icon:ReactElement}) => {
    return(
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded transition-all duration-300">
            <div className="p-2">
                {icon}
            </div> 
            <div className="p-2">
                {text}
            </div>
        </div>
    )
}

