import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:string):Movie{
        const movie = this.movies.find(movie => movie.id === +id)
        if(!movie){
            throw new NotFoundException(`해당 아이디의 영화를 찾을 수 없습니다. id:${id}`)
        }
        return movie
    }

    deleteOne(id:string){
        this.getOne(id)
        this.movies.filter(movie => movie.id !== +id)
    }

    create(movieData:CreateMovieDto){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
        // return this.movies[this.movies.length-1]
    }

    update(id:string, updataData:UpdateMovieDto){
        let movie = this.getOne(id);
        console.log(movie)
        this.deleteOne(id)

        this.movies.push({...movie,...updataData})
        console.log({...movie,...updataData})
    }
}
