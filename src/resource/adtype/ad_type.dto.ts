import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdTypeDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    name: string
}