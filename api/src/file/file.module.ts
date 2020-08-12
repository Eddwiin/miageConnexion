import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsConfigService } from './gridfs-config.service';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: GridFsConfigService,
    }),
  ],
  controllers: [FileController],
  providers: [GridFsConfigService, FileService],
})
export class FileModule {}
