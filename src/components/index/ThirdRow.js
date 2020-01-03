import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';



const ThirdRow = () => { 

    const {

    thirdRow :  {
        nodes: [{ acf: thirdRow }],         
      } ,
      
    } = useStaticQuery(graphql`

    query thirdRowQuery {
        thirdRow: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            nodes {
              acf {
                third_row {
                  anchor_link
                  row_content
                  row_title
                }
              }
            }
        }
      }      
      
      `);

return( 

<div className="third-row">

    <div className="container">

        {thirdRow.third_row.map((data, i) => (
        <div className="main" key={i}>

            <div id={data.anchor_link}></div>

            <div className="row-title" dangerouslySetInnerHTML={{ __html: data.row_title }} />

            <div className="row-content" dangerouslySetInnerHTML={{ __html: data.row_content }} />
 
        </div>
        ))}

    </div>

</div>
)

}

export default ThirdRow;