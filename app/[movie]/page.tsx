import Image from "next/image"
import { MovieProps } from "../about/movie"

export default async function MovieDetail({params}) {

   const {movie} = params

    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)

    const res: MovieProps = await data.json()
    return (
        <div>
            <h1 className="text-2xl">{res.title}</h1>
            <h1 className="text-lg">{res.release_date}</h1>
            <h1>Runtime: {res.runtime} minutes</h1>
            <h1 className="bg-green-600 inline-block p-2 my-2 rounded-md text-white">{res.status}</h1>

            <Image
                className="my-12 w-full"
                src={imagePath + res.backdrop_path}
                width={1000}
                height={1000}
                priority
                alt=""
            />
            <p>{res.overview}</p>
        </div>
    )
}