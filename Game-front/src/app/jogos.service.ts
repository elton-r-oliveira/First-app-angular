import { Injectable } from '@angular/core';
import { Jogo } from './jogo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class JogosService {
    url = 'https://localhost:44319/api';
    urlGet = 'https://localhost:44319/api/buscar-todos';
    urlGetId = 'https://localhost:44319/api/buscar-por-id';
    urlUpdate = 'https://localhost:44319/api/atualizar';
    urlPost = 'https://localhost:44319/api/adicionar';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': 'true',
            // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            // 'Access-Control-Allow-Headers':
            // 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        }),
    };

    constructor(private http: HttpClient) {}

    // public async getAll(): Promise<Jogo[]> {
    //     const data = this.http.get<any>(`${this.url}/buscar-todos`, this.httpOptions).toPromise();
    //     return data;
    // }
    PegarTodos(): Observable<Jogo[]> {
        return this.http.get<Jogo[]>(this.urlGet);
    }
    PegarPeloId(jogoId: number): Observable<Jogo> {
        const apiUrl = `${this.urlGet}/${jogoId}`;
        return this.http.get<Jogo>(apiUrl);
    }
    // public async getById(idJogo: number): Promise<Jogo> {
    //     const data = this.http.get<any>(`${this.urlGet}/${idJogo}`, this.httpOptions).toPromise();
    //     return data;
    // }
    SalvarJogo(jogo: Jogo): Observable<any> {
        return this.http.post<Jogo>(this.urlPost, jogo, this.httpOptions);
    }
    AtualizarJogo(jogo: Jogo): Observable<any> {
        return this.http.put<Jogo>(this.urlUpdate, jogo, this.httpOptions);
    }
    ExcluirJogo(jogoId: number): Observable<any> {
        const apiUrl = `${this.urlGetId}/${jogoId}`;
        return this.http.delete<number>(apiUrl, this.httpOptions);
    }
}
