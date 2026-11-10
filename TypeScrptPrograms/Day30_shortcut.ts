class Employee1{  // page classes
    private _salary: number = 30000;
    private _empname: string = 'abc';

    public get empname(): string {
        return this._empname;
    }
    public set empname(value: string) {
        this._empname = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }




}
