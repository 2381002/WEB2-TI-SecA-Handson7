import { IsEmail, isString, IsString } from "class-validator";

export class CreateSongDTO {
    @IsString()
    title: string;
    @IsString()
    artist: string;
}