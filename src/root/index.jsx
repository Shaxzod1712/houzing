import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Container } from "./style";


export const Root = ()=>{
    return <Container>
        <Navbar/>
    </Container>
}