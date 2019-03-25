import { Injectable, Inject } from '@nestjs/common';
import { Author } from '../graphql.schema';

@Injectable()
export class AuthorsService {
    private readonly authors: Author[] = [{
        id: 1,
        firstName: 'Robert',
        lastName: 'Diggs',
        email: 'rza@wutang.com',
        // posts: [{
        //     id: 1,
        //     // title: 'Protect Ya Neck',
        //     // votes: 100
        // }]
    }];

    create(author: Author): Author {
        this.authors.push(author);
        return author;
    }

    findAll(): Author[] {
        return this.authors;
    }

    findOneById(id: number): Author {
        return this.authors.find(author => author.id === id);
    }

}