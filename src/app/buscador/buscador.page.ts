import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  users: any = [];
  text: string;
  datas: any = [];
  mostrar: boolean;
  API = "https://rickandmortyapi.com/api/character/"
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.mostrar = true;
    this.getDatas().subscribe(data => {
      this.datas = data;
    })
  }

  getDatas(){
    return this.http.get(this.API).pipe(map((res:any) => {
      return res.results;
    }))
  }


  getCharacter() {
    return this.http.get(this.API + "?name=" + this.text).pipe(map((res:any) =>{
      return res.results;
    }))
  }


  search(event){
    this.text = event.target.value;
    if(this.text && this.text.trim() != ''){
      this.mostrar = false
      return this.getCharacter().subscribe(res =>{
        this.users = res
      })
    }else{
      this.mostrar = true
    }
  }
}
