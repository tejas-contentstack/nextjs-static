import Image from 'next/image'
import ironMan from '../public/iron-man.jpeg'


type Movie = {
    Title: string
    Year: string
    Runtime: string
  }


  type props = {
    movies: Movie[]
  }

export default function Page({movies}: props) {
    return <div>
        <h1>Ironman</h1>
        <Image src={ironMan} alt='iron-man'/>

        <div>
            {
                movies.map(movie => {
                    return <div key={movie.Title}>
                        <label>Title: {movie.Title}</label><br/>
                        <label>Year: {movie.Year}</label><br/>
                        <label>Runtime: {movie.Runtime}</label><br/>
                    </div>
                })
            }
        </div>
    </div>
  }


  export async function getStaticProps(){
    const result = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    const movies = await result.json()
    return {
        props: {movies},
    }
  }