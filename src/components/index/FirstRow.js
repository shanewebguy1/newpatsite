import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';


const FirstRow = () => { 

      const {

        firstRow :  {
          nodes: [{ acf: firstRow }],         
        } ,
        
      } = useStaticQuery(graphql`

      query firstRowQuery {
        firstRow: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            nodes {
              acf {
                first_row {
                  anchor_link
                  row_title
                  second_block
                  third_block
                  first_block
                }
              }
            }
          }
      }
      
      `);

return( 

<div className="first-row">

  <div className="container">

    

        {firstRow.first_row.map((data, i) => (

          <span key={i}>

              <div  id={data.anchor_link}></div>

              

              <div className="row-title">{data.row_title}</div>

              <div className="row">

                <div className="col-sm-4" dangerouslySetInnerHTML={{ __html: data.first_block }} />

                <div className="col-sm-4" dangerouslySetInnerHTML={{ __html: data.second_block }} />

                <div className="col-sm-4" dangerouslySetInnerHTML={{ __html: data.third_block }} />

              </div>
              
          </span>
        ))}

   

  </div>
  
</div>
)

}

export default FirstRow;