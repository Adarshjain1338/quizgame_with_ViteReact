import category from "../../../Model/Category";
import reactImg from '../../../Assests/Image/react.png';
import javaImg from '../../../Assests/Image/java.png';
import angularImg from '../../../Assests/Image/angular.png';
import communicationImg from '../../../Assests/Image/communication.jpg';
import generalKnownledgeImg from '../../../Assests/Image/gk.jfif';
import synoverge from '../../../Assests/Image/synoverge.png';

export const categories: category[] =[
    {
        Id: 1,
        Technical: true,
        name: "React",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: reactImg
    },
    {
        Id: 2,
        Technical: true,
        name: "Java",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: javaImg
    },
    {
        Id: 3,
        Technical: true,
        name: "Angular",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: angularImg
    },
    {
        Id: 4,
        Technical: false,
        name: "Communication",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: communicationImg
    },
    {
        Id: 5,
        Technical: false,
        name: "General Knowledge",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: generalKnownledgeImg
    },
    {
        Id: 6,
        Technical: false,
        name: "Synoverge Quiz",
        description: "lorem ipsum dolor sit amet, consectetur adip inc lorem ipsum dolor sit amet, consectetur adip inc",
        image: synoverge
    }
]