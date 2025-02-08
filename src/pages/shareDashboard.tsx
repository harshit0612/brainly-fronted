import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export function ShareDashBoard() {
  const { shareLink } = useParams(); 
  const [user, setUser] = useState(null);
  const navigation = useNavigate();
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.error("Error while fetching data:",error)
    })
  },[shareLink])

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full bg-gray-900 text-white h-16 flex justify-between items-center px-4 shadow-md z-10">
            <div className="text-lg font-semibold">
                {user?.username ? `${user.username}'s Brain` : "Loading..."}
            </div>
            <div>
                <Button
                    variant="primary"
                    size="lg"
                    text="Sign In"
                    onClick={() => {
                    navigation("/signin");
                    }}
                ></Button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div className='p-4 bg-slate-100 min-h-screen'>
            <div className='flex gap-4 flex-wrap'>
                {user?.content.map(({ type, link, title }) => {
                    return <Card type={type} link={link} title={title} />;
                })}
            </div>
        </div>
    </div>
  );
}
