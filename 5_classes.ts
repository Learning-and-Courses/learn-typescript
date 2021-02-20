class Typescript {
    version: string

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel; // We can REwrite 'readonly' field 'model' only inside constructor
    }
}

class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) { // is alternative to 'constructor(theModel: string) {' and 'this.model = theModel;'
    }
}

class Animal {
    protected voice: string = ''
    public color: string = 'black' // default is 'public'

    constructor() {
        this.go();
    }

    private go() {
        console.log('going...')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice; // field 'voice' is 'protected' in 'Cat'
        // this.go() // ERROR Property 'go' is private and only accessible within class 'Animal'
    }
}

const cat = new Cat();
// cat.voice // ERROR Property 'voice' is protected and only accessible within class 'Animal' and its subclasses.


//----------------------------------------------------------------------------------------------------------------------
// Abstract классы и методы
abstract class Component {
    abstract render(): void;
    abstract info(): string
}

class AppComponent extends Component {
    info(): string {
        return "This is info.";
    }

    render(): void {
        console.log('Component on render')
    }

}