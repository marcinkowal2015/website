import React, {FC} from "react";

export const StyledA: FC<{href: string}> = ({href, children}) => (
    <a css={{textDecoration: "none", color: "#D36AC2"}} href={href}>{children}</a>
);