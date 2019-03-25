import { Module } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { AuthorResolver } from "./authors.resolvers";
import { PostsModule } from "./posts.module";

@Module({
    imports: [PostsModule],
    providers: [AuthorsService, AuthorResolver],
})
export class AuthorsModule {}