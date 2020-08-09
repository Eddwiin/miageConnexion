import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateEventDTO } from './dto/create-event.dto';
import { Event } from './event.entity';

@Injectable()
export class EventService {

    constructor(
       @InjectRepository(Event) private readonly eventRepository: MongoRepository<Event> 
    ) {}

    async create(createEventDTO: CreateEventDTO) {
        return await this.eventRepository.save(createEventDTO);
    }
}
