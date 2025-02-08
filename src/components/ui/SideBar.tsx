import { BrainIcon } from "../../icons/brainIcon"
import { TwitterIcon } from "../../icons/twitter"
import { YoutubeIcon } from "../../icons/youTube"
import { SideBarItem } from "./SideBarItem"

export  const SideBar = () =>{
    return(
        <div className="h-screen bg-white w-76 fixed left-0 top-0 shadow p-6">
            <div className="pb-6 text-lg font-bold">
                <SideBarItem text="Second Brain" icon={<BrainIcon/>}/>
            </div>
            <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
            <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
        </div>
    )
}