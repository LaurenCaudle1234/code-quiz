var ul = document.querySelector("#ul");
for (var i = 0; i < highscores.length; i++) {
    var li = document.createElement('li');
    li.textContent = highscores[i];
    ul.appendChild(li);
}


