import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MongoGridFS } from 'mongo-gridfs';
import { InjectConnection } from '@nestjs/typeorm';
import { FileInfoVm } from './file-info-vm.model';
import * as GridFsStorage from 'multer-gridfs-storage';

@Injectable()
export class FileService {
  private fileModel: MongoGridFS;

  constructor(@InjectConnection() private readonly connection) {
    this.fileModel = new MongoGridFS(this.connection.db, 'fs');
  }

  async readStream(id: string) {
    return await this.fileModel.readFileStream(id);
  }

  async findInfo(id: string): Promise<FileInfoVm> {
    const result = await this.fileModel
      .findById(id)
      .catch(err => {
        throw new HttpException('File not found', HttpStatus.NOT_FOUND);
      })
      .then(result => result);

    return {
      filename: result.filename,
      length: result.length,
      chunkSize: result.chunkSize,
      md5: result.md5,
      contentType: result.contentType,
    };
  }

  async deleteFile(id: string): Promise<boolean> {
    return await this.fileModel.delete(id);
  }
}
