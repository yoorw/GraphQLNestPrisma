import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';
import { AuthorsModule } from './authors/authors.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    CatsModule,
    AuthorsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
  ],
})
export class AppModule {}
