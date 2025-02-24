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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeveloperDto = void 0;
class CreateDeveloperDto {
    name;
    email;
    dateofbirth;
}
exports.CreateDeveloperDto = CreateDeveloperDto;
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateDeveloperDto.prototype, "name", void 0);
__decorate([
    isEmail(),
    __metadata("design:type", String)
], CreateDeveloperDto.prototype, "email", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateDeveloperDto.prototype, "dateofbirth", void 0);
//# sourceMappingURL=create-developer.dto.js.map