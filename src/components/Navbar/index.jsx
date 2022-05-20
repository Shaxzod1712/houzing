import React from "react";
import { Container, Logo, NavbarBody, NavbarWrapper, Wrapper, activeStyle } from "./styled";
import {Outlet, NavLink, useNavigate} from 'react-router-dom'
import {navbar} from '../../utils/navbar'




const Navbar = () =>{
    const navigate = useNavigate()

    return (
        <Wrapper className="nocopy">
            <Container>
                <NavbarWrapper>
                    <Logo onClick={()=> navigate('./home')}>
                        <Logo.Icon/>
                        <Logo.Title>Houzing</Logo.Title>
                    </Logo>
                    <NavbarBody>
                        {
                            navbar.map((value)=>{
                                return !value.hidden&& (
                                    <NavLink style={activeStyle} key={value.id} to={value.path}>
                                        {value.title}
                                    </NavLink>
                                )
                            })
                        }
                    </NavbarBody>
                    <Logo>
                        <button width={'120px'}>Signin</button>
                    </Logo>
                </NavbarWrapper>
            </Container>
            <Outlet/>
        </Wrapper>
    )
}

export default Navbar