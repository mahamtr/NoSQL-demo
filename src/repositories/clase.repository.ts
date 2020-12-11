import {DefaultCrudRepository} from '@loopback/repository';
import {Clase, ClaseRelations} from '../models';
import {MaaiMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClaseRepository extends DefaultCrudRepository<
  Clase,
  typeof Clase.prototype.id,
  ClaseRelations
> {
  constructor(
    @inject('datasources.maaiMongoDB') dataSource: MaaiMongoDbDataSource,
  ) {
    super(Clase, dataSource);
  }
}
