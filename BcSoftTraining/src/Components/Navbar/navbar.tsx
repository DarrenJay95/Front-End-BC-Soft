import { NavLink, AppShell } from "@mantine/core"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppShell.Navbar p='lg' style={{ gap: '15px' }}>
            <NavLink
                label='H o m e'
                onClick={() => navigate('/home')}
                variant="light"
                style={{ color: '#67AADF', fontWeight: 800 }}
            />
            <NavLink
                label='P o k e d e x'
                onClick={() => navigate('/pokedex')}
                style={{ color: '#67AADF', fontWeight: 800 }}
            />
            <NavLink
                label='N o t  F o u n d'
                onClick={() => navigate('*')}
                style={{ color: '#67AADF', fontWeight: 800 }}
            />
        </AppShell.Navbar>
    )
}

export default Navbar;