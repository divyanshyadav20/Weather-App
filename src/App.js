import "./style.css";
import React from "react";
import { Container } from "react-bootstrap";
import CitySelector from "./components/CitySelector";
import WeatherCard from "./components/WeatherCard";
import UseFetch from "./hooks/UseFetch";

const App = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  // error handling and loading
  const getContent = () => {
    if (error) return <h3 className="error">Error when fetching: {error}</h3>;
    if (!data && isLoading) return <h3 className="loading">Loading..</h3>;
    if (!data) return null;
  };
  return (
    <Container className="App">
      <CitySelector
        onSearch={(city) =>
          setUrl(
            `${process.env.REACT_APP_API_BASE_URL}/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
          )
        }
      />
      {typeof data.main != "undefined" ? (
        <WeatherCard weatherData={data} />
      ) : (
        <div></div>
      )}
      {getContent()}
    </Container>
  );
};

export default App;
