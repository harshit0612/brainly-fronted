import { InputBox } from "../components/ui/InputBox"
import { Button } from "../components/ui/Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignIn = () => {
    const userRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signin(){
        const username = userRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
        
        
    }

    return(
        <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-col bg-gray-300 rounded-xl p-8 shadow-xl min-w-48">
                <InputBox placeholder="Username" refProp={userRef}/>
                <InputBox placeholder="Password" refProp={passwordRef}/>
                <div className="pt-4">
                    <Button onClick={signin} variant="primary" text="Sign In" size="lg" fullWidth={true} loading={false} />
                </div>
            </div>
        </div>
    )
}