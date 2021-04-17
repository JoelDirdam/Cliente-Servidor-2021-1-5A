import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements OnInit {

  constructor() { 

    
    this.obtenerObservable().pipe(
      retry(3)
    ).subscribe(
      valor => console.log('Suscripción:',valor),
      error => console.warn('Ocurrió un error'),
      () => console.info('Terminó la suscripción')
      
    )

  }

  ngOnInit(): void {
  }

  obtenerObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {

        //console.log('tick');
        i++;
        observer.next(i);

        if(i == 10){
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          //console.log('Error en subs 2');
          i = 0;
          observer.error();          
        }

      }, 1000);

    });

    return obs$;

  }

}
