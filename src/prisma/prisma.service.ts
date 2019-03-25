import { Injectable } from '@nestjs/common';
import {Prisma} from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
    constructor() {
        super({
            endpoint: 'https://eu1.prisma.sh/ryan-yoo/mySecurity/dev',
            debug: false,
        });
    }
}
