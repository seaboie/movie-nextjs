import Image from "next/image"
import Link from "next/link"

export type MovieProps = {
    id: string,
    title: string,
    poster_path: string,
    release_date: string,
    runtime: string,
    status: string,
    backdrop_path: string,
    overview: string
}

export default async function Movie({ title, id, poster_path, release_date }: MovieProps) {

    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <div key={id}>
            <div className="">
                <h1 className="truncate">{title}</h1>
               
            </div>
            <div>
            <h2>{release_date}</h2>
            </div>

            <Link href={`/${id}`}>
                <Image
                    alt={title}
                    src={imagePath + poster_path}
                    width={800}
                    height={800}
                />
            </Link>
        </div>
    )
}
