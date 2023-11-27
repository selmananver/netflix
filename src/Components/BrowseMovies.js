import React from "react";
import RowPost from "./RowPost";
import Banner from "./Banner";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";
import "./Navbar.css";
import  {requests} from '../constants/Constant'

function BrowseMovies() {
  const { param } = useParams();


  return (
    <div className="home">
      <NavBar />
      <Banner />
      {param === undefined && (
        <RowPost
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
      )}

      {(param === undefined || param === "tv") && (
        <>
          {param === "tv" && (
            <RowPost
              title="Trending Now"
              fetchUrl={requests.fetchTrendingTV}
            />
          )}
          <RowPost title="Popular on Netflix" fetchUrl={requests.fetchPopularTV} />
          <RowPost
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginalsTV}
          />
          <RowPost title="New Releases" fetchUrl={requests.fetchAiringTodayTV} />
        </>
      )}

      {param === undefined && (
        <RowPost
          title={
            "Top Picks for " +
                localStorage.getItem('displayName') ? localStorage.getItem('displayName') : ''
            
          }
          fetchUrl={requests.fetchTrending}
        />
      )}

      {(param === undefined || param === "movies") && (
        <>
          {/*{param === undefined && <h2>Movies</h2>}
          <Row
            title="Popular on Netflix"
            isLargeRow={param === "movies"}
            fetchUrl={requests.fetchPopularMovies}
          />
          
          <Row
            title="New Release"
            fetchUrl={requests.fetchNowPlayingMovies}
          />
          {/*<Row title="Recently Added" fetchUrl={requests.fetchNowPlayingMovies} />*/}
          {param === "movies" && (
            <RowPost
              title="Trending Now"
              fetchUrl={requests.fetchTrendingMovie}
            />
          )}
          <RowPost title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <RowPost title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <RowPost title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <RowPost title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
          <RowPost
            title="Documentaries"
            fetchUrl={requests.fetchDocumentariesMovies}
          />
        </>
      )}

      {param === "latest" && (
        <>
          <RowPost
            title="Worth the Wait"
            fetchUrl={requests.fetchPopularTV}
          />
          <RowPost title="New on Netflix" fetchUrl={requests.fetchAiringTodayTV} />
          <RowPost
            title="Coming This Week"
            fetchUrl={requests.fetchNowPlayingMovies}
          />
        </>
      )}
    </div>
  );
}

export default BrowseMovies;