import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const tempColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const [randomColors, setRandomColors] = useState([]);
  const createBox = () => {
    let colors = randomColors;
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.round(Math.random() * 15);
      color += tempColor[randomIndex];
    }
    colors.push(color);
    setRandomColors(colors);
  }
  return (

    <div className="container">
      <button className='btn btn-primary' type='button' onClick={() => createBox()}>Create a Box</button>
      <div className='row'>
        {
          randomColors.map((item, i) => {
            return <div className='mt-1 mx-1' key={i} style={{ backgroundColor: item,width:"100px",height:"100px"}}>Random Box</div>;
          })
        }
      </div>  
    </div>
  );
}

export default App;
