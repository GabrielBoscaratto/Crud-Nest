export class CreateDeveloperDto {
    
    @IsString()
    name: string;
    @isEmail()
    email: string;

    @IsDateString()
    dateofbirth: string;
}
