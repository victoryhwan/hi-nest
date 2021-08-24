import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    create(@Body() movieData:CreateMovieDto){
        console.log(movieData)
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId)
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updataData:UpdateMovieDto){
        return this.moviesService.update(movieId, updataData)
    }
}
