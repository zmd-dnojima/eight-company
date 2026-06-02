//import * as React from "react"
import React, { useState, useEffect } from "react";
import queryString from 'query-string'
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/single.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

 
const SingleBlogPreview = (props) => {   

    const search = useLocation().search;
    const query3 = queryString.parse(search);
    const contentId = query3['contentId'];
    const draftKey = query3['draftKey'];
    const [postData, setPostData] = useState(null);
    
    useEffect(() => {
        if (!postData) {
            fetch(
                `https://kofujc2025.microcms.io/api/v1/articles/${contentId}?draftKey=${draftKey}`,
            {
                headers: {
                "X-API-KEY": "A52cGJsz6I2zQ2CqESuZc6zTf3LimFvGQIwW",
                },
            }
            )
            .then((response) => {
                if (response.ok) {
                return response.json();
                }
            })
            .then((json) => {
                
                //postData = setPostData(json);
                setPostData(json)
                
            });
            
        } else {
            return function cleanup() {
            console.log("done");
            };
        }
    });
    
    return(
        <Layout>

            <div className={style.subHeader}>
                <p>{postData?.title}</p>   
            </div>
            <div className={style.contentWrap}>
            <div className={style.singlePage}>
                <div className={style.subContent}>  
                    {/* <div className={style.blogDate}>{`${postData?.eventDate.substring(0, postData?.eventDate.indexOf("T"))}`}</div> */}
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: postData?.body }} />  
                </div>
            </div>
            </div>
            
        </Layout>                    
    )
}

export default SingleBlogPreview   