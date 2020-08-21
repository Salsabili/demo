import React from 'react'
import '../App.css'
import {Button, Nav,Navbar, Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faVideo, faStore } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export default function navbar() {
    return (
        <div className="navbar">
            <img src="https://images.hdqwalls.com/wallpapers/thumb/spider-man-miles-morales-logo-4k-f3.jpg"
        alt ="" height='2%' width="6%"/>
            <ul className="bar">
               <Link to='/'>  
               <li>
                    home
                </li>
                </Link>
                <Link to='/latest'>
                    <li>
                    latest
                </li>
                </Link>
            </ul>
            
            
        </div>
    )
}
