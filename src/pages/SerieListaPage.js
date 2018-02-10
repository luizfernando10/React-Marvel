import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import SerieLista from '../containers/SerieLista';
import { fetchList } from '../reducers/seriesDuck';

class SerieListaPage extends Component {
  componentDidMount() {
    this.props.fetchListAction();
  }

  render() {
    return (
      <Container>
        <Row>
        <h4 >Séries Marvel</h4>
        </Row>
        <Row>
          <SerieLista/>
        </Row>
      </Container>
    );
  }
}

SerieListaPage.propTypes = {
  fetchListAction: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchListAction: () => dispatch(fetchList()),
});

export default connect(null, mapDispatchToProps)(SerieListaPage);