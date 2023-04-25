import Header from "./header";
import Footer from "./footer";
import React from "react";

type Props = {
    children?:React.ReactNode
}
const Layout:React.FC<Props> = ({children}) => {
    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )

}

export default Layout;