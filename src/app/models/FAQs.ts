import { Customer } from "./customer";

export class FAQ {
    _id: string;
    questionText: string;
    answerText: string;
    customer: Customer;
    creationDate: Date;
    questionPossition: number;

    constructor(_id: string, questionText: string, answerText: string, customer: Customer, cDate: Date, questionPossition: number){ 
        this._id = _id;
        this.questionText = questionText;
        this.answerText = answerText;
        this.customer = customer;
        this.creationDate = cDate;
        this.questionPossition = questionPossition;
        }
}