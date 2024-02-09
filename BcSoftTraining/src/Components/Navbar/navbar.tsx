import { NavLink, AppShell } from "@mantine/core"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppShell.Navbar p='md' style={{ gap: '10px' }}>
            <NavLink
                label='Home'
                onClick={() => navigate('/home')}
                style={{ margin: '5px' }}
            />
            <NavLink
                label='Pokemon'
                onClick={() => navigate('/pokemon')}
                style={{ margin: '5px' }}
            />
            <NavLink
                label='Not Found'
                onClick={() => navigate('*')}
                style={{ margin: '5px' }}
            />
        </AppShell.Navbar>
    )
}

export default Navbar;