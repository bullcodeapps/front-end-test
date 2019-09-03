import React from 'react'
import './styles.css'

export default function Card(props) {
    return (
        <div className="card" style={{height: `${props.height}%`}}>
            { props.children }
        </div>
    )
}
