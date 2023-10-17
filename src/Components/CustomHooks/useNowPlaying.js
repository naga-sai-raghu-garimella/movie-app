import { useEffect } from "react";
import { NOW_PLAYING, OPTIONS } from "../ApiLinks/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

// Fetch data from Tmdb api and upadate the store of now playing movies
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      const response = await fetch(NOW_PLAYING, OPTIONS);
      const res = await response.json();
      dispatch(addNowPlayingMovies(res.results)); //dispatching an action to update now playing movies
    } catch (error) {
      console.error("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
   getMovies();
   
  }, [dispatch]);
};

export default useNowPlaying;
