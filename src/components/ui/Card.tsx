import axios from "axios";
import { DeleteIcon } from "../../icons/deleteIcon";
import { ShareIcon } from "../../icons/shareIcon"
import { BACKEND_URL } from "../../config";

interface CardProps{
    title: string,
    link: string,
    type: "twitter" | "youtube"
    contentId: any;
}

export const Card = ({title,link,type,contentId}: CardProps) => {
    return(
        <div>
            <div className="bg-white rounded-md  border-gray-200 border max-w-72 p-4 min-h-48 min-w-72"> 
                <div className="flex justify-between">

                    <div className="flex items-center text-lg font-normal">
                        <div className="text-gray-500 pr-4">
                            <ShareIcon size="lg"/>
                        </div>
                        <div className="text-md font-normal">
                            {title}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="text-gray-500 pr-2">
                           <a href={link.replace("embed","watch")} target="_blank" >
                            <ShareIcon size="lg"/>
                           </a>
                        </div>

                        <div className="text-gray-500 pr-2">
                            <button onClick={async ()=>{
                                await axios.delete(`${BACKEND_URL}/api/v1/content`,{
                                    headers: {
                                        "authorization" : localStorage.getItem("token")
                                    },
                                    data: {contentId}
                                })

                            }} className="cursor-pointer">
                                <DeleteIcon size="lg"/>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-4">
                    {type == "youtube" && <iframe className="w-full" width="560" height="315" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                    {type=="twitter" && <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com","twitter.com")}></a> 
                    </blockquote>}
                </div>

            </div>
        </div>
    )
}  

