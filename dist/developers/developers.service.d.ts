import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
export declare class DevelopersService {
    private readonly developersRepository;
    constructor(developersRepository: Repository<Developer>);
    create(createDeveloperDto: CreateDeveloperDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateDeveloperDto: UpdateDeveloperDto): Promise<any>;
    remove(id: number): Promise<any>;
}
