import { NotifierService } from './NotifierService';

const service = new NotifierService();

service.notifyEmail("Hola a todos desde el curso de TDD - Email");
service.notifyWhatsApp("Hola a todos desde el curso de TDD - WSP");