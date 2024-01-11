import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService){

    }
    // @Get()
    // findAll(){
    //     return 'This action returns all coffees';
    // }

    @Get()
    findAllPaginated(@Query() paginationQuery){
        const { limit, offset} = paginationQuery;
        return this.coffeeService.findAll();
        //return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coffeeService.findOne(id);
       // return `This action return #${id} coffee`;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto);
        //return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id, updateCoffeeDto);
        //return `This action update #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeeService.remove(id);
        //return `This action delete #${id} coffee`;
    }
}
