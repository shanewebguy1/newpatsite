import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';


const SecondRow = () => { 

    const {

      secondRow :  {
        nodes: [{ acf: secondRow }],         
      } ,
      
    } = useStaticQuery(graphql`

    query secondRowQuery {
        secondRow: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            nodes {
              acf {
                second_row {
                    anchor_link
                    content_block
                    first_block
                    row_title
                    second_block
                    sub_title
                }
              }
            }
          }
      }
      
      `);


return( 

<div className="second-row">

    <div className="container">

        {secondRow.second_row.map((data, i) => (
        <div className="main" key={i}>

            <div id={data.anchor_link}></div>

            <div className="row-title">

            { ReactHtmlParser(data.row_title) }
           
            </div>

            <div className="sub-title">
            { ReactHtmlParser(data.sub_title) }
            </div>

            <div className="col-sm-6">
            <h3>DESIGN WORK</h3>
            
            { ReactHtmlParser(data.first_block) }

            </div>

            <div className="col-sm-6">
            <h3>DEVELOPMENT</h3>

            { ReactHtmlParser(data.second_block) }
    
            </div>

            <div className="col-sm-12">

            { ReactHtmlParser(data.content_block) }
            
            </div>

        </div>
        ))}

    </div>


</div>
)

}

export default SecondRow;