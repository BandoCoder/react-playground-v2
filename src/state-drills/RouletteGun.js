import React from "react";

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    }, 500);
  };

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;

    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger!";
    } else if (chamber === bulletInChamber) {
      return "BANG пиздец!!!";
    } else {
      return "You just so happen to be safe my friend";
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>PULL THE TRIGGER!</button>
      </div>
    );
  }
}
