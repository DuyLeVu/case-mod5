import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(API_URL)
  }

  getById(id: any): Observable<Comment> {
    return this.httpClient.get<Comment>(API_URL + `/${id}`)
  }

  delete(id: any): Observable<Comment> {
    return this.httpClient.delete<Comment>(API_URL + `/${id}`)
  }

  update(id: string, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(API_URL + `/${id}`, comment)
  }

  save(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(API_URL, comment)
  }
}
