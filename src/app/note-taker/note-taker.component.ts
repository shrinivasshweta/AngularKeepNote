import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { HttpClient } from 'selenium-webdriver/http';
import { NotesServiceService} from '../notes-service.service'
@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  public note: Note=new Note();

  constructor(private notesService: NotesServiceService) {
    this.note = new Note();
  }
  ngOnInit(){}

  addNote(note) {
   this.note.id=note.id;
   this.note.text=note.text;
   this.note.title=note.title;
   this.postNote(this.note);
   console.log(this.note);

  }
  postNote(note){
   this.notesService.addNote(this.note).subscribe(data => console.log(data)); 
  }

}
