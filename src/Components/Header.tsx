import * as React from 'react';
import styledComponents from 'styled-components';

const Nav = styledComponents.nav`
  height: 2.75rem;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const FlexContainer = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LinkWrapper = styledComponents.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  line-height: 2.75rem;
`;

const NavAppLink = styledComponents.a`
  font-family: Montserrat;
  font-size: 18px;
  letter-spacing: 0.025rem;
`;

class Header extends React.PureComponent {
  public render() {
    return (
      <Nav>
        <FlexContainer>
          <LinkWrapper>
            <NavAppLink>Bookshelf</NavAppLink>
          </LinkWrapper>
        </FlexContainer>
      </Nav>
    );
  }
}

export default Header;
