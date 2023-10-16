function calculateChanel(chanel, money){
    return chanel*money
}

function calculateConnection(connection){
    if(connection <= 10){
        return 75 * connection
    }else{
        return 75*10 + (connection -10)*5
    }
}

function calculateBill(bill, basic, chanel){
    return bill + basic + chanel
}

function getTypeOfBill(type, numberOfChanel, numberOfConnection){

    switch(type){
        case "citizens":
            return calculateBill(4.5,20.5, calculateChanel(7.5,numberOfChanel))
        
        case "corporate":
            return calculateBill(15, calculateConnection(numberOfConnection), calculateChanel(50, numberOfChanel))
    }
}

document.querySelector('.active').style.display = "none"

document.getElementById('type').onchange = function(){
    var selected = document.getElementById('type').value
    var disable = document.querySelector('.active')

    if(selected == "corporate"){
        disable.style.display = "block"
    }else{
        disable.style.display = "none"
    }
}

document.getElementById('calculate').onclick = function(){
    var code = document.getElementById('code').value
    var connection = document.getElementById('connection').value*1
    var chanel = document.getElementById('chanel').value*1
    var type = document.getElementById('type')
    var type_value = type.options[type.selectedIndex].value

    
    var billMoney = getTypeOfBill(type_value,chanel,connection)
    document.getElementById('result').innerHTML = `Thông tin Hóa đơn: </br> ${code} </br> ${type_value} </br> ${billMoney} $`

}