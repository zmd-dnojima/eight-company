import * as React from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/single.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

 
const SingleBlog = (props) => {   
    //const tagsString = props.data.microcmsArticles.category[0].name
    const siteUrl = useLocation().href;
    const slug = useLocation().search;

    return(
      <Layout>
            <Seo title={props.data.microcmsBlog.title} description={props.data.microcmsBlog.title} /> 
            <div className={style.subHeader}>
                <p>{props.data.microcmsBlog.title}</p>   
            </div>
            <div className={style.contentWrap}>
            <div className={style.singlePage}>
                <div className={style.subContent}>
                    {/* <div className={style.blogDate}>{`${props.data.microcmsArticles.eventDate.substring(0, props.data.microcmsArticles.eventDate.indexOf("T"))}`}</div> */}
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: props.data.microcmsBlog.content }} />  
                    {/* <div className={style.backButton}><Link to={"../articles/"}>新着情報一覧へ</Link></div> */}
                </div>
            </div>
            </div>
        </Layout>                    
    )
}

export default SingleBlog
   
export const query = graphql` 
    query($id: String!) {
        microcmsBlog(id: { eq: $id }) {
            date
            blogId
            content
            title
            tags {
                name
            }
            thumbnail {
                url
            }
        }
    }
  `    

