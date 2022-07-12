function calc(number){
    let firstNumber = number;

    function add(secondNumber){
        firstNumber = firstNumber + secondNumber;
    }

    function sub(secondNumber){
        firstNumber = firstNumber - secondNumber;
    }

    function div(secondNumber){
        firstNumber = firstNumber / secondNumber;
    }

    function mult(secondNumber){
        firstNumber = firstNumber * secondNumber;
    }

    function getResult() {
        console.log(firstNumber);
    }
    
    return {
        add,
        sub,
        div,
        mult,
        getResult
    }
}

const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

first.getResult();