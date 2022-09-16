const burger = 
    [
        "pain", 
        "cheddar", 
        "steak", 
        "ketchup",
        "cornichon", 
        "salade", 
        "tomate", 
        "oignon"
    ];

    // * Burger Végétarien
    const vegetarian = burger.filter(x => x != "steak");

    // * Burger Vegan
    const vegan = burger.filter(x => x != "cheddar" && x != "steak");
    
    // * Burger Carnivore
    const carnivore = burger.slice(0,4);
    
    // * Burger Personnaliser
    const perso = [burger[0],burger[2],burger[2],burger[7],burger[1],burger[1], "bacon", "sauce barbecue"];
    console.log(perso);

    const perso2 = [burger[0], "raclette", "sauce béarnaise", burger[5], "jambon fumé", burger[3]]

    // * System de commande
    

    let cmd = "Choisisssez un burger : \n";
        cmd += "1. Vegetarien\n";
        cmd += " 2. Vegan\n";
        cmd += " 3. Carnivore\n";
        cmd += " 4. Bacon\n";
        cmd += " 5. Montagnard\n";
        
    do
    {
        let value = window.prompt(cmd);
        switch(value)
        {
            case "vegetarien" : 
                window.prompt("Vous avez choisis le burger vegetarien : " + vegetarian)
                break;
            case "vegan" :
                window.prompt("Vous avez choisis le burger vegan : " + vegan)
                break;
            case "carnivore" :
                window.prompt("Vous avez choisis le burger carnivore : " + carnivore)
                break;
            case "bacon" :
                window.prompt("Vous avez choisis le burger bacon : " + perso)
                break;
            case "montagnard" :
                window.prompt("Vous avez choisis le burger montagnard : " + perso2)
                break;
                    
        }

    }while(true);