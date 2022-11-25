import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, ListGroup, ListGroupItem, ListGroupItemProps } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dataJson, setDataJson] = useState([]);
  let parameters = {
    method: 'GET'
  }

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all', parameters).then(response => response.json()).then(data => { setDataJson(data) });
  }, [])

  async function Search() {
    if (searchInput != "") {
      fetch('https://restcountries.com/v3.1/name/' + searchInput, parameters)
        .then(response => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then(data => { setDataJson(data) })
        .catch(error => { console.log(error); });

    }
    else {
      fetch('https://restcountries.com/v3.1/all', parameters).then(response => response.json()).then(data => { setDataJson(data) });
    }

  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg" >
          <FormControl
            placeholder="Procure por País"
            type="input"
            onKeyPress={event => {
              if (event.key == "Enter") {
                Search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={Search}>
            Procurar
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {dataJson.map((data, i) => {

            return (
              <Card>
                <Card.Img src={data.flags.png} />
                <Card.Body>
                  <Card.Title>{data.name.common}</Card.Title>

                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Capital: {data.capital}</ListGroup.Item>
                  <ListGroup.Item>Continente: {data.region}</ListGroup.Item>
                </ListGroup>
              </Card>
            );

          })}
        </Row>
      </Container>
    </div >
  );
}

export default App;
