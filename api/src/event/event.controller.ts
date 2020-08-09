import { Controller, Post, Body } from '@nestjs/common';
import { CreateEventDTO } from './dto/create-event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService) {}

    @Post("/create")
    async create(@Body() createEvent: CreateEventDTO) {
        return await this.eventService.create(createEvent);
    }
}
