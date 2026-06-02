import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const {
        defaultTitle,
        defaultDescription,
        defaultImage,
        siteUrl,
    } = site.siteMetadata
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: defaultImage,
        url: `${siteUrl}${pathname}`,
        canonical: `${siteUrl}${pathname}`
    }
    return (
        <Helmet>
            <html lang="ja" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
            <meta charSet="utf-8" />

            <title>{title}</title>
            <meta name="robots"></meta>
            <meta name="description" content={description} />
            <meta name="image" content={defaultImage} />   
            <link rel="canonical" href={seo.canonical} />

            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.image && <meta property="og:image" content={seo.image} />}

            <script type="application/javascript">
            {`
                {
                (function(d) {
                var config = {
                kitId: 'cxc5abt',
                scriptTimeout: 3000,
                async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                })(document);
                }
            `}
          </script>
        </Helmet>
    )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
        defaultImage
        siteUrl
      }
    }
  }
`