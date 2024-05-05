// src/message.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/Message';
import { Connection } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    private readonly connection: Connection,
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  insertData(message: string, email: string): void {
    const query = `insert into message (message, email) values ('${message}', '${email}')`
    console.log(query);
    this.connection.query(query);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async findOne(id: number): Promise<Message> {
    return await this.messageRepository.findOne({ where: {idMessage:id}});
  }

  async create(message: Partial<Message>): Promise<Message> {
    return await this.messageRepository.save(message);
  }

  async update(id: number, message: Partial<Message>): Promise<Message> {
    await this.messageRepository.update(id, message);
    return await this.messageRepository.findOne({ where: {idMessage:id}});
  }

  async remove(id: number): Promise<void> {
    await this.messageRepository.delete(id);
  }
}
