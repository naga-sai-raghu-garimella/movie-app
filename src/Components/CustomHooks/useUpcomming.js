import { UPCOMING } from "../ApiLinks/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";
import { OPTIONS } from "../ApiLinks/constants";
import { useEffect } from "react";

//Fetch data from Tmdb api and upadate the store of upcoming movies
const useUpcoming = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      const response = await fetch(UPCOMING, OPTIONS);
      const res = await response.json();
      dispatch(addUpcomingMovies(res.results)); //dispatching an action to update upcomming movies
    } catch (error) {
      console.error("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [dispatch]);
};

export default useUpcoming;
