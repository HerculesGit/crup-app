import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateResult, DeleteResult } from 'typeorm'

import { Contact } from '../contact.entity';

/// Essa classe encapsula as operações CRUD do nosso aplicativo

@Injectable()
export class ContactsService {
    constructor(
        // Após a injessão do nosso InjectRepository com o Repository<Contact> passando a classe
        // temos o 'contactRepository' que fornece nossos métodos de CRUD 
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }

    // C- CREATE. Usando programação assincrona
    // Promise<Contact> seria a mesma coisa que Future<Contact> na linguagem Dart
    async create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    // R- READ
    async findAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    // U - UPDATE. Ele tá passando o contato com o ID
    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    // D - DELETE
    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }




}
