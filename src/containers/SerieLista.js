import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';
import SerieItem from '../components/SerieItem';

const SerieLista = ({ series }) => {
  if (!series) return <span>Carregando Aguarde ...</span>;

  return (
    <CardColumns>
      {series.map(serie => (
        <SerieItem
          key={serie.id}
          id={serie.id}
          title={serie.title}
          description = {serie.description}
          imgUrl={serie.thumbnail.path + '.' + serie.thumbnail.extension}
        />
      ))}
    </CardColumns>
  );
};

SerieLista.propTypes = {
  series: PropTypes.array,
};

const mapStateToProps = state => ({
  series: state.series,
});

export default connect(mapStateToProps)(SerieLista);