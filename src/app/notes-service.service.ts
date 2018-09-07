import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  note:Note=new Note();
  // http:HttpClient;
  _url='http://localhost:8083';

  constructor(private _http: HttpClient) { }


  addNote(note): Observable<Note>{
    this.note=note;
    console.log(note);
    return this._http.post<Note>(`${this._url}/api/v1/note`,note);
  }
}
