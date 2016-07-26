import {OnInit} from '@angular/core';
export abstract class CommonMenuComponent implements OnInit {

    ngOnInit() {
        console.log('I\'m common code');
    }
     abstract methodToImplement(stringArgument: string);
}
