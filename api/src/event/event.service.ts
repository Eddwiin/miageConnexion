import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateEventDTO } from './dto/create-event.dto';
import { Event } from './event.entity';
import { AddImageEventDTO } from './dto/add-image-event.dto';
import { UpdateEventDTO } from './dto/update-event.dto';

@Injectable()
export class EventService {

    constructor(
       @InjectRepository(Event) private readonly eventRepository: MongoRepository<Event> 
    ) {}

    async create(createEventDTO: CreateEventDTO) {
        return await this.eventRepository.save(createEventDTO);
    }

    async uploadImg(addImageEventDTO: AddImageEventDTO) {
        return await this.eventRepository.update(addImageEventDTO.eventId, { imgName: addImageEventDTO.imgName})
    }

    async getEvents() {
        return await this.eventRepository.find();
    }

    async updateEvent(updateEventDTO: UpdateEventDTO) {
        return await this.eventRepository.update(updateEventDTO.eventId, updateEventDTO)
    }
}
