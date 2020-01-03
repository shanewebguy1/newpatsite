import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from 'gatsby';

const Header = () => { 
    
  const {

      logo :  {
          options: logo,
      } ,
      
      menu :  {
          edges: [{ node: menu }],
      } ,

  } = useStaticQuery(graphql`


  query HeaderQuery {

      logo: wordpressAcfOptions {
          options {
              logo {
                  localFile {
                    publicURL
                  }
              }
            }
      }
      
      site {
        siteMetadata {
          title
        }
      }
      
      menu: allWordpressMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
            }
            name
          }
        }
      }
  }

`);


return( 

  <div className="navbar-fixed-top" id="navbar-fixed-top">
  <div className="container">
    <div className="row">
      
      <div class="col-sm-6">
        
        <div id="logo"><Link to="/" className="navbar-brand" type="logo"><img type="logo" src={ logo.logo.localFile.publicURL } alt="Design by Patrick Logo" /></Link></div>
      </div>
        
      <div class="col-sm-6">
      <Navbar  expand="lg" navbar-dark>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
             {menu.items.map((item, i) => (
                <Nav.Link as={Link} to={item.url}>
                  <b class="text-light">{item.title}</b>
                </Nav.Link>
             ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>  
    </div>
  </div>
  </div>
)
}

export default Header