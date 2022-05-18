import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RobotFunctionalityArgument } from 'src/app/roboter-adapter/adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotDataType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality-argument.interface';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-do-something',
  templateUrl: './workflow-element-do-something.component.html',
  styleUrls: ['./workflow-element-do-something.component.sass'],
})
export class WorkflowElementDoSomethingComponent implements OnInit {
  @Input() functionality: IRobotFunctionality;
  @Output() addElementRequest = new EventEmitter<IRobotFunctionality>();

  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;
  robotDataType: typeof RobotDataType = RobotDataType;

  displayPhrases: (string | number)[] = [];

  arguments: IRobotFunctinoalityArgument[];

  ngOnInit() {
    // split the parameterized display name
    this.arguments = this.functionality.requiredArguments();
    const argumentCount = this.arguments.length;
    const parameterizedDisplayName =
      this.functionality.parameterizedDisplayName;
    let previousIndex = 0;
    for (let i = 0; i < argumentCount; i++) {
      let searchedPhrase = `{${i}}`;
      let currentIndex = parameterizedDisplayName.indexOf(searchedPhrase);
      this.displayPhrases.push(
        parameterizedDisplayName.substring(previousIndex, currentIndex)
      );
      this.displayPhrases.push(i);
      previousIndex = currentIndex + searchedPhrase.length;
    }
    this.displayPhrases.push(parameterizedDisplayName.substring(previousIndex));
  }

  addFollowingElement(robotFunctionality: IRobotFunctionality) {
    this.addElementRequest.emit(robotFunctionality);
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  getArgumentAt(value: any): RobotFunctionalityArgument {
    if (this.isNumber(value) && this.arguments.length > value && value >= 0)
      return this.arguments[value] as RobotFunctionalityArgument;
    else return null;
  }
}
