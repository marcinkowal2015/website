import React, {FC} from "react";
import {Layout} from "../components/layout";
import {StyledA} from "../components/styledA";

export default function About() {
    return (
    <Layout>
        <div css={{fontSize: "32px", marginTop: "10px"}}>
                Hello! I'm Marcin 👋
            </div>
            <div css={{marginTop: "10px"}}>
                I live in Cracow, Poland. I am software developer writting mostly in JavaScript, TypeScript and C#.
                In my spare time I like playing chess, dancing and improve my software development skills focusing on
                web development.
                Currently I am working as Software Developer for Medius.
            </div>
            <div css={{fontWeight: "bold", fontSize:"28px", padding: "10px 0"}}>
                Contact
            </div>
            <div>
                If you want to get touch with me, you can find me here:
                <ul>
                    <li>Mail: <StyledA href="mailto:marcinkowal2015@outlook.com">marcinkowal2015@outlook.com</StyledA></li>
                    <li>Github: <StyledA href="https://github.com/marcinkowal2015">@marcinkowal2015</StyledA></li>
                    <li>LinkedIn: <StyledA href="https://www.linkedin.com/in/marcin-kowal-7b4476121/">Marcin Kowal</StyledA></li>
                    <li>Stack Overflow: <StyledA href="https://stackoverflow.com/users/6322395/marcin-kowal">Marcin Kowal</StyledA></li>
                </ul>
            </div>
    </Layout>);
}