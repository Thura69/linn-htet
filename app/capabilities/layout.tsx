import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Capabilities",
    description:"Capabilities"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div >
        {children}
        </div>
    )
}