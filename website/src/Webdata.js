// import '../src/imgs/Carousel_Pic/'
import GamePlay from './imgs/Carousel_Pic/GamePlay.JPG'
import BestB4 from './imgs/BestB4.JPG'
import WebsiteLogo from "./imgs/WebsiteLogo.JPG"
const Webdata = [{
        mainHeader: "Memory Game",
        img: {src:GamePlay, alt:"Game Play"},
        Des: "This game had multiple factors to it as it measures difficulty for every sequence you get right. It would either expand the board or add a title to remember. All the square that you would have to remember is in Black. The board would start with 5 x 5 squares and can grow up to 7 x 7 squares. For every square, you guess wrong you will lose a point. If your points go down to zero, it will bring you to the input user name and score page, and you would get 0 points. If you feel like you can't remember the squares and want to keep your current position, you can press terminate. This would bring you to the User and Score input page with your current score.",
        gitsrc: "https://github.com/Jdavies91/memory_game",
        technology:["Npm","Node.js","Vanila Javascript", "Mongoose Database", "MVC Design Pattern","Html5","css"]
        }    ,{
            mainHeader: "Portfolio Website",
            img: {src:WebsiteLogo, alt:"Website", alt:"Profilo Home Page"},
            Des: "I created this website to show all of the work that I have done.  There is an about me, Resume, Contact, and Project page.  One of the main reasons beside having a profile was to test out my ReactJS skills.   I created this react app from scrap to get a little familiar with some of the npm packages needs. Have self-taught my self ReactJS and found it a very fun organized and easy to use way of creating a front end for your web applications.  I also wanted to try out some web API for sending out emails to my self when someone wants to contact me.  With the contact me page, I also wanted to store that information into a database so I could practice my backend skills as well on a simpler database.",
            gitsrc: "https://github.com/Jdavies91/PortfolioWebsite",
            technology:["Npm","ReactJS","ES6", "mySql Database","NodeMailer", "Post And Get Request", "Bootstrap", "Hosted Through EC2 Instance"]
        },{
            mainHeader: "BestB4",
            img: {src:BestB4, alt:"Food app"},
            Des: "The BestB4 app was a BCIT Project that focused on making a web application to help save the environment.  What we focused on was food waste.  We created an application to create recipes based on what you had in the fridge before the expiration date.  If you don’t like the recipe, you can click next and go to the next recipe.  Once you found a recipe, you could take a picture of what you made and post it on twitter.",
            gitsrc: "https://github.com/Jdavies91/BestB4",
            technology:["Html","PHP","Javascript","CSS","MySql","Twitter Api","Food Recipe Api"]
            }    
    ]





export default Webdata;