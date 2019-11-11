import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity'

@Module({
    imports: [
        // Agora, o TypeORM reconhecerá a entidade Contato e soncronizará o banco de dados
        // de acordo, criando uma tabela 'contact'
        TypeOrmModule.forFeature([Contact])
    ],
    providers: [ContactsService],
    controllers: [ContactsController]
})
export class ContactsModule { }
