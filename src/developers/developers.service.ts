import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Injectable()
export class DevelopersService {
  constructor(private readonly developersRepository: Repository<Developer>) {}
  create(createDeveloperDto: CreateDeveloperDto) {
    const developer = this.developersRepository.create(dto);
    return this.developersRepository.save(developer);
  }

  findAll() {
    return this.developersRepository.find();
  }

  findOne(id: number) {
    return this.Repository.findOneby(id);
  }

  async update(id: number, updateDeveloperDto: UpdateDeveloperDto) {
    const developer = await this.developersRepository.findOne(id);
    this.Repository.merge(developer, dto);
    return this.repository.save(developer);
  }

  async remove(id: number) {
    const developer = await this.developersRepository.findOne(id);
    if (!developet) return null;
    this.repository.merge(developer, dto);
    return this.repository.save(developer);
  }
}
