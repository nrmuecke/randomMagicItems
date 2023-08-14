
document.addEventListener('DOMContentLoaded', function() {

    const magicItems = "https://www.dnd5eapi.co/api/magic-items"
    
    var items = [];
    var urls = [];
    var commonItems = [];
    var uncommonItems = [];
    var rareItems = [];
    var veryRareItems = [];
    var legendaryItems = [];
    var artifacts = [];
    var otherItems = [];

    async function getMagicItems() {
        const response = await fetch(magicItems);
        const data = await response.json();

        for (var i in data.results) {
            urls.push([i, data.results[i]]);
        }

        const randomNumber = Math.floor(Math.random() * urls.length);

        // find that item and get it's url
        var randomItem = urls[randomNumber];
        var magicItemUrl = randomItem[1].url;

        // console.log(items);

        // use that magic item url to get our random item from the api
        var randomItemUrl = "https://www.dnd5eapi.co" + magicItemUrl;

        async function getRandomItem() {
            var random = await fetch(randomItemUrl);
            var randomItem = await random.json();

            // console.log(finalItem);
            
            // grab the name and description and send it to our html page
            const { name, desc } = randomItem;

            document.getElementById("name").textContent = name;
            document.getElementById("desc").textContent = desc;
        }
        getRandomItem();

            for (var i in urls) {
                var itemUrl = "https://www.dnd5eapi.co" + urls[i][1].url;
                var itemResponse = await fetch(itemUrl);
                var itemData = await itemResponse.json();

                items.push(itemData);
                
                if (itemData.rarity.name === "Common") {
                    commonItems.push(itemData);
                } else if (itemData.rarity.name === "Uncommon") {
                    uncommonItems.push(itemData);
                } else if (itemData.rarity.name === "Rare") {
                    rareItems.push(itemData);
                } else if (itemData.rarity.name === "Very Rare") {
                    veryRareItems.push(itemData);
                } else if (itemData.rarity.name === "Legendary") {
                    legendaryItems.push(itemData);
                } else if (itemData.rarity.name === "Artifact") {
                    artifacts.push(itemData);
                } else {
                    otherItems.push(itemData);
                }
            }
    }
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        getMagicItems();
    })  
});