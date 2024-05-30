import SearchBar from "../../components/searchbar/SearchBar";
import "./homepage.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find your dream Real estate Project and get under budget
          </h1>
          <p>
            Welcome to our premier real estate platform, where luxury meets
            lifestyle. Explore our curated collection of exquisite properties,
            each meticulously selected to redefine modern living. From elegant
            estates to chic urban retreats, discover your dream home with us and
            embark on a journey of sophistication and comfort. Elevate your
            expectations your perfect abode awaits.
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2 className="h2-box">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt=""></img>
      </div>
    </div>
  );
};

export default HomePage;
