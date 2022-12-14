import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { createCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly service: CategoryService){}

    @Post()
    createCategory(@Body() dto: createCategoryDto) {
        return this.service.createCategory(dto)
    }

    @Get()
    getAllCategories() {
        return this.service.getAllCategories()
    }

    @Get(':id')
    getCategoryById(@Param() params) {
        return this.service.getCategoryById(params.id)
    }
}
