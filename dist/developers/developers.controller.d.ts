import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
export declare class DevelopersController {
    private readonly developersService;
    constructor(developersService: DevelopersService);
    create(createDeveloperDto: CreateDeveloperDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateDeveloperDto: UpdateDeveloperDto): Promise<any>;
    remove(id: string): Promise<any>;
}
