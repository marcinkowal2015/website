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
        <div css={css`
                background: #fcfcfc;
                width: 100vw;
                height: 100vh;
                padding: 20px 10%;
                box-sizing: border-box;
                @media(max-width: 600px) {
                    padding: 0;
                }`}>
            <div css={
                css`display: flex;
                    flex-direction: row; 
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    @media(max-width: 600px) {
                        flex-direction: column;
                    }`}>
                <div css={{display: "flex", flexDirection: "row", alignItems: "center", width: "300px", height: "120px"}}>
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
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
            <div css={{display: "flex", flexDirection: "column", padding: "0 5%", fontSize: "18px", lineHeight: "30px"}}>
                {props.children}
            </div>
        </div>
    </>);
}