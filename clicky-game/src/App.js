import React, { Component } from "react";
import { Container, Row, Col } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    imagesClicked: [],
    imageOrder: [],
    score: ""
  };

  cards = [
    {
      id: 1,
      name: "Jerry",
      image:
        "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111"
    },
    {
      id: 2,
      name: "Morty",
      image:
        "https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441"
    },
    {
      id: 3,
      name: "Rick",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png"
    }
  ];

  // Chooses random number and returns random number value for checkIndex function
  chooseIndex = cards => {
    let randomNumber = Math.floor(Math.random() * cards.length);
    return randomNumber;
  };

  // Takes the chooseIndex function's returned value and
  // checks it against numbers within numbersChosen array
  checkIndex = (cb, numbersChosen) => {
    if (
      numbersChosen.some(oneOfNumbersChosen => {
        return cb === oneOfNumbersChosen;
      })
    ) {
      return this.checkIndex(this.chooseIndex(this.cards), numbersChosen);
    } else {
      return cb;
    }
  };

  // If random number doesn't match any random numbers already in the array,
  // this function pushes that value into the numbersChosen array
  pushNumberChosen = (cb, numbersChosen) => {
    numbersChosen.push(cb);
  };

  // Once the numbersChosen array matches the length of the cards array,
  // the array of random numbers is mapped across and put in as indices of
  // cards array to reorganized the array order
  populateCardsBasedOnIndex = numbersChosen => {
    const newImageOrder = numbersChosen.map(indexNumber => {
      return this.cards[indexNumber];
    });
    return newImageOrder;
  };

  // The cardMixer function takes in all our previous functions discussed earlier
  // and then sets the state with the new array order of cards
  cardMixer = cards => {
    const numbersChosen = [];
    while (numbersChosen.length !== cards.length) {
      this.pushNumberChosen(
        this.checkIndex(this.chooseIndex(cards), numbersChosen),
        numbersChosen
      );
    }
    this.setState({
      imageOrder: this.populateCardsBasedOnIndex(numbersChosen)
    });
  };

  // =======================================================

  componentDidMount() {
    this.cardMixer(this.cards);
  }

  handleClickEvent = event => {
    event.preventDefault();
    this.cardMixer(this.cards);
    console.log(event.target.getAttribute("imageid"));
  };

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Nav>Clicky Game!</Nav>
          <Jumbotron>
            <Row>
              {this.state.imageOrder.map(card => (
                <Col size="md-4">
                  <div>
                    <img
                      src={card.image}
                      alt={card.name}
                      value={`You clicked on the ${card.name} card!`}
                      onClick={this.handleClickEvent}
                      imageid={card.id}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
