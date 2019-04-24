type Roster = Map<string, string[]>;

export default class GradeSchool {
  private _roster: Roster = new Map();

  public studentRoster(): Roster {
    let clone = new Map();
    this._roster.forEach((value, key) => {
      clone.set(key, [...value]);
    });
    return clone;
  }

  public studentsInGrade(grade: number): string[] {
    const students = this._roster.get(grade.toString()) || [];
    return students.slice();
  }

  public addStudent(name: string, grade: number): void {
    const gradeString = grade.toString();
    const gradeRoster = this._roster.get(gradeString) || [];
    gradeRoster.push(name);
    gradeRoster.sort();
    this._roster.set(gradeString, gradeRoster);
  }
}
