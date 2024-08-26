import ReactDOM from 'react-dom/client';
import "./index.css"

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const curentPath = window.location.pathname;

if (curentPath=="/Home"){
    root.render(<Home/>)
}
else if(curentPath=="/About")
{
    root.render(<About/>)
}
else if(curentPath=="/Contact")
    {
        root.render(<Contact/>)
    }
else 
{
    root.render(<h1>404 Not Found</h1>)
}    