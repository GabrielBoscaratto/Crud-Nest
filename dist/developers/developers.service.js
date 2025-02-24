"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersService = void 0;
const common_1 = require("@nestjs/common");
let DevelopersService = class DevelopersService {
    developersRepository;
    constructor(developersRepository) {
        this.developersRepository = developersRepository;
    }
    create(createDeveloperDto) {
        const developer = this.developersRepository.create(dto);
        return this.developersRepository.save(developer);
    }
    findAll() {
        return this.developersRepository.find();
    }
    findOne(id) {
        return this.Repository.findOneby(id);
    }
    async update(id, updateDeveloperDto) {
        const developer = await this.developersRepository.findOne(id);
        this.Repository.merge(developer, dto);
        return this.repository.save(developer);
    }
    async remove(id) {
        const developer = await this.developersRepository.findOne(id);
        if (!developet)
            return null;
        this.repository.merge(developer, dto);
        return this.repository.save(developer);
    }
};
exports.DevelopersService = DevelopersService;
exports.DevelopersService = DevelopersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof Repository !== "undefined" && Repository) === "function" ? _a : Object])
], DevelopersService);
//# sourceMappingURL=developers.service.js.map