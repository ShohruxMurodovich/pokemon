var elList = document.querySelector(".list");

for ( var pokemon of pokemons ){
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newCase = document.createElement("div")
    var newName = document.createElement("h3");
    var newNum = document.createElement("number");
    var newEgg = document.createElement("strong");
    var newSpawnTime = document.createElement("time")
    var newSubList = document.createElement("ul")

    for(var weakness of pokemon.weaknesses){
        var newSubItem = document.createElement("li")
        newSubItem.textContent = weakness
        newSubItem.setAttribute("class", "sub__item")
        newSubList.appendChild(newSubItem);
    }

    newImg.setAttribute("src", pokemon.img )
    newNum.setAttribute("class", "num")
    newName.setAttribute("class", "title")
    newCase.setAttribute("class", "case")
    newItem.setAttribute("class", "item")
    newSubList.setAttribute("class", "sub__list")
    newSpawnTime.setAttribute("class", "time")

    newNum.textContent = pokemon.num;
    newName.textContent = pokemon.name;
    newEgg.textContent = pokemon.egg;
    newSpawnTime.textContent = pokemon.spawn_time;


    newItem.appendChild(newImg);
    newItem.appendChild(newCase);
    newCase.appendChild(newNum);
    newCase.appendChild(newName);
    newCase.appendChild(newEgg);
    newCase.appendChild(newSpawnTime);
    newCase.appendChild(newSubList);


    elList.appendChild(newItem)
}