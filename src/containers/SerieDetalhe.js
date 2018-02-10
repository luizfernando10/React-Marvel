import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DetalhesSection from '../components/DetalhesSection';

const SerieDetalhe = ({
  serie,
  serie: { title, description, series, comics, stories, characters, creators },
}) => {
  if (!serie) return <span>Carregando Aguarde ...</span>;

  return (
    <Container>
      <Row>
        <h1>{title}</h1>
      </Row>
      <Row className="container">
        {description || 'Sem Resenha'}
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>
              {comics && (
                <DetalhesSection startOpen type="comics" items={comics.items} />)}
            </Col>
          </Row>
          <Row>
            <Col>
              {stories && (
                <DetalhesSection type="stories" items={stories.items} />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {characters && (
                <DetalhesSection type="characters" items={characters.items} />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {creators && (
                <DetalhesSection type="creators" items={creators.items} />
              )}
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

SerieDetalhe.propTypes = {
  serie: PropTypes.object,
};

const mapStateToProps = state => ({
  serie: state.serieAtual,
});

export default connect(mapStateToProps)(SerieDetalhe);