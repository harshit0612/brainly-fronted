import { InputBox } from "../components/ui/InputBox"
import { Button } from "../components/ui/Button"
import { useRef } from "react"
import {BACKEND_URL} from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const SignUp = () => {
    const userRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signup(){
        const username = userRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            username,
            password
        })
        navigate("/signin");
        
    }

    return(
        <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-col bg-gray-300 rounded-xl p-8 shadow-xl min-w-48">
                <InputBox placeholder="Username" refProp={userRef}/>
                <InputBox placeholder="Password" refProp={passwordRef} />
                <div className="pt-4">
                    <Button onClick={signup} variant="primary" text="Sign Up" size="lg" fullWidth={true} loading={false} />
                </div>
            </div>
        </div>
    )
}