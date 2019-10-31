import React from "react";
import API from "./../../utils/axios";
import CardComponent from "./card/card";
import Cards from "./card/test";
import Aux from "../../hoc/Helper";
import Person from "../Person/Person";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default class ListCardsComponent extends React.Component {
  constructor(props) {
    super(props);
    const evenements = [
      {
        id: "ev1",
        name: "Evenement 1",
        url: "http://env1.com"
      },
      {
        id: "ev2",
        name: "Evenement 2",
        url: "http://env2.com"
      },
      {
        id: "ev3",
        name: "Evenement 3",
        url: "http://env3.com"
      },
      {
        id: "ev4",
        name: "Evenement 4",
        url: "http://env4.com"
      }
    ];
    this.state = {
      evenements: [...evenements]
    };
  }
  componentDidMount() {
    API.get("") // A remplir avec l'url storyblock pour récupérer les événements
      .then(console.log);
  }

  render() {
    return (
      <Aux>
        <Row></Row>
        <Row>
          <Col>
            <div className="scrolling-wrapper-flexbox">
              {this.state.evenements.map(evenement => (
                <CardComponent key={evenement.id} />
              ))}
            </div>
          </Col>
        </Row>
        <Container fluid>
          <Row className="mt-4">
            <Col>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
          </Row>          
        </Container>
        <Row>
          <Col>
            {" "}
            <Cards />
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <Col className="d-none">Feature 1</Col>
            <Col> <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div></Col>
            <Col> <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div></Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}
