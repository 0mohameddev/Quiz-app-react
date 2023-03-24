import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import GameOver from './GameOver';
import Loading from './Loding';
import WinPage from './WinPage';


const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #fff;
    background-color: rgba(37, 9, 66, 0.95);
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

// import { useEffect, useState } from 'react';
// import QuizWindow from './QuizWindow';

const QUIZ_DATA = {
  Rabat: [
    {
      question: "Quel est le monument historique le plus emblématique de Rabat?",
      options: ["La Tour Hassan", "Le Mausolée Mohammed V", "Le Chellah", "La Kasbah des Oudayas"],
      answer: "La Tour Hassan"
    },
    {
      question: "Quel est le plat traditionnel de Rabat?",
      options: ["Le couscous", "Le tajine", "Le pastilla", "Le méchoui"],
      answer: "Le pastilla"
    }
  ],
  Meknes: [
    {
        question: "Quelle est la ville la plus ancienne du Maroc?",
        options: ["Marrakech", "Casablanca", "Fès", "Rabat"],
        answer: "Fès"
        },
        {
        question: "Quelle est la boisson traditionnelle marocaine à base de thé et de menthe?",
        options: ["Café", "Jus d'orange", "Thé à la menthe", "Coca-Cola"],
        answer: "Thé à la menthe"
        },
        {
        question: "Quel est le costume traditionnel porté par les femmes marocaines?",
        options: ["Jellaba", "Kaftan", "Caftan", "Hijab"],
        answer: "Caftan"
        },
        {
        question: "Quel est le nom de la place principale de Marrakech?",
        options: ["Place Jemaa el-Fna", "Place Royale", "Place des Nations", "Place Mohammed V"],
        answer: "Place Jemaa el-Fna"
        },
        {
        question: "Quel est le nom du festival de musique annuel qui se déroule à Essaouira?",
        options: ["Festival des Musiques du Monde", "Festival Gnawa et Musiques du Monde", "Festival de Jazz d'Essaouira", "Festival de la Culture Amazighe"],
        answer: "Festival Gnawa et Musiques du Monde"
        },
        {
        question: "Quelle est la principale langue parlée au Maroc?",
        options: ["Français", "Espagnol", "Arabe", "Anglais"],
        answer: "Arabe"
        },
        {
        question: "Quel est le nom du plat traditionnel marocain à base de viande et de légumes?",
        options: ["Couscous", "Tagine", "Kefta", "Harira"],
        answer: "Tagine"
        },
        {
        question: "Quel est le nom de la célèbre mosquée de Casablanca?",
        options: ["Mosquée Al-Qaraouiyine", "Mosquée Hassan II", "Mosquée Zitouna", "Mosquée Koutoubia"],
        answer: "Mosquée Hassan II"
        },
        {
        question: "Quel est le nom de la célèbre médina de Marrakech?",
        options: ["Médina d'Agadir", "Médina de Tétouan", "Médina de Fès", "Médina de Marrakech"],
        answer: "Médina de Marrakech"
        },
        {
        question: "Quel est le nom du dessert marocain traditionnel à base de pâte d'amandes et de miel?",
        options: ["Baklava", "Ghoriba", "Chebakia", "Makrout"],
        answer: "Chebakia"
        },
  ]
};

const getQuizData = (city) => QUIZ_DATA[city] || [];

const Quiz = () => {
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);
  const [city, setCity] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        position => {
          const apiKey = 'pk.fb03328c1fe54849e30f86f0b1966040';
          const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
          fetch(url)
            .then(response => response.json())
            .then(data => {
              setCity(data.address.city);
              setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
              setIsLoading(false);
            })
            .catch(error => {
              console.log(error);
              setIsLoading(false);
            });
        },
        error => {
          console.log(error);
          setIsLoading(false);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setQuiz(getQuizData(city));
    setNumber(0);
    setPts(0);
  }, [city]);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;
    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <QuizWindow>
      {quiz[number] && (
        <>
          <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

          <Options>
            {quiz[number].options.map((item, index) => (
              <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
            ))}
          </Options>
        </>
      )}
      {pts >= quiz.length * 0.8 && <WinPage />}
      {pts < quiz.length * 0.8 && number === quiz.length && <GameOver pts={pts} />}
    </QuizWindow>
  );
};



export default Quiz;
