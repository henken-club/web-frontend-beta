export class Random {
  constructor(seed: any) {
  }

  public integer(min: number, max: number) {
    return Math.floor(min + (this.generateRandom() * (max - min)));
  }

  public shuffle<T>(array: T[]): T[] {
    return array;
  }

  private generateRandom(): number {
    return Math.random();
  }
}
