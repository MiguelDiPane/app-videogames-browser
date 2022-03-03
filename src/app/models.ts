//Aca importa la interfaz Game
export interface Game{
<<<<<<< Updated upstream
    backround_image: string;
=======
    id: string,
    background_image: string;
>>>>>>> Stashed changes
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publisher>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshot>;
    trailers: Array<Trailer>

}

export interface APIResponse<T>{
    result: Array<T>;
}

interface Genre{
    name:string;
}
interface ParentPlatform{
    platform:{
        name:string;
    };
}
interface Publisher{
    name:string;
}

interface Rating{
    id:number;
    count:number;
    title:string;
}

interface Screenshot{
    image:string;
}

interface Trailer{
    data:{
        max:string;
    };
}