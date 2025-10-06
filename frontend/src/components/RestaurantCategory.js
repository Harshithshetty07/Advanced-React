import ItemList from "./ItemList";

const RestaurantCategory = ({ data = {}, showItems, setShowIndex, dummy }) => {
  const handleClick = () => setShowIndex();

  // safely destructure with defaults
  const { title = "Untitled Category", itemCards = [] } = data;

  // if itemCards is missing or empty, don’t render the accordion
  if (!itemCards || itemCards.length === 0) return null;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span className="text-gray-500">{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Only show items when accordion is open */}
      {showItems && <ItemList items={itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
