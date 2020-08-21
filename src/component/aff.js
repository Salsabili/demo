import React from 'react'
import List from "./List"
import './style.css'
export default function MovieList(props) {
    return (
        <div className="flex">
             {props.movies.filter(el=> el.name.toLowerCase().includes(props.input.toLowerCase())&& el.rating>=props.star).map(el=>  <div><List movie={el} /> </div>)}
        </div>
    )
}