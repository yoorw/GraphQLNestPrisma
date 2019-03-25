import { Injectable, ParseIntPipe } from '@nestjs/common';
import { Post } from '../graphql.schema';
import { Args } from '@nestjs/graphql';

@Injectable()
export class PostsService {
    private readonly posts: 
    Post[] = [{
        id: 1,
        title: 'C.R.E.A.M',
        votes: 100,
        // author: {
        //     id: 2,
        //     firstName: 'Dennis',
        //     lastName: 'Cole',
        //     email: 'ghostface@wutang.com',
        // }
    }];

    // findAll( 
    //     // @Args('authorId', ParseIntPipe) 
    //     authorId: number 
    // ): Promise<Post[]> {
    //     let result = this.posts;
    //     result = result.filter(posts => posts.author.id === authorId);
    //     return Promise.resolve(result);
    //     }
        
        
//  // getSourceById( _sourceID: string ):
//     getSourceById():
//     Promise<Source> {
//         return Promise.resolve({sourceName: SourceName.NESSUS})
//     }
// }


// getIssues(issueStatus: IssueStatus, ogNames: OGName[], sortBy: string): Promise<Issue[]> {
//     const logger = new Logger('getIssues');
//     let result = this.issues;
//     if (issueStatus !== IssueStatus.ALL) {
//       result = result.filter(x => x.status === issueStatus);
//     }

//     if (ogNames.indexOf(OGName.ALL) === -1) {
//       result = result.filter(x => ogNames.indexOf(x.og) > -1);
//     }

//     return Promise.resolve(result);
//   }


}