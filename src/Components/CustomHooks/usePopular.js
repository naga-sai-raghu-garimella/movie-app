import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { POPULAR } from "../ApiLinks/constants";
import { OPTIONS } from "../ApiLinks/constants";

//Fetch data from Tmdb api and upadate the store of popular movies
const usePopular = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      const response = await fetch(POPULAR, OPTIONS);
      const res = await response.json();
      dispatch(addPopularMovies(res.results)); ////dispatching an action to update popular movies
    } catch (error) {
      console.error("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [dispatch]);
};

export default usePopular;
