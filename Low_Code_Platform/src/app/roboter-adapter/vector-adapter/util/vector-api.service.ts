import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IRobotFunctionality } from '../../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Injectable({
  providedIn: 'root',
})
export class VectorApiService {
  private url: string;

  constructor(private httpClient: HttpClient) {}

  setUrl(url: string) {
    this.url = url.endsWith('/') ? url : url + '/';
  }

  public async getStatus(): Promise<string> {
    return firstValueFrom(
      this.httpClient.get(this.url + 'vector', {
        responseType: 'text',
      })
    );
  }

  async putWorkflow(workflow: IRobotFunctionality[]) {
    // TODO: send current workflow to vector
    throw new Error('Method not implemented.');
  }

  async execute(): Promise<number> {
    // TODO: trigger execution if already executing return the current step.
    throw new Error('Method not implemented.');
  }
}
