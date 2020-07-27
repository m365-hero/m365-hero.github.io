import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, size, color, path, viewBox, transform } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button className="tech-tag text-dark">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}>
                        {
                            transform !== "" ?
                                <svg role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
                                    <title>{tech} </title>
                                    <g transform={transform}>
                                        <path
                                            d={path} />
                                    </g>
                                </svg>
                                :
                                <svg role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
                                    <title>{tech} </title>
                                    <path
                                        d={path} />
                                </svg>
                        }
                    </div>
                </button>
            </Link>

        </div>

    )
}

export default TechTag