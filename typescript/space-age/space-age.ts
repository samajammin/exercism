export default class SpaceAge {
  static readonly EARTH_YEAR = 31557600;
  static readonly MERCURY_YEAR = SpaceAge.EARTH_YEAR * 0.2408467;
  static readonly VENUS_YEAR = SpaceAge.EARTH_YEAR * 0.61519726;
  static readonly MARS_YEAR = SpaceAge.EARTH_YEAR * 1.8808158;
  static readonly JUPITER_YEAR = SpaceAge.EARTH_YEAR * 11.862615;
  static readonly SATURN_YEAR = SpaceAge.EARTH_YEAR * 29.447498;
  static readonly URANUS_YEAR = SpaceAge.EARTH_YEAR * 84.016846;
  static readonly NEPTUNE_YEAR = SpaceAge.EARTH_YEAR * 164.79132;
  readonly seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  public parsePlanetYears(planetYear: number): number {
    return parseFloat((this.seconds / planetYear).toFixed(2));
  }

  public onEarth(): number {
    return this.parsePlanetYears(SpaceAge.EARTH_YEAR);
  }

  public onMercury(): number {
    return this.parsePlanetYears(SpaceAge.MERCURY_YEAR);
  }

  public onVenus(): number {
    return this.parsePlanetYears(SpaceAge.VENUS_YEAR);
  }

  public onMars(): number {
    return this.parsePlanetYears(SpaceAge.MARS_YEAR);
  }

  public onJupiter(): number {
    return this.parsePlanetYears(SpaceAge.JUPITER_YEAR);
  }

  public onSaturn(): number {
    return this.parsePlanetYears(SpaceAge.SATURN_YEAR);
  }

  public onUranus(): number {
    return this.parsePlanetYears(SpaceAge.URANUS_YEAR);
  }

  public onNeptune(): number {
    return this.parsePlanetYears(SpaceAge.NEPTUNE_YEAR);
  }
}
