import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule { }
