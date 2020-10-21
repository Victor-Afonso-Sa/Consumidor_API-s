import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'front';
  registros;
  uriString = 'http://localhost:8081/lib/generic';
  ngOnInit(): void {
    this.http.get(this.uriString).subscribe((data) => (this.registros = data));
  }
  edit(obj) {
    console.log('EDIÇÂO');
    this.http
      .put(this.uriString, obj, { params: { ID: obj['ID'] } })
      .subscribe();
  }
  new(obj) {
    console.log('NOVO');
    let array = [];
    array.push(obj);
    this.http.post(this.uriString, array).subscribe();
  }
  excluir(obj) {
    console.log('DELETE');
    this.http.delete(this.uriString,{ params: { ID: obj['ID'] } }).subscribe();
  }
}
