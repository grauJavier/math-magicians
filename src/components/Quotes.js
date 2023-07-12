import React, { useEffect, useState } from 'react';
import './css/Quotes.css';

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=imagination', {
          headers: { 'X-Api-Key': 'c6+6sinGjqmIHZuM/qiWoQ==EzM57w8WU5zGm8HX' },
        });
        const json = await res.json();
        setQuote(json);
      } catch {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) {
    return (
      <div id="quote__container">
        <p id="quote__error">Something went wrong! Please reload the page.</p>
      </div>
    );
  }

  if (isLoading || !quote) {
    return (
      <div id="quote__container">
        <p id="quote__loading">Loading...</p>
      </div>
    );
  }

  return (
    <div id="quote__container">
      <p id="quote">
        &quot;
        {quote[0].quote}
        &quot;
        <br />
        <span id="quote__author">{quote[0].author}</span>
      </p>
    </div>
  );
}
