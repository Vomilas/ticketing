import { PaymentCreatedEvent, Publisher, Subjects } from "@safdev/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
