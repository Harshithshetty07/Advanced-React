import Shimmer from './Shimmer'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {

    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams();


    // custom hook
    const resInfo = useRestaurantMenu(resId)

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = async () => {

    //     const data = await fetch(MENU_API + resId)
    // const json = await data.json();
    // setResInfo(json.data)
    // console.log(json)
    // }

    if (resInfo === null) return (<Shimmer />)

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>Biriyani</li>
        <li>Burgers</li>
        <li>Drinks</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu
