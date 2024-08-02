import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Case Studies",
    description:"Case Studies"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div>
        {children}
        </div>
    )
}