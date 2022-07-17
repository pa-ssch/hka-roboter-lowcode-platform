import { PreviewGroupType } from '../../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../../adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotFunctinoalityArgument } from '../../adapter-definition/interfaces/robot-functionality/robot-functionality-argument.interface';
import { IRobotFunctionality } from '../../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';
import { VectorApi } from '../vector-adapter.module';

export class TextPreviewGroup implements IPreviewGroup {
  isExecutionMode: boolean;
  name: string;
  type: PreviewGroupType;
  previewData: any;

  constructor(workflow: IRobotFunctionality[], isExecutionmode: boolean) {
    this.isExecutionMode = isExecutionmode;
    this.name = this.isExecutionMode
      ? 'Ausführungsüberwachung'
      : 'Debugging Workflow';
    this.type = PreviewGroupType.textual;
    this.previewData = new TextPreviewData();

    workflow.forEach((workflowElement) => {
      workflowElement.getFunctionalityList().forEach((functionality) => {
        if (functionality.identifier === 'on-startup') {
          this.previewData.script.push(
            new ScriptElement(0, functionality.parameterizedDisplayName)
          );
        } else {
          let displayName = this.stringFormat(
            functionality.parameterizedDisplayName,
            functionality.actualArgumentValues
          );
          this.previewData.script.push(new ScriptElement(1, displayName));
        }
      });
    });

    // interpret the script and determine the execution-order (importent when there are loops or if-else-statements)
    this.previewData.script.forEach((element: ScriptElement, index: number) => {
      this.previewData.steps.push(index);
    });
  }

  stringFormat(text: string, args: IRobotFunctinoalityArgument[]) {
    for (let i = 0; i < args.length; i++) {
      text = text.replace('{' + i + '}', args[i].value);
    }
    return text;
  }
}

class TextPreviewData {
  script: ScriptElement[] = [];
  steps: number[] = [];

  async GetCurrentStep(): Promise<number> {
    return VectorApi.execute();
  }
}

class ScriptElement {
  constructor(public intention: number, public text: string) {}
}
