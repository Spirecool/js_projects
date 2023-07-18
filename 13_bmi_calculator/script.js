// 1 - Get input value


function calculate() {

    // 2 - Calculate BMI
    var bmi; // on créé la vraiblae BMI 
    var result = document.getElementById('result'); // on affiche le résultat du BMI dans le p qui a l'id 'result'

    var weight = parseInt(document.getElementById('weight').value);
    // console.log(weight) // affiche la valeur du poids mise
    document.getElementById('weight-value').textContent = weight + " kg"; // fait fonctionner les chiffres avec le curseur

    var height = parseInt(document.getElementById('height').value);
    document.getElementById("height-value").textContent = height + ' cm';

    bmi = (weight / Math.pow(( height / 100), 2)).toFixed(1); // formule de calcul du BMI 
    result.textContent = "Votre IMC : " + bmi; // on affiche le BMI 

    // 3 - Catégorie assignée suivant le poids

    if( bmi < 18.5 ) {
        category = "Maigreur";
        result.style.color = "#ffc44d" // change the font color based on category 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Corpulence normale";
        result.style.color = "#0be881"
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Surpoids";
        result.style.color = "#ff884d"
    } else if(bmi >= 30 && bmi <= 34.9) {
        category = "Obésité modérée";
        result.style.color = "#ff884d"
    }
    else if(bmi >= 35 && bmi <= 39.9) {
        category = "Obésité sévère";
        result.style.color = "#ff884d"
    }
    else {
        category = "Obésité morbide";
        result.style.color = "#4f094f"
    }
    document.getElementById('category').textContent = category;
}





