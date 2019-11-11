import { Controller, Get } from '@nestjs/common';

// class
import { Contact } from '../contact.entity';
// service
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {

    // adicionando o contactsService para aí assim usar o CRUD
    constructor(private contactsService: ContactsService) { }


    // Todas as solicitações http://localhost:3000/contacts vão para esse método
    @Get()
    index(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }

}
