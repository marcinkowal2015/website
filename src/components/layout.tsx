import React, {FC} from "react";
import logo from "../images/avatar.png";
import {css, Global} from "@emotion/core";
import {Link} from "gatsby";

const NavLink: FC<{to: string}> = ({to, children}) => (
    <Link css={{
            textDecoration: "none", 
            padding: "10px", 
            fontSize: "18px", 
            color: "gray", 
            '&:hover': {
                color: 'black'
            }
        }} 
      to={to}>
        <div>{children}</div>
    </Link>
    );

export function Layout(props) {
    return (
    <>
        <Global styles={css`
            body {
                margin: 0;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
        `}/>
        <div css={{background: '#fcfcfc', width: '100vw', height: '100vh', padding: "20px", boxSizing: "border-box"}}>
            <div css={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap"}}>
                <div css={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Link to="/">
                        <img src={logo} css={{width: "90px", height: "90px", borderRadius: "50%", marginRight: "20px"}}></img>
                    </Link>
                    <div>
                        <div css={{fontSize: "24px"}}>Marcin Kowal</div>
                        <div css={{color: "gray"}}>Front End Developer</div>
                    </div>
                </div>
                <div css={{display: "flex"}}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
            </div>
            
            {props.children}
        </div>
    </>);
}