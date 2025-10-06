import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";

  // Show shimmer while data is loading
  if (!resInfo) return <Shimmer />;

  // ✅ Dynamically find the card that contains restaurant info
  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const { name, cuisines = [], costForTwoMessage = "" } =
    restaurantInfoCard?.card?.card?.info || {};

  // ✅ Find categories safely
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // ✅ Render UI safely
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {name || "Restaurant Name Unavailable"}
      </h1>
      <p className="font-bold text-lg text-gray-700">
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"}{" "}
        - {costForTwoMessage || "Cost info unavailable"}
      </p>

      {/* Category Accordions */}
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title || index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))
      ) : (
        <p className="text-gray-500 mt-4">No categories available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
