import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
  private http;
  public bookList:any =[];
  public selectedBook:any;


  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks() {
    this.http.get('http://localhost:8080/book/get').subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.bookList = data;
      } else {
        console.error('Expected an array of books, but received:', data);
      }
    });
  }

  deleteBook(){
    let api="http://localhost:8080/book/"+this.selectedBook.id;

    this.http.delete(api,{responseType:'text'}).subscribe((responce:string) => {
      console.log(responce);
      this.loadBooks();
      this.selectedBook=null;
    });
  }

  setSelectedBook(book:any){
    this.selectedBook=book;
    
  }

}
