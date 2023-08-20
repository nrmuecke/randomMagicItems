
document.addEventListener('DOMContentLoaded', function() {
    
    const magicItemsData = "test.json"
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
            const randomNumber = Math.floor(Math.random() * magicItems.length + 1);

            var randomItem = magicItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("desc").textContent = desc
                if (document.getElementById("rarity").textContent === "COMMON") {
                    document.getElementById("name").style.color = "brown";
                } else if (document.getElementById("rarity").textContent === "UNCOMMON") {
                    document.getElementById("name").style.color = "orange";
                } else if (document.getElementById("rarity").textContent === "RARE") {
                    document.getElementById("name").style.color = "yellow";
                } else if (document.getElementById("rarity").textContent === "VERY RARE") {
                    document.getElementById("name").style.color = "green";
                } else if (document.getElementById("rarity").textContent === "LEGENDARY") {
                    document.getElementById("name").style.color = "blue";
                } else if (document.getElementById("rarity").textContent === "ARTIFACT") {
                    document.getElementById("name").style.color = "purple";
                } else {
                    document.getElementById("name").style.color = "white";
                }
        } else if (dropdownValue === "common") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "common") {
                    commonItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * commonItems.length + 1);

            var randomItem = commonItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "brown";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "uncommon") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "uncommon") {
                    uncommonItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * uncommonItems.length + 1);

            var randomItem = uncommonItems[randomNumber];


                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "orange";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "rare") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "rare") {
                    rareItems.push(magicItems[i]);
                }
            } 
            const randomNumber = Math.floor(Math.random() * rareItems.length + 1);

            var randomItem = rareItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "yellow";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "veryRare") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "very rare") {
                    veryRareItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * veryRareItems.length + 1);

            var randomItem = veryRareItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "green";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "legendary") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "legendary") {
                    legendaryItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * legendaryItems.length + 1);

            var randomItem = legendaryItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "blue";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "artifact") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "artifact") {
                    artifacts.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * artifacts.length + 1);

            var randomItem = artifacts[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "purple";
                document.getElementById("desc").textContent = desc
        } else if (dropdownValue === "varies") {
            for (var i = 0; i < magicItems.length; i++) {
                if (magicItems[i].rarity === "varies") {
                    otherItems.push(magicItems[i]);
                }
            }
            const randomNumber = Math.floor(Math.random() * otherItems.length + 1);

            var randomItem = otherItems[randomNumber];

                var { name, desc, rarity } = randomItem;

                document.getElementById("name").textContent = name
                document.getElementById("rarity").textContent = rarity.toUpperCase();
                document.getElementById("name").style.color = "white";
                document.getElementById("desc").textContent = desc
        }
    } 

    async function getMagicItemsLength() {
        const response = await fetch(magicItemsData);
        const magicItems = await response.json();

        for (var i = 0; i < magicItems.length; i++) {
            if (magicItems[i].rarity === "common") {
                commonItems.push(magicItems[i]);
            } else if (magicItems[i].rarity === "uncommon") {
                uncommonItems.push(magicItems[i]);
            } else if (magicItems[i].rarity === "rare") {
                rareItems.push(magicItems[i]);
            } else if (magicItems[i].rarity === "very rare") {
                veryRareItems.push(magicItems[i]);
            } else if (magicItems[i].rarity === "legendary") {
                legendaryItems.push(magicItems[i]);
            } else if (magicItems[i].rarity === "artifact") {
                artifacts.push(magicItems[i]);
            } else if (magicItems[i].rarity === "varies") {
                otherItems.push(magicItems[i]);
            }
        }

        document.getElementById("all").textContent = "All (" + magicItems.length + ")";
        document.getElementById("common").textContent = "Common (" + commonItems.length + ")";
        document.getElementById("uncommon").textContent = "Uncommon (" + uncommonItems.length + ")";
        document.getElementById("rare").textContent = "Rare (" + rareItems.length + ")";
        document.getElementById("veryRare").textContent = "Very Rare (" + veryRareItems.length + ")";
        document.getElementById("legendary").textContent = "Legendary (" + legendaryItems.length + ")";
        document.getElementById("artifact").textContent = "Artifact (" + artifacts.length + ")";
        document.getElementById("varies").textContent = "Varies (" + otherItems.length + ")";
    }

    
    getMagicItemsLength();
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        getMagicItems();
    })  
});