function calculateMark(mark1,mark2,mark3){
    return Math.round((Number(mark1) +Number(mark2) + Number(mark3) )/3)
}

function compareMark(mark1,mark2){
    if(mark2 < mark1)
    {
        return 0
    }else{
        return 1
    }
}

function checkInput(minmark, markChems, marksPhys, markMath, plusArea, plusPerson){
    if(minmark <= 0  || minmark > 5){
        alert('Điểm chuẩn không hợp lệ')
        return
    }

    if(markChems < 0 || markChems > 10){
        alert('Điểm không hợp lệ')
        return
    }
    if(markMath < 0 || markMath > 10){
        alert('Điểm không hợp lệ')
        return
    }

    if(marksPhys < 0 || marksPhys > 10){
        alert('Điểm không hợp lệ')
        return
    }

    if(plusArea < 0 || plusArea > 1){
        alert('Vui lòng nhập dữ liệu hợp lệ')
        return
    }

    if(plusPerson < 0 || plusPerson > 1){
        alert('Vui lòng nhập dữ liệu hợp lệ')
        return
    }
}

var btn = document.querySelector('#calculate')
btn.onclick = function(){

    var minMark = document.getElementById('mark').value*1
    var markMath = document.getElementById('markMath').value*1
    var markPhys = document.getElementById('markPhys').value*1
    var markChems = document.getElementById('markChem').value*1
    var areaPlus = document.getElementById('plusPoint').value*1
    var personPlus = document.getElementById('plusPoint2').value*1

    checkInput(minMark,markChems,markPhys,markMath,areaPlus,personPlus)

    var markResult = calculateMark(markMath,markPhys,markChems) + areaPlus +personPlus
    var result = document.getElementById('result')
    
    compareMark(markResult) ? result.innerHTML = `Điểm của thí sinh là ${markResult} - Thí sinh đã trúng tuyển` : result.innerHTML = `Điểm của thí sinh là ${markResult} - Thí sinh đã trượt`
}