import { useState } from 'react'
import './App.css'

function App() {
  // State to store the number of paragraphs and the generated paragraphs
  const [numParagraphs, setNumParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  // Function to handle the button click and generate paragraphs
  const handleGenerate = () => {
    const num =parseInt( document.getElementById('para').value);
    // console.log(typeof(num))
    if ( num > 0) {
      const newParagraphs = Array.from({ length: num }, (_, i) => (
        `Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
      ));
      setParagraphs(newParagraphs);
    } else {
      setParagraphs([]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <h2>TIRED OF BORING LOREM IPSUM?</h2>
          <div className='content'>
            <p>paragraphs</p>
            <input id='para' type="number" min="1" onChange={(e) => setNumParagraphs(e.target.value)}/>
          </div>
          <button id='btn' onClick={handleGenerate}>GENERATE</button>
          <div className='generated-content'>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
