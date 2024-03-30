import React from 'react'
import logo from '../imgs/location.png'
 function Main(props) {
  return (
    <section className='Main'>
    <div className='image--div'>
        <img src={props.image} alt='Mountain'></img>
    </div>
    <div className='content--div'>
    
    <pre className='para--location'>
    <img src={logo} alt='Loaction'></img> {props.location}      <a href='#.' className='loc-txt'>View on Google Map</a>
     </pre>

    <h1 className='title'>{props.title}</h1>
    <p className='dates'>{props.StartDate} - {props.EndDate}</p>
    <p className='description'>{props.description}</p>
    
    </div>

    </section>
  )
}
export default Main;