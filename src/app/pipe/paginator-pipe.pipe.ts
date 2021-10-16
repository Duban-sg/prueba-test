import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginatorPipe'
})
export class PaginatorPipePipe implements PipeTransform {

  transform(Students: any[], paginationIndex:number,paginationSize:number): any {
    let start = (paginationIndex*paginationSize);
    let finished = start+paginationSize;
    if(paginationIndex==0 || paginationIndex===undefined)return Students.filter((p,index)=>index<paginationSize);
    return Students.filter((p,index)=>index>=start && index<finished);
  }

}
