export class People {
  name: string;
  patronus: string;
  dateOfBirth:string;
  age:number;
  image:string;
  house:string;

  constructor(_name?:string,_patronus?:string,_age?:number,_image?:string,_dateOfBirth?:string, _house?:string,_hogwartsStudent?:boolean) {
    this.name = _name||"";
    this.patronus = _patronus||"";
    this.age = _age||0;
    this.image = _image||"";
    this.dateOfBirth = _dateOfBirth||"";
    this.house = _house||"";
  }



}
