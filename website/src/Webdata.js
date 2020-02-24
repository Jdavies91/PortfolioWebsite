
import GamePlay from './imgs/game_board.JPG'
import best_b4_white_logo from './imgs/best_b4_white_logo.png'
import WebsiteLogo from "./imgs/WebsiteLogo.JPG"
const Webdata = [{
        mainHeader: "Memory Game",
        img: {src:GamePlay, alt:"Game Play"},
        Des: "In the Memory Game, the user needs to memorize a group of tiles on a grid quickly. That means remembering their location, and maybe even the shapes they create.  The game \"challenges a part of your short-term memory called spatial recall your ability to track location and position within an environment.\"  The game is of type Dynamic game difficulty balancing (adapts with the user skill and gets harder or easier with respect to the user ability). If wrong tiles are pressed the next matrix gets generated with a lower number of tiles, or smaller size (a 5X5 matrix with 6 tiles, will turn to a 5X5 matrix with 5 tiles or 5X4 matrix with 6 tiles)",
        gitsrc: "https://github.com/Jdavies91/memory_game",
        technology:["npm","Node.js","Javascript", "Mongoose", "MVC Design Pattern","HTML5","CSS"]
        }    ,{
            mainHeader: "Portfolio Website",
            img: {src:WebsiteLogo, alt:"Website", alt:"Profilo Home Page"},
            Des: "I created this website to highlight the work that I have done.  There are five linked sections: Home, About Me, Resume, Projects, Contact Me.  One of the great side benefits of creating this Portfolio was the opportunity to enhance my React skills.  I have taught my self React, and I found it fun, organized, and easy to use way of creating a front end for web applications. In the Contact Me section, I also used the Nodemailer module to handle your question or comments.  When the user presses send, it sends the message directly to my email so that I can respond as needed.  I am working to make this website mobile-friendly.",
            gitsrc: "https://github.com/Jdavies91/PortfolioWebsite",
            technology:["npm","React","ES6", "MySQL","Nodemailer", "HTTP request", "React-Bootstrap", "Hosted through Heroku"]
        },{
            mainHeader: "BestB4",
            img: {src:best_b4_white_logo, alt:"Food app"},
            Des: "The BestB4 app was a BCIT Project that focused on making a web application to help save the environment.  We focused on food waste.  We created an application to create recipes based on what you had in the fridge before the expiration date.  If you do not like the recipe, you can click next and go to the next recipe.  Once you found a recipe, you could take a picture of what you made and post it on twitter.",
            gitsrc: "https://github.com/Jdavies91/BestB4",
            technology:["HTML","PHP","Javascript","CSS","MySql","Twitter Api","Food Recipe Api"]
            }    
    ]





export default Webdata;