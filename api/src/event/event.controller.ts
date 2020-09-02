import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreateEventDTO } from './dto/create-event.dto';
import { EventService } from './event.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from 'helpers/multer';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('/create')
  async create(@Body() createEvent: CreateEventDTO) {
    return await this.eventService.create(createEvent);
  }

  @Post('/upload')
  @UseInterceptors(
    FilesInterceptor('file', 20, {
      storage: diskStorage({
        destination: `${process.cwd()}/uploads/events/`,
        filename: editFileName,
      }),
    }),
  )
  async uploadEventImg(@UploadedFiles() files) {
    return files.map(file => file);
  }
}
