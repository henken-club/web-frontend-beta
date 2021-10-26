import shuffle from "knuth-shuffle-seeded";
import factory from "seed-random";

export class Random {
  private readonly generator;

  constructor(seed: any) {
    this.generator = factory(JSON.stringify(seed));
  }

  public integer(min: number, max: number) {
    return Math.floor(min + (this.generateRandom() * (max - min)));
  }

  public shuffle<T>(array: T[]): T[] {
    return shuffle([...array]);
  }

  public pick<T>(array: T[], limit = 1): T[] {
    return shuffle([...array]).slice(0, limit);
  }

  private generateRandom(): number {
    return this.generator();
  }
}
