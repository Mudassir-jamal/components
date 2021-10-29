// import Card from './Card';
import "./CssFiles/Card.css"
import {useState} from "react"
import {FiHeart} from "react-icons/fi"
import Filter from "./Filter";
import MaterialUi from "./MaterialUi";
import QuizApp from "./QuizApp";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import About from './CssFiles/component/About.js';

function App() {
 const [Data,setData] = useState([
       {
         mark:"FEATURED",
         img:"https://images.olx.com.pk/thumbnails/197337570-400x300.webp",
         icon:<FiHeart />,
         price:"RS 200000",
         text:"Toyota carolla 2018 model",
         location:"Karachi,landhi",
         time:"3 Days Ago",
       },
       {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/195914943-240x180.webp",
        icon:<FiHeart />,
        price:"RS 600000",
        text:"Urgent Sale",
        location:"Faislabad",
        time:"6 Days Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197491423-400x300.webp",
        icon:<FiHeart />,
        price:"RS 1000",
        text:"Sherazi Piegon",
        location:"karachi",
        time:"1 week ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/189069530-400x300.webp",
        icon:<FiHeart />,
        price:"RS 19,000",
        text:"we are selling Cameras",
        location:"Karachi,pakistan",
        time:"2 Days ag0",
      },
      {
         mark:"FEATURED",
         img:"https://images.olx.com.pk/thumbnails/197337570-400x300.webp",
         icon:<FiHeart />,
         price:"RS 200000",
         text:"Toyota carolla 2018 model",
         location:"Karachi,landhi",
         time:"3 Days Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/189069530-400x300.webp",
        icon:<FiHeart />,
        price:"RS 19,000",
        text:"we are selling Cameras",
        location:"Karachi,pakistan",
        time:"2 Days ag0",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },
      {
        mark:"FEATURED",
        img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
        icon:<FiHeart />,
        price:"RS 60000",
        text:"KM's driver",
        location:"Lahore",
        time:"1 Day Ago",
      },

  ])



  return (
    <div className="App">
      <header className="App-header">
    
        {/* <h1 style={{textAlign:"center"}}>OLX CArd</h1>       */}
        <div id="Card">
            {/* {
              Data.map((val,ind) => {
                return <Card
                           key={ind}
                           mark={val.mark}
                           icon={val.icon}
                           img={val.img}
                           price={val.price}
                           text={val.text}
                           location={val.location}
                           time={val.time}

                
                />
              })
            } */}

        </div>

      </header>

      {/* <Filter 
           
          //  key={ind}
          //  mark={val.mark}
          //  icon={val.icon}
          //  img={val.img}
          //  price={val.price}
          //  text={val.text}
          //  location={val.location}
          //  time={val.time}

      /> */}

      
      {/* <MaterialUi /> */}
      <QuizApp />
    </div>
  );
}

export default App;
