import { Container } from "@mui/material"
import { NavBar } from "./navbar"
import { Outlet } from "react-router-dom"
import Sidebar from './card';


export const Layout=()=>{
    return(
        <>
            <Sidebar/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
}