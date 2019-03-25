/* tslint:disable */
export abstract class CreateCatInput {
    name?: string;
    age?: number;
}

export abstract class Author {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    posts?: Post[];
}

export abstract class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class Post {
    id: number;
    title?: string;
    votes?: number;
}

export abstract class IQuery {
    abstract author(id: string): Author | Promise<Author>;

    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}
