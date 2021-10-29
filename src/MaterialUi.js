import {useState} from 'react'

const MaterialUi = () => {
    const [ bulb,setBulb] = useState(true)

    // const abc = () => {

    // }
    return (
        <div>
            <h1>hellow material Ui</h1>

            {bulb ? 
            <img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png" height="400" />
             
            :

            <img src="https://w7.pngwing.com/pngs/859/425/png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png" height="400" />
              

            }

            {bulb == true ?

        
        <button onClick={() => setBulb(false)} >Bulb On </button>

        :

        <button onClick={() => setBulb(true)}>Bulb off</button>
      

            }


            
        </div>
    )
}

export default MaterialUi
