import Card from "./Card"
import {useState} from "react"
import {FiHeart} from "react-icons/fi"
import "./CssFiles/Filter.css"


const Filter = () => {
    const [newDAta,setNewData] = useState([ ])
    const [input,setInput] = useState("")
    const [filterVal,setFilterVal] = useState([])
    const [heading,setHeading] = useState("")
    const [fdata,setFData] = useState([
        {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/197493529-400x300.webp",
            icon:<FiHeart />,
            price:"RS 60000",
            text:"KM's driver",
            location:"Lahore",
            time:"1 Day Ago",
            category:"Vehicles"
          },
          {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/197942811-400x300.webp",
            icon:<FiHeart />,
            price:"RS 50000",
            text:"Toyota Aqua 2017",
            location:"Lahore",
            time:"1 Day Ago",
            category:"Vehicles"
          },
          {

            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/194502387-240x180.webp",
            icon:<FiHeart />,
            price:"RS 100000",
            text:"Suzuki Swift 2019",
            location:"Lahore",
            time:"1 Day Ago",
            category:"Vehicles"
          },
          {

            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/187242197-240x180.webp",
            icon:<FiHeart />,
            price:"RS 26,000",
            text:"Nikon 3200D",
            location:"Lahore",
            time:"1 Day Ago",
            category:"Electronics"
            
          },
          {

            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/197950177-400x300.webp",
            icon:<FiHeart />,
            price:"RS 55,000",
            text:"Dgi Drone Camera",
            location:"Lahore",
            time:"1 Day Ago",
            category:"Electronics"
            
          },
          {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/189069530-400x300.webp",
            icon:<FiHeart />,
            price:"RS 19,000",
            text:"we are selling Cameras",
            location:"Karachi,pakistan",
            time:"2 Days ag0",
            category:"Electronics"
          },
          {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/150031547-400x300.webp",
            icon:<FiHeart />,
            price:"RS 20,000",
            text:"Elegant Bikes",
            location:"Karachi,pakistan",
            time:"2 Days ag0",
            category:"Bikes"
          },
          {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/186918319-400x300.webp",
            icon:<FiHeart />,
            price:"RS 190,000",
            text:"250cc",
            location:"Karachi,pakistan",
            time:"2 Days ag0",
            category:"Bikes"
          },
          {
            mark:"FEATURED",
            img:"https://images.olx.com.pk/thumbnails/198078765-400x300.webp",
            icon:<FiHeart />,
            price:"RS 33,000",
            text:"Jolta Electric bikes",
            location:"Karachi,pakistan",
            time:"2 Days ag0",
            category:"Bikes"
          },
    
 ])


              
              


    const FilterData = (e) => {
        const a = e.target.value
        setHeading(a)
                                           // const allCatValues = [...new Set(fdata.map(ele=> {  return ele.category }))]
          if(a === "All Items"  ){
              setNewData(fdata)

          }

         else{
           const getNew = fdata.filter(newVAL => {
            return newVAL.category === a})

              setNewData(getNew)

              
         }  

            
    }




    const InputValue = (e) => {
        const inVal = e.target.value
        setInput(inVal)
        console.log(input)

        const getNew = newDAta.filter(value => {
            return value.text.toLowerCase().includes(inVal.toLowerCase())
        })

           console.log(getNew)

          

           if(inVal == ""){
            setFilterVal([])
           }else{
               
            setFilterVal(getNew)
           }

    }

    console.log(filterVal)

// console.log(filterVal)


  

    return (
        <div>

             <div className="opt_inp"> 
            <select id="cate" onChange={(e) => FilterData(e)} >
            <option value="All Items" selected>Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Vehicles"> Vehicles</option>
            <option value="Bikes" >Bikes</option>
            </select>


            <input 
             placeholder="Search Item"
             onChange={(e) => InputValue(e)}
             value={input}
              />

            <h1>  Category {heading}</h1>

            </div>
             
            <div id="Card">
                
                {/* Condition filtering new selectDAta  */}

            {heading === "" ? 
             fdata.map((val,ind) => {
                    return <Card
                    key={ind}
                    mark={val.mark}
                    icon={val.icon}
                    img={val.img}
                    price={val.price}
                    text={val.text}
                    location={val.location}
                    time={val.time}  />
         
                })

                : 
                 
                // Second condition filter data by search input

                     filterVal.length == 0 ?  
                     
                     newDAta.map((val,ind) => {
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
                     
                     :
                     
                     
                     filterVal.map((val,ind) => {
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
            
                

            }


    

            
            
            </div>
        </div>
    )
}

export default Filter
