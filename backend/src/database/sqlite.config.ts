import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Medicine} from "../medicines/medicine.entity";


export const sqliteConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/database.sqlite',
    entities: [Medicine],
    synchronize: true
};
