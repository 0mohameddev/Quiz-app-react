import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {
    const [city, setCity] = useState('');
  
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const apiKey = 'pk.fb03328c1fe54849e30f86f0b1966040';
        const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setCity(data.address.city);
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}, []);

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Fais le quiz.</h1>
                <h2>📍{city}📍</h2>
            <h4>Quand tu veux...</h4>
            <Button onClick={startQuiz} css={btnCSS}>Commencer</Button>
        </Intro>
    )
}

export default Start