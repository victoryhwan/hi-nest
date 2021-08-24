import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){

    }

    @Get()
    getAll() :Movie[]{
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query("year") searchYear: string){
        return `${searchYear}년도 영화야`
    }

    @Get('/:id')
    getOne(@Param("id") movieId:string){
        return this.moviesService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData)
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId)
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updataData){
        // return `id ${movieId} 영화가 업데이트 되었습니다.`
        return {
            updatMovie: movieId,
            ...updataData
        }
    }
}
