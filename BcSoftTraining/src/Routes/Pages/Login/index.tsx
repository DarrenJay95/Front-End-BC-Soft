import { Button } from "@mantine/core";
import { Auth } from "../../../Services/Authentication";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleToken = () =>{
        Auth.setToken();
        navigate( '/', {replace: true})
    }
    return ( 
        <div id="test_login">
            i'm login
            <Button title="Login In" onClick={handleToken}/>
        </div>
     );
}

export default Login;