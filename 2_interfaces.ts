interface Rect {
    readonly id: string
    color?: string // '?' means 'not necessary parameter'
    size: {
        width: number
        height: number
    }
}

const rectImpl1: Rect = {
    id: '1213',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}


const rectImpl2: Rect = {
    id: '1232',
    size: {
        width: 8,
        height: 18
    }
}

rectImpl2.color = 'yellow'
// rectImpl2.id = 'qwee' // ERROR 'id' is 'readonly'

const rect3 = {} as Rect // Приведение типа
const rect4 = <Rect>{} // Приведение типа, старый синтаксис


//----------------------------------------------------------------------------------------------------------------------
// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number // Method
    calc: () => string // Method
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 16,
        height: 1
    },

    getArea(): number {
        return this.size.width * this.size.height;
    },

    calc(): string {
        return "";
    },

}


//----------------------------------------------------------------------------------------------------------------------

interface IClock { // 'I' часто добавляют к названию интерфейса для обозначения, что это интерфейс
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

//----------------------------------------------------------------------------------------------------------------------

interface Styles {
    // border: string // ERROR Object literal may only specify known properties, and 'marginTop' does not exist in type 'Styles'.
    [key: string]: string // Конструкция 'key: string' относится к 'border', 'marginTop' и 'borderRadius'
    // Конструкция ']: string ' относится к ''1px solid black'', ''2px'', ''5px''
}

const css: Styles = { // Объект (а не класс!), реализующий интерфейс,
    // должен содержать _все_ и при этом _только те_ методы и поля, которые заданы в интерфейсе
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}


