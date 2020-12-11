import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'maaiMongoDB',
  connector: 'mongodb',
  url: 'mongodb+srv://cluster0.orivt.mongodb.net/maai',
  host: 'cluster0.orivt.mongodb.net',
  port: 27015,
  user: 'maai',
  password: 'N7BKLQyZk2fD9Aw9',
  database: 'maai',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MaaiMongoDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'maaiMongoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.maaiMongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
