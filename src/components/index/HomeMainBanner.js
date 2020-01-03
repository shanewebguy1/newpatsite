import React from 'react'
import {  useStaticQuery, graphql } from 'gatsby';

const HomeMainBanner = () => { 
    
    const {

        mainbanner :  {
            edges: [{ node: mainbanner }],         
        } ,
        
       
    } = useStaticQuery(graphql`


    query useStaticQuery {
 
        mainbanner: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            edges {
              node {
                acf {
                    left_banner_content
                    right_banner_content
                }
              }
            }
          }
        
        
    }
  `);

  


return( 
<div className="main-banner">
    <div id="top"></div>  
        <div className="home-main-banner">

        <div className="container">
         <div className="row">

            <div className="col-sm-6 banner-left">
              
                <div className="banner-content-left main-banner-content" dangerouslySetInnerHTML={{ __html: mainbanner.acf.left_banner_content }} />

          
            </div>
            <div className="col-sm-6 banner-right">

                 <div className="banner-content-right main-banner-content" dangerouslySetInnerHTML={{ __html: mainbanner.acf.right_banner_content }} />

    
            </div>
        </div>
        </div>    

        </div>

        <div className="clear"></div>
</div>
)

}

export default HomeMainBanner;