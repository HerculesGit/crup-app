import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';

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

    // com esse decoration podemos aceitar método POST pelo endpoint /contacts/create, mandando como BODY os dados do contato
    // O BODY extrai e injeta o corpo da solicitação POST os dados necessário para nosso método POST
    @Post('create') // contacts/create
    async create(@Body() contactData: Contact): Promise<any> {
        return this.contactsService.create(contactData);
    }

    // Com isso no endpoint :id/update fazemos a atualização
    // Algo muito interessante é que nosso id é dinamico, por isso usamos Number(id)
    // Com o decorator Param('id') extraimos e injetamos o parâmetro para o update
    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id); // pegando o id e transformando em Number
        console.log(`Update # ${contactData.id}`);
        return this.contactsService.update(contactData);
    }
}
