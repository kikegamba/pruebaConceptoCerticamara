import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class CarService {
  public API = '//prueba-concepto-server.herokuapp.com';
  public CAR_API = this.API + '/cars';
  private cars = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {

    return this.http.get('http://prueba-concepto-server.herokuapp.com/cars').pipe(map((response)=>{response.cars
    });
    
  }
  
  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
