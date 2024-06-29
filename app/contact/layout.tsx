import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Contact",
    description:"Contact me to reach"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div className="container mx-auto">
        {children}
        </div>
    )
}