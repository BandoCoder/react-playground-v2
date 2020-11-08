import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = { currentSectionIndex: null };

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index });
  }

  renderButtons(section, index, currentSectionIndex) {
    console.log("renderbuttons called");
    return (
      <li className="item" key={index}>
        <button type="button" onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {currentSectionIndex === index && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { currentSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <div>
        <ul className="Accordion">
          {sections.map((section, index) =>
            this.renderButtons(section, index, currentSectionIndex)
          )}
        </ul>
      </div>
    );
  }
}
