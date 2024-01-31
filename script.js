document.addEventListener("DOMContentLoaded", function () {
  // Creating variables for the arrays to be used later as well as the json file where we get our data from
  const magicItemsData = "magicitems.json";

  // button shake animation
  // var button = document.getElementById("button");

  // function startShake() {
  //   button.classList.add("animate-shake");

  //   setTimeout(function () {
  //     button.classList.remove("animate-shake");
  //   }, 1000);
  // }

  // setTimeout(startShake, 5000);

  // setInterval(startShake, 20000);

  // This function creates an array from the json file based on the rarity chosen in the dropdown menu on the index page
  // and then spits out a random magical item from that array. This function is called when the "random magic item" button is pressed.
  async function getMagicItems() {
    const response = await fetch(magicItemsData);
    const magicItems = await response.json();
    const itemDisplays = document.querySelectorAll(".itemDisplay");
    const multiplierSelect = document.getElementById("multiplier");
    var selectedValue = multiplierSelect.value;
    const multiplier = parseInt(selectedValue, 10);

    // Hide searched items in case the search function was used
    document.getElementById("itemsList").className = "text hideItems";
    // set random item display to no longer be hidden
    var displays = document.getElementsByClassName("itemDisplay");

    for (var i = 0; i < multiplier; i++) {
      displays[i].classList.remove("hideItems");
      if (multiplier < displays.length) {
        for (var j = multiplier; j < displays.length; j++) {
          if (!displays[j].classList.contains("hideItems")) {
            displays[j].classList.add("hideItems");
          }
        }
      }
    }

    // variables for dropdown selections
    var raritySelect = document.getElementById("raritySelect").value;
    var typeSelect = document.getElementById("typeSelect").value;
    // empty array for use whenever a dropdown rarity or type is selected
    var items = [];

    itemDisplays.forEach((itemDisplay) => {
      itemDisplay.querySelector(".name").textContent = "";
      itemDisplay.querySelector(".rarity").textContent = "";
      itemDisplay.querySelector(".type").textContent = "";
      itemDisplay.querySelector(".desc").textContent = "";
    });

    // check the multiplier and display the amount of items chosen
    for (let n = 0; n < multiplier && n < itemDisplays.length; n++) {
      const itemDisplay = itemDisplays[n];
      // if no dropdown is selected then pull an item from the entire list
      if (raritySelect === "" && typeSelect === "") {
        // Create a random number based on the length of the array
        const randomNumber = Math.floor(Math.random() * magicItems.length + 1);

        const randomItem = magicItems[randomNumber];

        var { name, desc, rarity, type } = randomItem;

        itemDisplay.querySelector(".name").textContent = name;
        itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
        itemDisplay.querySelector(".type").textContent = type.toUpperCase();
        itemDisplay.querySelector(".desc").textContent = desc;
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

        itemDisplay.querySelector(".name").textContent = name;
        itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
        itemDisplay.querySelector(".type").textContent = type.toUpperCase();
        itemDisplay.querySelector(".desc").textContent = desc;
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

        itemDisplay.querySelector(".name").textContent = name;
        itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
        itemDisplay.querySelector(".type").textContent = type.toUpperCase();
        itemDisplay.querySelector(".desc").textContent = desc;
        // if both a rarity and a type are chosen
      } else {
        for (var i = 0; i < magicItems.length; i++) {
          if (
            magicItems[i].rarity === raritySelect &&
            magicItems[i].type === typeSelect
          ) {
            items.push(magicItems[i]);
          }
        }
        const randomNumber = Math.floor(Math.random() * items.length);

        var randomItem = items[randomNumber];
        var { name, desc, rarity, type } = randomItem;

        itemDisplay.querySelector(".name").textContent = name;
        itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
        itemDisplay.querySelector(".type").textContent = type.toUpperCase();
        itemDisplay.querySelector(".desc").textContent = desc;
      }

      // set the color of the item name based on rarity
      var pulledRarity = itemDisplay.querySelector(".rarity").textContent;
      switch (pulledRarity) {
        case "COMMON":
          itemDisplay.querySelector(".name").style.color = "brown";
          break;
        case "UNCOMMON":
          itemDisplay.querySelector(".name").style.color = "orange";
          break;
        case "RARE":
          itemDisplay.querySelector(".name").style.color = "yellow";
          break;
        case "VERY RARE":
          itemDisplay.querySelector(".name").style.color = "green";
          break;
        case "LEGENDARY":
          itemDisplay.querySelector(".name").style.color = "blue";
          break;
        case "ARTIFACT":
          itemDisplay.querySelector(".name").style.color = "purple";
          break;
        default:
          itemDisplay.querySelector(".name").style.color = "white";
      }
    }
    // hide or display reroll button for individual items
    itemDisplays.forEach((itemDisplay) => {
      const rerollButton = itemDisplay.querySelector(".reroll");
      if (itemDisplay.querySelector(".name").textContent !== "") {
        rerollButton.classList.remove("hideButton");
      } else {
        rerollButton.classList.add("hideButton");
      }
    });
  }

  // main button function call
  button.addEventListener("click", function () {
    getMagicItems();
  });

  // reroll button
  async function getMagicItem(itemDisplay) {
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

      itemDisplay.querySelector(".name").textContent = name;
      itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
      itemDisplay.querySelector(".type").textContent = type.toUpperCase();
      itemDisplay.querySelector(".desc").textContent = desc;
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

      itemDisplay.querySelector(".name").textContent = name;
      itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
      itemDisplay.querySelector(".type").textContent = type.toUpperCase();
      itemDisplay.querySelector(".desc").textContent = desc;
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

      itemDisplay.querySelector(".name").textContent = name;
      itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
      itemDisplay.querySelector(".type").textContent = type.toUpperCase();
      itemDisplay.querySelector(".desc").textContent = desc;
      // if a rarity and a type are chosen
    } else {
      for (var i = 0; i < magicItems.length; i++) {
        if (
          magicItems[i].rarity === raritySelect &&
          magicItems[i].type === typeSelect
        ) {
          items.push(magicItems[i]);
        }
      }
      const randomNumber = Math.floor(Math.random() * items.length);

      var randomItem = items[randomNumber];
      var { name, desc, rarity, type } = randomItem;

      itemDisplay.querySelector(".name").textContent = name;
      itemDisplay.querySelector(".rarity").textContent = rarity.toUpperCase();
      itemDisplay.querySelector(".type").textContent = type.toUpperCase();
      itemDisplay.querySelector(".desc").textContent = desc;
    }
    var pulledRarity = itemDisplay.querySelector(".rarity").textContent;
    switch (pulledRarity) {
      case "COMMON":
        itemDisplay.querySelector(".name").style.color = "brown";
        break;
      case "UNCOMMON":
        itemDisplay.querySelector(".name").style.color = "orange";
        break;
      case "RARE":
        itemDisplay.querySelector(".name").style.color = "yellow";
        break;
      case "VERY RARE":
        itemDisplay.querySelector(".name").style.color = "green";
        break;
      case "LEGENDARY":
        itemDisplay.querySelector(".name").style.color = "blue";
        break;
      case "ARTIFACT":
        itemDisplay.querySelector(".name").style.color = "purple";
        break;
      default:
        itemDisplay.querySelector(".name").style.color = "white";
    }
  }

  // reroll function call
  document.querySelectorAll(".itemDisplay").forEach(function (itemDisplay) {
    var rerollButton = itemDisplay.querySelector(".reroll");

    rerollButton.addEventListener("click", function () {
      getMagicItem(itemDisplay);
    });
  });

  // search function
  async function itemsList() {
    const response = await fetch(magicItemsData);
    const magicItems = await response.json();

    var list = document.getElementById("itemsList");
    for (var i = 0; i < magicItems.length; ++i) {
      var li = document.createElement("li");
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
    var itemDisplays = document.getElementsByClassName("itemDisplay");

    for (var i = 0; i < itemDisplays.length; i++) {
      itemDisplays[i].classList.add("hideItems");
    }

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
