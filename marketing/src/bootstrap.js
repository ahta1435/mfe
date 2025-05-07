import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
   ReactDOM.render(
     <App/>,
     el
   )
}


// making distinction b/w isloation and production

if (process.env.NODE_ENV === 'development') {

    const rootMarket = document.querySelector("#_marketing-dev-root");
    if (rootMarket) {
        mount(rootMarket);
    }
}

export { mount };