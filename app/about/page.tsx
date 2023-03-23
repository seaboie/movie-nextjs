import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
    title: 'About page',
    description: 'About about about about',
}


export default function About() {
    // throw new Error("Have error sir!!!")
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <h1 className="text-3xl font-bold">About Page</h1> 
            </Suspense>
        </div>
    )
}
