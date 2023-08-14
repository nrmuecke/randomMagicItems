
document.addEventListener('DOMContentLoaded', function() {
    
    const magicItemsData = "magicitems.json"
    var commonItems = [];
    var uncommonItems = [];
    var rareItems = [];
    var veryRareItems = [];
    var legendaryItems = [];
    var artifacts = [];
    var otherItems = [];

    async function getMagicItems() {
        const response = await fetch(magicItemsData);
        const magicItems = await response.json();


        var dropdownValue = document.getElementById("raritySelect").value;

        if (dropdownValue === "") {
            const randomNumber = Math.floor(Math.random() * magicItems.length);

            var randomItem = magicItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "common") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "common") {
                    commonItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * commonItems.length);

            var randomItem = commonItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "uncommon") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "uncommon") {
                    uncommonItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * uncommonItems.length);

            var randomItem = uncommonItems[randomNumber];


                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "rare") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "rare") {
                    rareItems.push(magicItems[i]);
                }
            } 
            const randomNumber = Math.floor(Math.random() * rareItems.length);

            var randomItem = rareItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "veryRare") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "very rare") {
                    veryRareItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * veryRareItems.length);

            var randomItem = veryRareItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "legendary") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "legendary") {
                    legendaryItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * legendaryItems.length);

            var randomItem = legendaryItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "artifact") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "artifact") {
                    artifacts.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * artifacts.length);

            var randomItem = artifacts[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "other") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "varies") {
                    otherItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * otherItems.length);

            var randomItem = otherItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
        }
    } 

    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        getMagicItems();
    })  
});