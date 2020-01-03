import React  from 'react'
import { Link } from 'gatsby';
import {  useStaticQuery, graphql } from 'gatsby';
import ShaneGif from '../images/shane-web-guy-logo-animation-v7.gif';
import { Form, Button } from "react-bootstrap"


const Footer = () => { 

    const {

      footerRow :  {
        nodes: [{ acf: footerRow }],         
      } ,
      
    } = useStaticQuery(graphql`

    query footerRowQuery {
        footerRow: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            nodes {
                acf {
                  footer_row {
                    anchor_link
                    first_block
                    row_title
                    third_block
                    
                  }
                }
            }
        }
    }

    
    
    `);

    

return( 

<div className="footer-wrapper">

    <div id="footer-wrapper">

    <div className="container">

        {footerRow.footer_row.map((data, i) => (  

        <div className="main" key={i}>

            <div id={data.anchor_link}></div>

            <div className="row-title"> {data.row_title}</div>

            <div className="row">

            <div className="col-sm-3 first-block" dangerouslySetInnerHTML={{ __html: data.first_block }} />

            <div className="col-sm-6 second-block"> 

                <h3>Message</h3>

                <Form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <p class="hidden"> <label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                    <Form.Group controlId="contactFoerm.Email">
                    <Form.Control name="email" type="email" placeholder="Email..." />
                    </Form.Group>
                    <Form.Group controlId="contactFoerm.Message">
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button type="submit">Send</Button>
                </Form>

            

                <a href="shanewebguy.com"  className="swg-logo-link-footer">
                <img alt="shanegif" src={ShaneGif} /> 

                </a>
            </div>

            <div className="col-sm-3 social-row" dangerouslySetInnerHTML={{ __html: data.third_block }} />

            </div>

        </div>

        ))}

           
       

            <footer role="contentinfo">

                <div id="inner-footer" className="clearfix">

                <p className="attribution">© 2019 -  <Link to="/" ><span> Design by Patrick </span></Link>   
                
                - ALL RIGHTS RESERVED. Built with  by 

                <a href="https://shanewebguy.com/">
                <span className="orange-txt"> Shane</span><span className="txt-white">Web</span><span className="orange-txt">Guy</span>
                </a>.    
                
                <br/>
            
                <Link to="/ada-compliance-statement/" >
                <span> ADA Compliance Statement</span>
                </Link> 
                </p>
                
                
                </div> 
                
                
            </footer>
        
        </div>

    </div> 

</div>    
)

}



export default Footer

