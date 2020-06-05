import Monkees from "../../images/portfolio/monkees.png";
import HolidaysYa from "../../images/portfolio/holidaysYa.png";
import Cookbook from "../../images/portfolio/cookbook.png";
import TreeBooks from "../../images/portfolio/treebooks.png";
import Kodflix from "../../images/portfolio/kodflix.png";
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
      id: 1,
      title: "Kodflix",
      description:"This is the final milestone project for the Fullstack Web Development course with Code Institute and was created using the Django framework.(newline)For this website I've created a fictitious charity called TreeBooks whose aim is to raise money to plant trees by renting second-hand books.",
      technologies: [Html, Css, JavaScript, React, Nodejs, Express],
      url: "https://kodflix-ess.herokuapp.com/",
      github: "https://github.com/elenasacristan/kodflix",
      img: Kodflix,
    },
    {
      id: 2,
      title: "TreeBooks",
      description:"This is the final milestone project for the Fullstack Web Development course with Code Institute and was created using the Django framework. For this website I've created a fictitious charity called TreeBooks whose aim is to raise money to plant trees by renting second-hand books.",
      technologies: [Python, Django],
      url: "https://treebooksproject.herokuapp.com/",
      github: "https://github.com/elenasacristan/treebooks",
      img: TreeBooks,
    },
    {
      id: 3,
      title: "Time2Eat",
      description:"Time2Eat was my third milestone project for the Fullstack Web Development course with Code Institute. This app was created using the Flask framework. This app allows its users to save their recipes online and edit them anytime they need to. This app also allows the users to share their recipes with other users, vote for the recipes that they like and receive votes from other users. The app also gives the users the option to search for recipes based on different filters and there is also a section in the website where the users can see some statistics about the recipes and check the ranking of the top rated recipe authors.",
      technologies: [Python, Flask, Materialize, Mongo],
      url: "http://time2eat-cookbook.herokuapp.com/",
      github: "https://github.com/elenasacristan/CookBook",
      img: Cookbook,
    },
    {
      id: 4,
      title: "HolidaysYa",
      description:"HolidaysYa was my second milestone project for the Fullstack Web Development course with Code Institute. The dashboards in this website have been created using DC.js and Crossfilter.js. This is a website that would be used for people who are not sure where to go on holidays but they have a limited budget or they are looking for specific weather (i.e. temperature and precipitation). In the intro screen they will select the month when they are planning to travel and then they can decide if they want to search based on budget or weather.",
      technologies: [Html, Css, JavaScript, Bootstrap],
      url: "https://elenasacristan.github.io/HolidaysYa/",
      github: "https://github.com/elenasacristan/HolidaysYa",
      img: HolidaysYa,
    },

    {
      id: 5,
      title: "The Monkees",
      description:"This was my first milestone project for the Fullstack Web Development course with Code Institute.  This is a fictitious website for the Monkees band. This is a website that would be used mainly by current and prospective fans of the Monkees in order to keep up to date with the latest news, know more about the band and listen to the Monkees songs. It would also be used by the band to sell tickets for future concerts, showcase the new albums and be contacted by event organisers to play in events.",
      technologies: [Html, Css, Bootstrap],
      url: "https://elenasacristan.github.io/the-monkees-website/",
      github: "https://github.com/elenasacristan/the-monkees-website",
      img: Monkees,
    },
 
  ];
}
