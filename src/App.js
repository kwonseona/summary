import React, { useEffect, useState } from "react";
import "./App.css";
import datas from "./data/cards.js";
import BusinessCarad from "./components/BusinessCard.js";

// 추첨하기와 명함 컴포넌트 구현
function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  function draw() {
    // 조건 추가
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, "");
      return alert(`당첨자는 ${names} 입니다.`);
    }
    // 추첨하기 버튼을 누르면 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    // 당첨자(3명이기 때문에 배열이야함) 관리
    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && (
        <BusinessCarad info={pickedCards[pickedCards.length - 1]} />
      )}
    </div>
  );
}

export default App;
