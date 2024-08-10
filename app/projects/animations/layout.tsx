import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Animations",
    description:"Animations me to reach"
}


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

    return (
        <div>
        {children}
        </div>
    )
}