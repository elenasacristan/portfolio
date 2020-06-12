import Monkees from "../../images/portfolio/monkees.png";
import HolidaysYa from "../../images/portfolio/holidaysYa.png";
import Cookbook from "../../images/portfolio/cookbook.png";
import TreeBooks from "../../images/portfolio/treebooks.png";
import Kodflix from "../../images/portfolio/kodflix.png";
import DrinkMeApp from "../../images/portfolio/drinkmeapp.png";
import Html from "../../images/skills/html5.png";
import Css from "../../images/skills/css.png";
import JavaScript from "../../images/skills/js.png";
import Python from "../../images/skills/python.png";
import Django from "../../images/skills/dj.png";
import Flask from "../../images/skills/flask.png";
import Bootstrap from "../../images/skills/bootstrap.png";
import Materialize from "../../images/skills/materialize.png";
import Mongo from "../../images/skills/mongo.png";
import React from "../../images/skills/react-dark.png";
import Nodejs from "../../images/skills/node.png";
import Express from "../../images/skills/express.png";

export default function ProjectData() {
  return [
    {
      id: 0,
      title: "DrinkMeApp",
      description:"This application was created with team of developers as part of the Kodiri Bootcamp. The aim of the website is to provide the users with recipes for cocktails and other type of drinks. The website is created with React and we used the 'https://www.thecocktaildb.com/api.php' API to get the recipes.",
      technologies: [Html, Css, JavaScript, React],
      url: "https://kodflix-ess.herokuapp.com/",
      github: "https://github.com/elenasacristan/drinkmeapp",
      img: DrinkMeApp,
    },
    {
      id: 1,
      title: "Kodflix",
      description:"This was the first website created with React, Node and Express as part of the Kodiri Bootcamp and is an imitation of the Netflix Website.",
      technologies: [Html, Css, JavaScript, React, Nodejs, Express],
      url: "https://kodflix-ess.herokuapp.com/",
      github: "https://github.com/elenasacristan/kodflix",
      img: Kodflix,
    },
    {
      id: 2,
      title: "TreeBooks",
      description:"This is the final milestone project for the Fullstack Web Development course with Code Institute and was created using the Django framework.(newline)For this website I've created a fictitious charity called TreeBooks whose aim is to raise money to plant trees by renting second-hand books.",
      technologies: [Python, Django],
      url: "https://treebooksproject.herokuapp.com/",
      github: "https://github.com/elenasacristan/treebooks",
      img: TreeBooks,
    },
    {
      id: 3,
      title: "Time2Eat",
      description:"Time2Eat was my third milestone project for the Fullstack Web Development course with Code Institute.(newline)This app was created using the Flask framework.(newline)This app allows its users to save their recipes online and edit them anytime they need to.(newline)This app also allows the users to share their recipes with other users, vote for the recipes that they like and receive votes from other users.(newline)The app also gives the users the option to search for recipes based on different filters and there is also a section in the website where the users can see some statistics about the recipes and check the ranking of the top rated recipe authors.",
      technologies: [Python, Flask, Materialize, Mongo],
      url: "http://time2eat-cookbook.herokuapp.com/",
      github: "https://github.com/elenasacristan/CookBook",
      img: Cookbook,
    },
    {
      id: 4,
      title: "HolidaysYa",
      description:"HolidaysYa was my second milestone project for the Fullstack Web Development course with Code Institute.(newline)The dashboards in this website have been created using DC.js and Crossfilter.js.(newline)This is a website that would be used for people who are not sure where to go on holidays but they have a limited budget or they are looking for specific weather (i.e. temperature and precipitation).(newline)In the intro screen they will select the month when they are planning to travel and then they can decide if they want to search based on budget or weather.",
      technologies: [Html, Css, JavaScript, Bootstrap],
      url: "https://elenasacristan.github.io/HolidaysYa/",
      github: "https://github.com/elenasacristan/HolidaysYa",
      img: HolidaysYa,
    },

    {
      id: 5,
      title: "The Monkees",
      description:"This was my first milestone project for the Fullstack Web Development course with Code Institute.(newline)This is a fictitious website for the Monkees band. This is a website that would be used mainly by current and prospective fans of the Monkees in order to keep up to date with the latest news, know more about the band and listen to the Monkees songs.(newline)It would also be used by the band to sell tickets for future concerts, showcase the new albums and be contacted by event organisers to play in events.",
      technologies: [Html, Css, Bootstrap],
      url: "https://elenasacristan.github.io/the-monkees-website/",
      github: "https://github.com/elenasacristan/the-monkees-website",
      img: Monkees,
    },
 
  ];
}
