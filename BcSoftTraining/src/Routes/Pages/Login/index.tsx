import { Button } from "@mantine/core";
import { Auth } from "../../../Services/Observer/AuthObserver";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleToken = () =>{
        Auth.setState('token', 'myToken');
        navigate( '/', {replace: true})
    }
    return ( 
        <div id="test_login">
            i'm login
            <Button title="" onClick={handleToken}> Login In </Button>
        </div>
     );
}

export default Login;