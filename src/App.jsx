import { useEffect } from 'react';
import './App.css';
import quotes from './quotes.json';
import { useState } from 'react';

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

const getRandomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  };

    useEffect(() => {
      document.body.style.backgroundColor = color
    }, [color]);
  return (
    <div style={{ backgroundColor: color, transition: 'all 0.4s ease' }} className='wrapper'>
      <div id="quote-box">
        <div className="quote-text" style={{ opacity: 1 }}>
          <i className="fa fa-quote-left"> </i>
          <span id="text">{quote.quote}</span>
        </div>
        <div className="quote-author" style={{ opacity: 1 }}>
          - <span id="author">{quote.author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.text}" ${quote.author}`}
            style={{ backgroundColor: color }}
          >
           <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.author}&content=${quote.text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            style={{ backgroundColor: color }}
          >
           <i className="fa-brands fa-tumblr"></i>
          </a>
          <button onClick={changeQuote} className="button" id="new-quote" style={{ backgroundColor: color }}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
