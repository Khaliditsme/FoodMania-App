
import { useEffect,useState } from "react";
import Resturantcards from "./Resturatcards";

let api_data=[]
const Body  = ()=>{
    const [text,setText]=useState("Enter Dish")
    const [resturant,setResturant] = useState([])
    const [fresturant,setFresturant] = useState([])


    useEffect(()=>{
       getData();
    },[])

    const getData = async ()=>{
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        api_data = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFresturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }  
    
   
    const search = ()=>{
        const slresturant =  resturant?.filter((item)=>{
            return item.info.name.toLowerCase().includes(text.toLowerCase());
        })

        setText(" ")
        setFresturant(slresturant);
    }

    const top_rated = ()=>{
        const filteredresturant = resturant?.filter((item) => {
           return item.info.avgRating >= 4;
        });

        setFresturant(filteredresturant);
    }

    const back_home = ()=>{
        setFresturant(api_data);
    }

    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder={text} className="text-search" onChange={(e)=> setText(e.target.value)}/>
          <button className="btn-search" onClick={search}>Search</button>
          <button className="btn-search" onClick={top_rated}>Top Rated</button>
          <button className="btn-search" onClick={back_home}>Back to Home</button>
        </div>

        <div className="res-container">
            {
                fresturant?.map((item)=>{
                    return (
                      <Resturantcards key={item?.info?.id} {...item?.info} />
                    );
                })
            }
        </div>
      </div>
    );
}

export default Body;

