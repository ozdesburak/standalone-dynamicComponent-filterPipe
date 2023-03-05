import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox',
  standalone:true
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData(value:any, index:any){
            if(value.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return data[index];
              }
               
        };
  };
  
  }

