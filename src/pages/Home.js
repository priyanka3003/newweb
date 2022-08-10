import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTV from "../components/FeaturedTV";
import ContentContainer from "../components/ContentContainer";

const Home = ({ movies, movieIsPending, movieError, tvs, tvsIsPending, tvsError }) => {

    return (
        <div className="home">
            <Hero />
            {movieError && <div>{movieError}</div>}
            {movieIsPending && <div>Loading...</div>}
            {movies && <FeaturedMovies movies={movies} />}
            {tvsError && <div>{tvsError}</div>}
            {tvsIsPending && <div>Loading...</div>}
            {tvs && <FeaturedTV tvs={tvs} />}
            <ContentContainer />
        </div>
    );
}

export default Home;
