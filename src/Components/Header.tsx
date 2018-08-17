import * as React from 'react';
import styledComponents from 'styled-components';

const Nav = styledComponents.nav`
  height: 3rem;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 1px 0 #eceeef, 0 2px 0 hsla(200,9%,93%,.25);
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
  line-height: 3rem;
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
