# Random Magic Items
#### Video Demo:  <URL HERE>
#### Description:
I created this website as a means for dungeon masters and players of the table top roleplaying game (ttrpg) Dungeons and Dragons to easily find magic items for their games, or to be able to quickly reference magic items. The main feature of this website is the Random Magic Item button. Click it and the name, rarity and description of a random item will be displayed. Currently there are over 1000 items that are pulled from which I got by downloading the json file from [Open5e](https://open5e.com/)'s github. So a big thanks to them for providing that information. I also plan to add more magic items in the future and possibly create a form for user's to submit magic items that they would like to see on the website.

If a user would like to narrow down the pool of magic items, there is a dropdown menu below the large button that allows them to choose a rarity. Next to each rarity, the menu also displays the number of items in each category. In the future I may also add more ways for users to filter the items, like allowing them to set the type of item (weapon, armor, ring, etc...).

If the user is not wanting so much randomness they can instead click on the final option on the main page - See all Magic Items. This will take them to the magic items list, which displays the name and description of all the magic items that are being used for this website. I also implemented a filter/search feature on this page, so a user can simply type what they are looking for in that box and the list will autocomplete to display anything that matches what the user types in realtime.

# Files
#### index.html:
This is the "home" page that users are taken to upon arriving at the website. It contains the basic template that I used for all of my html pages, including things like meta tags and linking to the stylesheet and javascript. And then the html for the button, dropdown menu, and links for the magic items list as well as the info page in the upper right.

Clicking the main button will display a randomly selected magical item from the json file depending on which rarity is selected in the dropdown menu. The "see all magic items" button will take you to another page where can do just that and also search through the entirety of the list. There's also a small info link in the upper right that will take you to a page that gives more info on what this website is as well as credits where I got the json. I plan to add more to this page in the future, like a feedback option and a form that will allow users to submit their own magic items should they wish.

#### search.html:
This page contains the html for the entire list of magic items as well as the search bar that allows the user to look for specific items. I opted to write my javascript on this page rather than a seperate file because it was a very small amount that was needed so I didn't think it necesarry to create another file for it.

#### info.html
This page contains information about why I made the website, where I got the information for the website from and anything else I may want to display in the future. This is the page where I also plan to add a form that would allow users to provide feedback and/or submit magic items. I'd also like to put some means of contact here.

#### styles.css
Style sheet for all the html pages. More on this in the design section below.

#### script.js
Here is there all the javascript is for the index page. More on this in the design section.

#### magicitems.json
This file contains all the magical items used for the website as well as additional information such as the rarity, description and type of item.

# Design
#### Why HTML, CSS, JS:
I opted for this design choice because I found that this combination for creating websites is the most fun for me. As a result I've decided I'd like to really try to go deeper into javascript and become much better at it in the hopes of bettering my chances for a career in this field.

#### Seperate files:
If there was only a little bit of css or javascript being used then I may have kept it all on one page but I felt that it would be cleaner to have them in separate pages with the amount of each that there is.

#### CSS:
Most of this was done from knowledge I gained taking the freecodecamp html and css course (and of course CS50 helped too). I certainly didn't master css but I think I gained a pretty decent understanding thanks to my learning, so that allowed me to pretty quickly and easily put some basic css in here that may have taken me a bit longer to figure out otherwise.

The only things I cannot take credit for are the rainbow gradient which I found on stack overflow and the main button styling which I found on this [website](copy-paste-css.com).

I chose to go with a dark theme as I feel that is currently what is "in style" and I also just like it because it's easier on the eyes.

#### Javascript:
My oh my did I spend a lot of time in this file. Just figuring out how to fetch data from a json file was quite time consuming but eventually I figured it out! Fortunately the way I learned how to do it is asynchronous which, if I'm not mistaken, is why the page doesn't have to reload every time that main button is pressed! At first I actually tried to do this all through an api but there wasn't actually an endpoint in the api that would pull a random item so I had to set up a way to do that manually. However, once I did that it had to pull the entire list in order to sort through and filter for the different rarities, so when I tried to add that feature it was a huge bottleneck. Fortunately a friend of mine suggested I just grab the data and download it straight into my project which is how we ended up with the current result. 

I think eventually it would be good for me to learn how to create my own api so that I can create a way to utilize that rather than how I'm doing it currently. As I understand it, if that json file gets too big it could be problematic down the road so if I want to add more items than that's probably something I'll have to figure out.

There's a lot of if else statements in my code. I suppose I could have used switch statements but I don't feel comfortable enough with those yet. I'm sure there's other ways my code could be more efficient/cleaner. I'm sure I'll find new ways to do things in the future. For now, I'm pretty happy with this result. I really appreciate CS50 as well as FreeCodeCamp for putting out their material online for free! It's organizations like you that make coding possible for so many and that is absolutely fantastic. 