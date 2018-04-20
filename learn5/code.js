function    displayResult()       //Громоздкая функция
    {
        var  length = document.getElementById('length').value;
        var  width = document.getElementById('width').value;
        var  height = document.getElementById('height').value;

        document.getElementById('result').innerHTML = 'Площадь равна: ' + calculateSize(length, width, height) + ' м<sup>3</sup>' ;    //аргументы lenght, width, height
    }

function calculateSize(length, width, height) //Правильная функция и параметры lenght, width, height
    {
        return length * width * height;
    }    