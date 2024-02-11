import { Navigate } from "react-router-dom";
interface Props {
    route: string;
}
function Redirect({route}: Props) {
    return ( 
        <Navigate to={`/${route}`} />
     );
}

export default Redirect;