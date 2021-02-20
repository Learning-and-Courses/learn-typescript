var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel; // We can REwrite 'readonly' field 'model' only inside constructor
    }
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black'; // default is 'public'
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('going...');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice; // field 'voice' is 'protected' in 'Cat'
        // this.go() // ERROR Property 'go' is private and only accessible within class 'Animal'
    };
    return Cat;
}(Animal));
var cat = new Cat();
// cat.voice // ERROR Property 'voice' is protected and only accessible within class 'Animal' and its subclasses.
//----------------------------------------------------------------------------------------------------------------------
// Abstract классы и методы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.info = function () {
        return "This is info.";
    };
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    return AppComponent;
}(Component));
