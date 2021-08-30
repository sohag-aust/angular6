import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'custompipe'
})
export class CustomPipe implements PipeTransform {

    transform(value: any, anotherparam?) {
        console.log(`another param: ${anotherparam}`);
        if(value.length>anotherparam) 
            return value.substr(0,anotherparam) + ' ...';
        else
            return value;
    }
}