
document.addEventListener('DOMContentLoaded', function() {

    const magicItems = "https://www.dnd5eapi.co/api/magic-items"

// function to be ran on button click
    // grab the json data from the above link
    async function getMagicItems() {
        const response = await fetch(magicItems);
        const data = await response.json();

        // console.log(data);
        
        // create an array and fill it with the items from the json data so that we can use math.random
        var items = [];
        // var actualItems = [];

        for (var i in data.results) {
            items.push([i, data.results[i]]);
        }

        // for (var i in items) {
        //     var itemUrl = items[i][1].url;
        //     var actualItemUrl = "https://www.dnd5eapi.co" + itemUrl;

        //     async function getActualItem() {
        //         var response = await fetch(actualItemUrl);
        //         var actualItem = await response.json();
        //         actualItems.push(i, actualItem.results[i]);
        //     }
        // }

        console.log(items[5]);

        // get a random index number from the array
        const randomNumber = Math.floor(Math.random() * items.length);

        // find that item and get it's url
        var randomItem = items[randomNumber];
        var magicItemUrl = randomItem[1].url;

        // console.log(items);

        // use that magic item url to get our random item from the api
        var finalItemUrl = "https://www.dnd5eapi.co" + magicItemUrl;

        async function getFinalItem() {
            var response = await fetch(finalItemUrl);
            var finalItem = await response.json();

            // console.log(finalItem);
            
            // grab the name and description and send it to our html page
            const { name, desc } = finalItem;

            document.getElementById("name").textContent = name
            document.getElementById("desc").textContent = desc
        }

        getFinalItem();
        // getActualItem();
        // console.log(actualItems);
        
    }
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        getMagicItems();
    })

});