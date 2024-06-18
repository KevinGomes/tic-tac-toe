let turn_order = 0;

const placement = (classes) => {
    const square_arr= document.getElementsByClassName(classes);
    const square =  square_arr[0];

    console.log(square)

    if(square.classList.contains("occupied"))
    {
        return;
    }
    else{
        
        if(turn_order === 0){
            turn_order++;
        }
        else
        {
            turn_order--;
        }
        
        populate(square, turn_order);
        square.classList.add("occupied");
    }

};

const populate = (square,turn) => {
    const symbol_element = document.createElement("img");
    symbol_element.className = "symbol-element"
    if(turn)
    {
        symbol_element.src = "img/x.svg";
    }
    else
    {
        symbol_element.src = "img/o.svg";
    }

    square.appendChild(symbol_element);
};

const reset = () => {
    turn_order = 0;
    const game_grid = document.getElementsByClassName("square");

    [...game_grid].forEach((element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.classList.remove("occupied");
    });
}