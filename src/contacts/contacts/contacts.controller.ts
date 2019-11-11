import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {

    // Todas as solicitações Get vao para cá
    // Seria como um método getAll
    @Get()
    index(): string {
        return "This actions will return contacts";
    }

}
