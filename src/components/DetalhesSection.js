import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class DetalhesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.startOpen,
    };
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    const { type, items } = this.props;

    return (
      <ListGroup>
        <ListGroupItemHeading>
          <h5 className="text-capitalize">
            {type}
            <a className="pull-right" onClick={this.toggle}>
              {isOpen && <FontAwesome name="minus-square" />}

              {!isOpen && <FontAwesome name="plus-square" />}
            </a>
          </h5>
        </ListGroupItemHeading>
        <Collapse isOpen={this.state.isOpen}>
          {items &&
            items.map(item => (
              <ListGroupItem key={item.resourceURI}>{item.name}</ListGroupItem>
            ))}
        </Collapse>
      </ListGroup>
    );
  }
}

DetalhesSection.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array,
  startOpen: PropTypes.bool,
};

export default DetalhesSection;
