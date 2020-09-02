import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        database: configService.get('DATABASE_NAME'),
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        synchronize: !!+configService.get('DATABASE_SYNCHRONIZE'),
        useNewUrlParser: !!+configService.get('DATABASE_NEW_URL_PARSER'),
        logging: !!+configService.get('DATABASE_LOGGING'),
        useUnifiedTopology: !!+configService.get('DATABASE_UNIFIED_TOPOLOGY'),
      }),
      inject: [ConfigService],
    }),
    EventModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
