import './App.css';
import Card from './Card';
function App() {
  let payload = {
    cardTitle: "Card Title",
    cardTitleTwo: "Card Title Two",
    cardTitleThree: "Card Title Three",
  }
  let myArrray = [
    "Card Title",
    "Card Title Two",
    "Card Title Three",
  ];

  return (
    <>
      <Card 
        value={payload.cardTitle} 
        title={myArrray[0]}
       />
      <Card 
           value={payload.cardTitleTwo} 
           title={myArrray[1]}
            />
      <Card 
          value={payload.cardTitleThree} 
          title={myArrray[3]} />
    </>
  );
}

export default App;
