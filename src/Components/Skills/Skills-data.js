import Html from "../../images/skills/html5.png";
import Css from "../../images/skills/css.png";
import JavaScript from "../../images/skills/js.png";
import Python from "../../images/skills/python.png";
import React from "../../images/skills/react.png";
import Nodejs from "../../images/skills/node.png";
import Express from "../../images/skills/express.png";
import Django from "../../images/skills/dj.png";
import Flask from "../../images/skills/flask.png";
import jQuery from "../../images/skills/jquery.png";
import Bootstrap from "../../images/skills/bootstrap.png";
import Materialize from "../../images/skills/materialize.png";
import VsCode from "../../images/skills/vscode.png";
import Git from "../../images/skills/git.png";
import Mongo from "../../images/skills/mongo.png";
import Heroku from "../../images/skills/heroku.png";
import Trello from "../../images/skills/trello.png";
import Photoshop from "../../images/skills/photoshop.png";
import Fireworks from "../../images/skills/fireworks.png";
import Figma from "../../images/skills/figma.png";
import Spanish from "../../images/skills/ES.png";
import English from "../../images/skills/EN.png";

export default function SkillsData() {
  return [
    { id: 1, type: "front", name: "HTML", img: Html },
    { id: 2, type: "front", name: "CSS", img: Css },
    { id: 3, type: "front", name: "JavaScript", img: JavaScript },
    { id: 4, type: "back", name: "Python", img: Python },
    { id: 5, type: "back", name: "Django", img: Django },
    { id: 6, type: "back", name: "Flask", img: Flask },
    { id: 7, type: "front", name: "React", img: React },
    { id: 8, type: "back", name: "Nodejs", img: Nodejs },
    { id: 9, type: "back", name: "Express", img: Express },
    { id: 10, type: "front", name: "jQuery", img: jQuery },
    { id: 11, type: "front", name: "Bootstrap", img: Bootstrap },
    { id: 12, type: "front", name: "Materialize", img: Materialize },
    { id: 14, type: "other", name: "VS Code", img: VsCode },
    { id: 15, type: "other", name: "Git", img: Git },
    { id: 16, type: "other", name: "Heroku", img: Heroku },
    { id: 17, type: "other", name: "Trello", img: Trello },
    { id: 18, type: "other", name: "Photoshop", img: Photoshop },
    { id: 19, type: "other", name: "Fireworks", img: Fireworks },
    { id: 20, type: "other", name: "Figma", img: Figma },
    { id: 21, type: "back", name: "Mongo", img: Mongo },
    { id: 22, type: "lan", name: "Spanish", img: Spanish },
    { id: 23, type: "lan", name: "English", img: English },
  ];
}
