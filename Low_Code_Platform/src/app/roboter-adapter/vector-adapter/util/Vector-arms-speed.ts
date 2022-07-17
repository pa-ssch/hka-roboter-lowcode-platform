export abstract class VectorArmsSpeed {
  abstract toString(): string;
  abstract getSpeedLevel(): number;
}

export class VectorArmsSpeedSlow extends VectorArmsSpeed {
  getSpeedLevel(): number {
    return this.speedLevel;
  }

  public speedLevel: number = 1;

  toString(): string {
    return 'langsam';
  }
}

export class VectorArmsSpeedModerate extends VectorArmsSpeed {
  getSpeedLevel(): number {
    return this.speedLevel;
  }

  public speedLevel: number = 5;

  toString(): string {
    return 'moderat';
  }
}

export class VectorArmsSpeedFast extends VectorArmsSpeed {
  getSpeedLevel(): number {
    return this.speedLevel;
  }

  public speedLevel: number = 10;

  toString(): string {
    return 'schnell';
  }
}
