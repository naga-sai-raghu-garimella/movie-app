import { TOP_RATED } from "../ApiLinks/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { OPTIONS } from "../ApiLinks/constants";
import { useEffect } from "react";

//Fetch data from Tmdb api and upadate the store of top rated movies
const useTopRated = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      const response = await fetch(TOP_RATED, OPTIONS);
      const res = await response.json();
      dispatch(addTopRatedMovies(res.results)); //dispatching an action to update top rated movies
    } catch (error) {
      console.error("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [dispatch]);
};

export default useTopRated;
