import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1 className="header">Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormControl
            placeholder="Enter city"
            // Updating city value with the user's input
            onChange={(e) => setCity(e.target.value)}
            // Value will be the currently selected city
            value={city}
            onKeyDown={onKeyDown}
            className="input"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="search" onClick={() => onSearch(city)}>
            Check Weather
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
