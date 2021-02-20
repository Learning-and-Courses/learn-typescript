// Guards - вспомогательные конструкции для работы с типами

// typeof
function strip(x: string | number) {
    if ( typeof x ==='number') { // x ins 'number'
        return x.toFixed(2);
    }

    return x.trim(); // x is 'string'
}

// instanceof
class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'message header'
    message = 'error message'
}

function handle(res: MyResponse | MyError) {

    if ( res instanceof MyResponse ) {
        return {
            info: res.header + res.result,
        };
    } else {
        return {
            info: res.header + res.message,
        };
    }
}

//----------------------------------------------------------------------------------------------------------------------
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //...
}

setAlertType('success');
setAlertType('warning');

// setAlertType('default') // ERROR Argument of type '"default"' is not assignable to parameter of type 'AlertType'.