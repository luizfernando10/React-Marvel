import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import SerieListaPage from '../pages/SerieListaPage';
import SerieDetalhePage from '../pages/SerieDetalhePage';
import { Container  } from 'reactstrap';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Container>
            <Header/>
            <Route exact path="/" component={SerieListaPage} />
            <Route path="/detalhes/:id" component={SerieDetalhePage} />
            <Footer/> 
          </Container>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
