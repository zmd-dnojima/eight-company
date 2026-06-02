import React from "react"
import { useInView } from 'react-intersection-observer'

const EmbedMap = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div ref = {ref}>
            {inView ? ( 
                <div> {children}</div>            
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default EmbedMap