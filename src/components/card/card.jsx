import React from 'react';
import TeaImg from './cardImg/insta-1.jpg'
import terminaliaChebula from './cardImg/slide-4.jpg'
import hygienicOil from './cardImg/specials-bg.jpg'


const Card =(props) => {
    const name = props.name;
    const updateTime = props.UpdateTime;
    const allImgSrc = {TeaImg,terminaliaChebula,hygienicOil}
    const src = allImgSrc[props.imgSrc]
   

    return (
        <div class="col">
        <div class="card h-100">
          <img src={src}class="card-img-top" alt="...No img"/>
          <div class="card-body">
            <h5 class="card-title">{name} </h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
         
          <div class="card-footer">
            <small class="text-muted">{updateTime}</small>
          </div>
        </div>
      </div>
    )
}
export default Card 