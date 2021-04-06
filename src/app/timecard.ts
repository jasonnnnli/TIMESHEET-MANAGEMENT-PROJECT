export class Timecard {
    constructor(id:number, date:string, doctor:string) {
        this.id = id;
        this.date = date;
        this.doctor = doctor;
    }
    id:number;
    date:string;
    doctor:string;
}
