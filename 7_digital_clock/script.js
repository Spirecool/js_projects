// On sélectionne les éléments
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// Création d'une horloge qui exécute une fonction toutes les 1000 millisecondes (1 seconde).
const clock = setInterval(
    function time() {
        // Création d'un objet Date
        const dateNow = new Date(); 
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();

        // console.log(hr, min, sec) // Affiche l'heure, toutes les secondes

        // onvertion des valeurs des variables hr, min et sec en string (toString) et les formate en ajoutant des zéros à gauche (padStart) si nécessaire pour obtenir une longueur de 2 caractères.
        hr = hr.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");

        // Mettre dans le format 19:21:28
        const timeString = `${hr}:${min}:${sec}`;
        //console.log(timeString) // Affiche 19:21:28
        // On affiche les valeurs dans les 3 div
        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
    }, 1000
)