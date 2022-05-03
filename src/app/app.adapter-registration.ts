import { IRobotAdapter } from './roboter-adapter/adapter-definition/adapter-definition.module';
import { VectorAdapterModule } from './roboter-adapter/vector-adapter/vector-adapter.module';
import { VirtualDemoAdapterModule } from './roboter-adapter/virtual-demo-adapter/virtual-demo-adapter.module';

export class AdapterRegistration {
  private static registeredAdapter: IRobotAdapter[] = [];

  public static register(adapter: IRobotAdapter) {
    this.registeredAdapter.push(adapter);
  }
  public static getRegisteredAdapter(): IRobotAdapter[] {
    return this.registeredAdapter;
  }

  public static getAdapterByIdentifier(identifier: string): IRobotAdapter {
    return this.registeredAdapter.find(
      (adapter) => adapter.identifier === identifier
    );
  }
}

AdapterRegistration.register(VectorAdapterModule.getAdapter());
AdapterRegistration.register(VirtualDemoAdapterModule.getAdapter());
