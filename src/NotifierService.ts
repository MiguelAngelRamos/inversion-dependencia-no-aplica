import { EmailNotifier } from "./EmailNotifier";
import { WhatsAppNotifier } from "./WhatsAppNotifier";

export class NotifierService {

  private emailNotifier: EmailNotifier;
  private whatsAppNotifier: WhatsAppNotifier;

  public constructor() {
    this.emailNotifier = new EmailNotifier();
    this.whatsAppNotifier = new WhatsAppNotifier();
  }

  public notifyEmail(message: string): void {
    this.emailNotifier.sendEmail(message);
  }

  public notifyWhatsApp(message: string): void {
    this.whatsAppNotifier.sendWhatsApp(message);
  }

}