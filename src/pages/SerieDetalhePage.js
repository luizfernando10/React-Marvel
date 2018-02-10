import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SerieDetalhe from '../containers/SerieDetalhe';

import { fetchDetails, cleanDetails } from '../reducers/serieDuck';

class SerieDetalhePage extends Component {
  componentDidMount() {
    this.props.fetchDetailAction(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.cleanDetailsAction();
  }

  render() {
    const { serie: { thumbnail } } = this.props;
    const serieImg = thumbnail && thumbnail.path + '.' + thumbnail.extension;

    return (
      <Container>
        <Media>
          <Media>
            <Media
              object
              className="img-responsive"
              style={{ maxWidth: 400 }}
              src={serieImg}
            />
          </Media>
     
          <Media body>
            <Col>
              <SerieDetalhe />
            </Col>
          </Media>
        </Media>
      </Container>
    );
  }
}

SerieDetalhePage.propTypes = {
  serie: PropTypes.object,
  fetchDetailAction: PropTypes.func,
  cleanDetailsAction: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  serie: state.serieAtual,
});

const mapDispatchToProps = dispatch => ({
  fetchDetailAction: id => dispatch(fetchDetails(id)),
  cleanDetailsAction: () => dispatch(cleanDetails()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SerieDetalhePage)
);
