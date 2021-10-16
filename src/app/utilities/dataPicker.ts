import {DateTime} from "luxon";


export const  calculateYearsOld=(_dateOfBirth:string):number=>{
  var arrayDate = _dateOfBirth.split("-");
  var today = new Date();
  var dateOfBirth = new Date(parseInt( arrayDate[2]),parseInt(arrayDate[1]),parseInt(arrayDate[0]));
  var edad = today.getFullYear() - dateOfBirth.getFullYear();
  console.log(_dateOfBirth)

  return (edad)?edad:0;

}


export const dateFormat=(_dateTime:string)=>{
  let date = DateTime.fromISO(_dateTime);
  return date.toFormat('dd-L-yyyy');
}
