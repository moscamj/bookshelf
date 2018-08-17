import 'normalize.css';
import * as React from 'react';
import styledComponents from 'styled-components';
import Header from './Components/Header';

const Container = styledComponents.div`
  padding: 5px 3%;
  margin: 0 auto;
`;

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <p>Welcome to Bookshelf! Time to get organized!</p>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
