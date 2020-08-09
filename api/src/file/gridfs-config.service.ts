import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import * as GridFsStorage from 'multer-gridfs-storage';

@Injectable()
export class GridFsConfigService implements MulterOptionsFactory {
  gridFsStorage: GridFsStorage;

  constructor() {
    this.gridFsStorage = new GridFsStorage({
      url: `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?useUnifiedTopology=true`,
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          const filename = file.originalname.trim();
          const fileInfo = {
            filename: filename,
          };
          resolve(fileInfo);
        });
      },
    });
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: this.gridFsStorage,
    };
  }
}
