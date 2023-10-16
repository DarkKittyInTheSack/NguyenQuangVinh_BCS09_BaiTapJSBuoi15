function calculateIncome(totalIncome, numberOfPeople){
    return totalIncome - 4 - numberOfPeople *1.6
}

function calculatePerTaxRate(income, taxRate){
    switch(taxRate){
        case 5:
            return income * 0.05
        
        case 10:
            return income * 0.1
        
        case 15:
            return income * 0.15
        
        case 20:
            return income * 0.2
        
        case 25:
            return income * 0.25
        
        case 30:
            return income * 0.3
        
        case 35:
            return income * 0.35
    }
}

function calculateTax(income){
    if(income <= 60){
        return calculatePerTaxRate(income, 5)
    }else if (income > 60 && income <= 120){
        return calculatePerTaxRate(income,10)
    }else if(income > 120 && income <= 210){
        return calculatePerTaxRate(income,15)
    }else if(income > 210 && income <= 384){
        return calculatePerTaxRate(income,20)
    }else if(income > 384 && income <= 624){
        return calculatePerTaxRate(income,25)
    }else if(income > 624 && income <= 960){
        return calculatePerTaxRate(income, 30)
    }else{
        return calculatePerTaxRate(income,35)
    }
}

function checkInput(name, income, numberOfPeople){
    if(name == null){
        alert('Vui lòng nhập họ tên người đóng thuế hợp lệ')
        return;
    }

    if(income <= 0){
        alert('Vui lòng nhập số thu nhập cá nhân hợp lệ')
        return;
    }

    if(numberOfPeople < 0){
        alert('Vui lòng nhập số người phụ thuộc hợp lệ')
        return;
    }
}

document.querySelector('#calculate').onclick = function(){

    
    var name = document.getElementById('name').value

    var income = document.getElementById('income').value*1
    var people = document.getElementById('person').value*1

    checkInput(name,income,people)
    var taxMoney = calculateTax(calculateIncome(income,people)) * 1000000
    document.getElementById('result').innerHTML = `Thuế thu nhập của cá nhân ${name} là: ${taxMoney.toLocaleString('it-IT',{
        value: 'currency',
        currency: 'VND'
    })}`
}