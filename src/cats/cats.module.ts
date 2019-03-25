import { Module } from '@nestjs/common';
import { CatsResolvers } from './cats.resolvers';
import { CatsService } from './cats.service';
import {PrismaModule} from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CatsService, CatsResolvers],
})
export class CatsModule {}
