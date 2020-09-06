import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
  Put,
} from '@nestjs/common';
import { CreateEventDTO } from './dto/create-event.dto';
import { EventService } from './event.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'helpers/multer';
import { UpdateEventDTO } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('/create')
  async create(@Body() createEvent: CreateEventDTO) {
    return await this.eventService.create(createEvent);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: `${process.cwd()}/upload/events`,
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadEventImg(@UploadedFile() file) {
    const eventId = file.originalname.split('.')[0];
    return await this.eventService.uploadImg({
      eventId,
      imgName: file.originalname,
    });
  }

  @Get('/all')
  async getEvents() {
    return await this.eventService.getEvents();
  }

  @Get('/:imgpath')
  getUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: `${process.cwd()}/upload/events` });
  }

  @Put()
  async event(@Body() updateEvent: UpdateEventDTO) {
    return await this.eventService.updateEvent(updateEvent)
  }
}
