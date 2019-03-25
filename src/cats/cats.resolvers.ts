import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription, Info } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { PubSub } from 'graphql-subscriptions';
import { Cat } from '../graphql.schema';
import { CatsGuard } from './cats.guard';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

const pubSub = new PubSub();

@Resolver('Cat')
export class CatsResolvers {
  constructor(
    private readonly catsService: CatsService,
    private readonly prisma: PrismaService) {}

  // @Query()
  // @UseGuards(CatsGuard)
  //   async getCats() {
  //     return await this.catsService.findAll();
  //   }

  @Query()
  async getCats(@Args() Args, @Info() info): Promise<Cat[]> {
    return await this.prisma.query.(args, info);
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Cat> {
    return await this.catsService.findOneById(id);
  }

  @Mutation('createCat')
  async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('catCreated'),
    };
  }
}
