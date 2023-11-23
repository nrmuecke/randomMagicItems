
document.addEventListener('DOMContentLoaded', function() {
        
    // Creating variables for the arrays to be used later as well as the json file where we get our data from
    const magicItemsData = "magicitems.json"

    // This function creates an array from the json file based on the rarity chosen in the dropdown menu on the index page
    // and then spits out a random magical item from that array. This button is called when the button is pressed.       
    async function getMagicItems() {
        // Hide searched items in case the search function was used and also show the random item display
        document.getElementById("itemsList").className = "text hideItems";
        document.getElementById("itemDisplay").className = "text showItems";

        const response = await fetch(magicItemsData);
        const magicItems = await response.json();

        // variables for dropdown selections
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
    button.addEventListener("click", function() {
        getMagicItems();
    })  

    // search function
    async function itemsList() {
        const response = await fetch(magicItemsData);
        const magicItems = await response.json();

        var list = document.getElementById("itemsList");
        for (var i = 0; i < magicItems.length; ++i) {
            var li = document.createElement('li');
            var itemNames = magicItems[i].name;
            li.innerText = itemNames + ": " + magicItems[i].desc;
            list.appendChild(li);
        }
        document.getElementById("itemsList").className += " hideItems";
    }
    // Filters out the items based on what is typed in the search bar, it is called when a user begins typing in that bar.
    document.getElementById("input").addEventListener("keyup", search);
    function search() {
        //clear random item display if there happens to be one
        document.getElementById("itemDisplay").className = "text hideItems";

        var input, filter, ul, li, i, txtValue;
        input = document.getElementById("input");
        filter = input.value.toUpperCase();
        ul = document.getElementById("itemsList");
        li = ul.getElementsByTagName("li");
        ul.className = "showItems";

        for (i = 0; i < li.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                document.getElementById("itemsList").className = "text showItems";
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        if (document.getElementById("input").value === "") {
            document.getElementById("itemsList").className = "text hideItems";
        }
    }
    itemsList();
});