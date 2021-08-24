import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{
    //이 dto를 가지고 데이터 유효검사를 한다
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({each:true}) //each:true 는 모든요소를 하나씩 검사한다는 뜻.
    readonly genres: string[];
}