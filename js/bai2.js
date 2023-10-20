var FIRST_KW = 500
var NEXT_KW = 650
var NEXT_KW_100 = 850
var NEXT_KW_150 = 1100
var UPPER = 1300

function firstKwCalculate(inputKw){
    return FIRST_KW*inputKw
}

function next50kwCalculator(inputKw){
    return FIRST_KW*50 + NEXT_KW*(inputKw-50)
}

function next100KwCalculator(inputKw){
    return FIRST_KW*50 + NEXT_KW*50 + NEXT_KW_100*(inputKw-100)
}

function next150KwCalculator(inputKw){
    return FIRST_KW*50 + NEXT_KW*50 + NEXT_KW_100*100 + NEXT_KW_150*(inputKw-200)
}

function upperCalculator(inputKw){
    return FIRST_KW*50 + NEXT_KW*50 + NEXT_KW_100*100 + NEXT_KW_150*150 + UPPER*(inputKw-350)
}

function calculateKwMoney(inputKw){
    if(inputKw <= 50){
        return firstKwCalculate(inputKw)
    }else if(inputKw > 50 && inputKw <= 100){
        return next50kwCalculator(inputKw)
    }else if(inputKw > 100 && inputKw <= 200){
        return next100KwCalculator(inputKw)
    }else if(inputKw > 200 && inputKw <= 350){
        return next150KwCalculator(inputKw)
    }else{
        return upperCalculator(inputKw)
    }
}

function checkInput(nameInput, kwInput){
    if(nameInput == null){
        alert('Vui lòng nhập tên chủ hộ')
        return
    }
    if(kwInput <= 0){
        alert('Vui lòng nhập số kw hợp lệ')
        return
    }
}

document.querySelector('#calculate').onclick = function(){
    var name = document.getElementById('name').value
    var kw = document.getElementById('kw').value*1

    checkInput(name,kw)

    var money = calculateKwMoney(kw)
    document.getElementById('result').innerHTML = `Tiền điện hộ ${name} là : ${money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
}
