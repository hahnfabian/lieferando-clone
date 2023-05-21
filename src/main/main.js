import { useState } from "react";
import './main.css'
import pizza from './pizza.jpg';
import restaurants from './data.json'


const restaurantNumber = 0;

export default function Main() {
    return(
        <>
            {mainPicture()}
            {Description()}
            {buffer()}
            {Dishes()}
        </>
    );
}

//Returns the big picture at the top of the page. 
function mainPicture() {
    return(
        <div className='main-image'>
            <img src={pizza} alt='pizza'></img>
        </div>
    );
}

//Adds a buffer betwcen the Restaurant description and the dishes.
function buffer() {
    return(
        <div style={{width: '100%', height: '5px', backgroundColor:'rgba(231, 231, 231, 0.5)'}}></div>
    )
}

//The description of the restaurant.
function Description() {
    return(
        
        <div className="description-container">
            <div className="description-wrapper">
                <div className="description-name">
                    {restaurants[restaurantNumber].name}
                </div>
                <div className="description-rating">
                    {restaurants[restaurantNumber].rating} out of 5 Stars
                </div>
                <div className="description-description">
                    {restaurants[restaurantNumber].description}
                </div>
            </div>
        </div>
        
    )
}


//Returns the information on the restaurant.
function Dishes() {
    const maxNumDishes = restaurants[restaurantNumber].dishes.length; 

    //State for the number of shown dishes.
    const [gerichteNummer, setGerichteNummer] = useState(3);
    const addNum = () => {
        setGerichteNummer(prevNum => prevNum + dishesAdder(prevNum,maxNumDishes));
      };

    const [checkout, setCheckOut] = useState([]);
    const addToCheckOut = (addedDish) => {
        setCheckOut(prevCheckOut => [...prevCheckOut, addedDish])
    };

    //Maps the dishes to their ???, sliced based on the State above.
    const result = restaurants[restaurantNumber].dishes.slice(0, gerichteNummer).map((dish) => {
        let testvar = dish.name;
        return(
            <div className="dish-wrapper">
                <div className="dish">
                    <div className="dish-name">
                        <div>{dish.name}</div><div className="dish-plus" onClick={() => addToCheckOut(testvar)}>+</div>
                    </div>
                    <div className="dish-description">
                        {dish.description}
                    </div>
                    <div className="dish-price">
                        {dish.price/100}€
                    </div>
                </div>
            </div>   
        );
    })

    //Adds a button that shows up to 3 new dishes, but only if there are more dishes.
    if (gerichteNummer < maxNumDishes) {
        result.push(
            <>
                <button type="button" onClick={addNum}>
                    Show More
                </button>
                
                
                <div>{checkout}</div>
            </>
        );
    }

    //Returns all dishes and maybe the button (if it´s been pushed).
    return(   
        <div className='dishes-container'>
            <div style={{marginBottom: '5px',textAlign: 'left', width: '60%', fontSize:"1.8rem"}}>
                Beliebt
            </div>
            {result} 
        </div>
    );
    
    //Checks how many hidden dishes are left and returns 0 to 3.
    function dishesAdder(prevNumber, length) {
        if (length - prevNumber >= 3) {
            return(3);
        }
        else if (length - prevNumber >= 0) {
            return(length - prevNumber);
        }
        else {
            return (0);
        }
    }
}

