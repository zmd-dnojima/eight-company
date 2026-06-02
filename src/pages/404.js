import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
    return(
        <Layout>
            <Seo title="ページが見つかりません" description="これは404ページです" />
            <div style={{
                textAlign: "center",
                height: "70vh",
                width:"100%",
                display:"table-cell",
                    textAlign: "center",
                    verticalAlign:"center"
                
            }}>
                <div style={{
                    position: "absolute",
                    padding: "20px",
                    top:  "0",
                    bottom:  "0",
                    left:  "0",
                    right:  "0",
                    margin:  "auto",
                    height:"200px"
                }}>
                <h1>404: Not Found</h1>
                <p>ページが見つかりません。</p>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage