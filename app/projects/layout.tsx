import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Projects",
    description:"Projects of achieve"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div className="container mx-auto">
        {children}
        </div>
    )
}