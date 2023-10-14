
document.addEventListener('DOMContentLoaded', function() {
        
    // Creating variables for the arrays to be used later as well as the json file where we get our data from
    const magicItemsData = "magicitems.json"
    var commonItems = [];
    var uncommonItems = [];
    var rareItems = [];
    var veryRareItems = [];
    var legendaryItems = [];
    var artifacts = [];
    var otherItems = [];

    // This function creates an array from the json file based on the rarity chosen in the dropdown menu on the index page
    // and then spits out a random magical item from that array. This button is called when the button is pressed.       
    async function getMagicItems() {
        const response = await fetch(magicItemsData);
        const magicItems = await response.json();

        var raritySelect = document.getElementById("raritySelect").value;
        var typeSelect = document.getElementById("typeSelect").value;
        // empty array for use whenever a dropdown rarity or type is selected
        var items = [];

        // if no dropdown is selected then pull an item from the entire list
        if (raritySelect === "" && typeSelect === "") {

            // Create a random number based on the length of the array
            const randomNumber = Math.floor(Math.random() * magicItems.length + 1);

            var randomItem = magicItems[randomNumber];

            var { name, desc, rarity, type } = randomItem;

            document.getElementById("name").textContent = name
            document.getElementById("rarity").textContent = rarity.toUpperCase();
            document.getElementById("type").textContent = type.toUpperCase();
            document.getElementById("desc").textContent = desc
        // if a rarity is chosen but no type is chosen
        } else if (raritySelect !== "" && typeSelect === "") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === raritySelect) {
                    items.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * items.length);

            var randomItem = items[randomNumber];
            var { name, desc, rarity, type } = randomItem;

            document.getElementById("name").textContent = name;
            document.getElementById("rarity").textContent = rarity.toUpperCase();
            document.getElementById("type").textContent = type.toUpperCase();
            document.getElementById("desc").textContent = desc;
        // if no rarity is chosen but a type is chosen
        } else if (raritySelect === "" && typeSelect !== "") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].type === typeSelect) {
                    items.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * items.length);

            var randomItem = items[randomNumber];
            var { name, desc, rarity, type } = randomItem;

            document.getElementById("name").textContent = name;
            document.getElementById("rarity").textContent = rarity.toUpperCase();
            document.getElementById("type").textContent = type.toUpperCase();
            document.getElementById("desc").textContent = desc;
        // if a rarity and a type are chosen
        } else {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === raritySelect && magicItems[i].type === typeSelect) {
                    items.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * items.length);

            var randomItem = items[randomNumber];
            var { name, desc, rarity, type } = randomItem;

            document.getElementById("name").textContent = name;
            document.getElementById("rarity").textContent = rarity.toUpperCase();
            document.getElementById("type").textContent = type.toUpperCase();
            document.getElementById("desc").textContent = desc;
        }
        var pulledRarity = document.getElementById("rarity").textContent;
        switch(pulledRarity) {
        case "COMMON" :
            document.getElementById("name").style.color = "brown";
            break;
        case "UNCOMMON" :
            document.getElementById("name").style.color = "orange";
            break;
        case "RARE" :
            document.getElementById("name").style.color = "yellow";
            break;
        case "VERY RARE" :
            document.getElementById("name").style.color = "green";
            break;
        case "LEGENDARY" :
            document.getElementById("name").style.color = "blue";
            break;
        case "ARTIFACT" :
            document.getElementById("name").style.color = "purple";
            break;
        default :
            document.getElementById("name").style.color = "white";
        }
    } 

    // This function gets the length of each magic item array based on rarity and displays that number next to each choice in the dropdown.
    // It is called upon page load.
    // async function getMagicItemsLength() {
    //     const response = await fetch(magicItemsData);
    //     const magicItems = await response.json();

    //     for (var i = 0; i < magicItems.length; i++) {
    //         var itemRarity = magicItems[i].rarity;
    //         switch(itemRarity) {
    //         case "common" :
    //             commonItems.push(magicItems[i]);
    //             break;
    //         case "uncommon" :
    //             uncommonItems.push(magicItems[i]);
    //             break;
    //         case "rare" :
    //             rareItems.push(magicItems[i]);
    //             break;
    //         case "very rare" :
    //             veryRareItems.push(magicItems[i]);
    //             break;
    //         case "legendary" :
    //             legendaryItems.push(magicItems[i]);
    //             break;
    //         case "artifact" :
    //             artifacts.push(magicItems[i]);
    //             break;
    //         default :
    //             otherItems.push(magicItems[i]);
    //         }
    //     }

    //     document.getElementById("all").textContent = "All Rarities";
    //     document.getElementById("common").textContent = "Common (" + commonItems.length + ")";
    //     document.getElementById("uncommon").textContent = "Uncommon (" + uncommonItems.length + ")";
    //     document.getElementById("rare").textContent = "Rare (" + rareItems.length + ")";
    //     document.getElementById("veryRare").textContent = "Very Rare (" + veryRareItems.length + ")";
    //     document.getElementById("legendary").textContent = "Legendary (" + legendaryItems.length + ")";
    //     document.getElementById("artifact").textContent = "Artifact (" + artifacts.length + ")";
    //     document.getElementById("varies").textContent = "Varies (" + otherItems.length + ")";
    // }

    
    // getMagicItemsLength();
    // const button = document.getElementById("button");

    button.addEventListener("click", function() {
        getMagicItems();
    })  
});