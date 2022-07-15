import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VectorApiService {
  private url: string;

  constructor(private httpClient: HttpClient) {}

  setUrl(url: string) {
    this.url = url.endsWith('/') ? url : url + '/';
  }

  public async getStatus() {
    return firstValueFrom(
      this.httpClient.get(this.url + 'vector', {
        responseType: 'text',
      })
    );
  }
}
