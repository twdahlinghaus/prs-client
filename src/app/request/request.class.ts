import { DatePipe } from "@angular/common";

export class Request {
    id: number = 0;
    description: string = '';
    justification: string = '';
    rejectionReason: string = '';
    deliveryMode: string = '';
    status: string = '';
    total: number = 0;
    dateNeeded: string = '';
    submittedDate: string = '';
}