import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TriggerFunctionality } from '../../adapter-definition/abstract-classes/robot-functionality/robot-functionality-trigger.abstract';
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

  putWorkflow(workflow: IRobotFunctionality[]) {
    let transferable = workflow.map((e) => new TransferableWorkflowElement(e));
    this.httpClient.put(this.url + 'vector/workflow', transferable).subscribe();
  }

  async execute(): Promise<number> {
    return firstValueFrom(
      this.httpClient.post<number>(this.url + 'vector/workflow', {
        responseType: 'text',
      })
    );
  }
}

class TransferableWorkflowElement {
  readonly identifier: string;
  readonly arguments: any[];
  readonly followingElements: TransferableWorkflowElement[] = [];

  constructor(functionality: IRobotFunctionality) {
    this.identifier = functionality.identifier;
    this.arguments = functionality.actualArgumentValues.map((f) => f.value);
    if (functionality instanceof TriggerFunctionality) {
      this.followingElements = functionality.followingElements.map(
        (f) => new TransferableWorkflowElement(f)
      );
    }
  }
}
