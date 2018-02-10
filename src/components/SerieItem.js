import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const qtd_caracteres  = 35

const SerieItem = ({ id, title, description ,imgUrl }) => {
  return (
    <Card>
      <CardImg top className="serie-image" src={imgUrl} alt={`${title}'s picture`} />
      <CardBody>
        <CardTitle>
        {title && title.length > qtd_caracteres ?
           (<h6>{`${title.substring(0, qtd_caracteres )}...`} </h6>) :
           <h6> {title || 'Sem Titulo'}</h6>}
        </CardTitle>
        <CardText> 
          {description && description.length > qtd_caracteres  ?
            (<p>{`${description.substring(0, qtd_caracteres )}...`} </p>) :
            <p> {description || 'Resenha não cadastrada'}</p>}
       </CardText>
       <small>
          <Link className="btn btn-outline-danger" to={`/detalhes/${id}`}>
            <FontAwesome name="book" /> Mais Detalhes
          </Link>
        </small>
      </CardBody>
    </Card>
  );
};

SerieItem.propTypes = {
  id: PropTypes.number.isRequied,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
};

SerieItem.defaultProps = {
  imgUrl: 'http://via.placeholder.com/200x200',
};

export default SerieItem;
