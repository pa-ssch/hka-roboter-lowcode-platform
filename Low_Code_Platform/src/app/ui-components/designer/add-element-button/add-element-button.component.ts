import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'add-element-button',
  templateUrl: './add-element-button.component.html',
  styleUrls: ['./add-element-button.component.sass'],
  host: {
    '[id]': 'id',
  },
})
export class AddElementButtonComponent implements OnInit {
  @Output() addElementRequest = new EventEmitter<IRobotFunctionality>();

  @Input()
  allowedElements: RobotFunctionalityType[];
  // TODO (low prio): allowed elements should be determined by this component, based on the control before (and maybe after) the button

  public id: string;

  public robotFunctionalities: Map<
    RobotFunctionalityType,
    [IRobotFunctionality]
  > = new Map();

  constructor(private _cookieService: CookieService) {}

  public ngOnInit() {
    let robotAdapter = AdapterRegistration.getAdapterByIdentifier(
      this._cookieService.get(CookieManager.RobotTypeCookieName)
    );

    robotAdapter.functionality.forEach((item) => {
      const key = item.type;
      if (this.allowedElements.indexOf(key) > -1) {
        const collection = this.robotFunctionalities.get(key);
        if (!collection) {
          this.robotFunctionalities.set(key, [item]);
        } else {
          collection.push(item);
        }
      }
    });
  }

  addElement(robotFunctionality: IRobotFunctionality) {
    this.addElementRequest.emit(robotFunctionality.copy());
  }

  getIconFor(type: RobotFunctionalityType): string {
    switch (type) {
      case RobotFunctionalityType.whileLoop:
        return 'restart_alt';
      case RobotFunctionalityType.trigger:
        return 'arrow_downward';
      case RobotFunctionalityType.doSomething:
        return 'smart_toy';
      case RobotFunctionalityType.getSomething:
        return 'sensors';
      case RobotFunctionalityType.ifElse:
        return 'account_tree';
      case RobotFunctionalityType.logic:
        return 'functions';
      default:
        return 'sentiment_very_dissatisfied';
    }
  }
}
