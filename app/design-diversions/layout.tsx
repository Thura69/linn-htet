import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Design Diversions",
    description:"This is Design Diversions"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div className="container mx-auto">
        {children}
        </div>
    )
}