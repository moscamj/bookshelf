import 'normalize.css';
import * as React from 'react';
import styledComponents from 'styled-components';
import Header from './Components/Header';

const Container = styledComponents.div`
  padding: 0 .625rem;
  margin: 0 auto;
`;

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Container>
          <p>Welcome to Bookshelf! Time to get organized!</p>
        </Container>
      </div>
    );
  }
}

export default App;
