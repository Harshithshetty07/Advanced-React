import RestaurantCard from "./RestauantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [filterResto, setFilterResto] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            const json = await data.json();
            console.log(json);
            
            // Look for the restaurants array in the response
            // It's usually in cards[1] or cards[2] with gridElements.infoWithStyle.restaurants
            const restaurantData = json?.data?.cards?.find(card => 
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            // Fallback: try different possible locations
            const fallbackData = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                                json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            if (restaurantData) {
                setRestaurants(restaurantData);
                setFilterResto(restaurantData);
            } else if (fallbackData) {
                setRestaurants(fallbackData);
                setFilterResto(fallbackData);
            } else {
                console.log("Restaurant data structure not found, using mock data");
                // Keep using mock data if API structure has changed
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Keep using mock data on error
        }
    }

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet Connection</h1>


    if (restaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} />
                <button 
                onClick={() => {
                    const filterResto = 
                    restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilterResto(filterResto)
                }}>Search</button>
                </div>


                <button className="filter-btn" 
                onClick={() => {
                    // Make sure restaurants is an array before filtering
                    if (Array.isArray(restaurants)) {
                        const filteredList = restaurants.filter((res) => res.info?.avgRating > 4);
                        setRestaurants(filteredList);
                        console.log(filteredList);
                    }
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
               {Array.isArray(restaurants) && filterResto.map((restaurant) => (
                <Link
                 key={restaurant.info?.id || restaurant.info?.resId } 
                to={"/restaurants/"+ restaurant.info?.id}><RestaurantCard 
                    resData={restaurant}  /> </Link>
               ))}
            </div>
        </div>
    )
}

export default Body;