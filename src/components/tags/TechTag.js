import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, name, size, color, isOfficeUIIcon } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button className="tech-tag text-dark">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}>
                        {
                            isOfficeUIIcon === true ?
                                <svg role="img" viewBox="-10 0 2068 2048" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
                                    <title>{tech} </title>
                                    <g transform='matrix(1 0 0 -1 0 2048),rotate(0,1034,1024)'>
                                        <path
                                            d={name} />
                                    </g>
                                </svg>
                                :
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
                                    <title>{tech} </title>
                                    <path
                                        d={name} />
                                </svg>
                        }
                    </div>
                </button>
            </Link>

        </div>

    )
}

export default TechTag