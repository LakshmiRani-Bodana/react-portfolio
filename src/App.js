
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Home from './Home';

function openHome(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Home/>);
}

function openAbout(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<About/>);
}
function openProject(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Project/>);
}
function openContact(){
  const main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Contact/>);
}
function App() {
  return (
    <div className="main">
        <div>
        <table id="navbar">
            <tr>
                <th id="logo"><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9ItsNCtMKY09qv3uM4ssDI5+plwcx7ydHT7PD7/v7N6Ovs9/eAydNgvslYvcjb8PONz9fk8/S94ueg1t2z3uPA4+jn9fdzxc9MucT1+vqm2N6Ey9Sb1dvx+PmQ0dmDwD94AAAEF0lEQVR4nO3c7XKiMBQG4BANCK2A+FFEt97/Xa4WTgKiEwgIHud9Zv84dWfOO9HkkKQVAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCNZP5pt/Szuct4lWgfSKVu/4Lt3LW8RBgrj6g4nbuc8e1NvispD3MXNLZmwGtE9WER07uAt1H8rAknvg94jZjPXdSYvpQZOqmnm3DuskaU65HbnM4UUW7mLms8EQ1h/HN9lSUUce66xkPzjConl5Befs9c13j8KlJQvT5+3BexSihX1evgPmG2SSpxfl6G0Ux1urMlDJWeYG+9gPI23Jo6W8LEuyNVzusTbEmYtRqeW8ZNMVu9/VkStlu6v5/GjNo6S8LoYUJPHvl8G23fw1N9pqljE9G6Wixv/WqpEfbIpSewJhRRSvxdbJpzmTNZGu0JG8JcD6TaT1bkID0TCrHXg+jxWDN6JxShXjNO05Q4UP+EulmXx0kqHMohoVhUX0X1NUWFQ7kkLOibeJmiwqFcEopdNYgsPqZOCfXGAIfZ1CmhoIQcWje3hHGnd70Ht4R5+UVU/usLHMwtIb2Lw3LhlpDTjpxTwoLTrqpTwgP1bRMUOJhTwmqi4XFE5ZKQjqt4PCE6JCxoD1X9TlLiQA4JV1VXKteTVDhU74TRSm9jcOjZ+icME32KymMIWwlpmlw8enPh57UdYg6LoTDzIp0f0vO7DNb3VrGq7ZiyuZJSPerpPZfGxYU7Xo3azVp2D9+0ttH+7vHJLn6TYrGBUaJdJZpato/PYpokmxEUevI0U0veYRATJjv6f07V5OlR0UVgH0WZMJlIb9J2k7lR0jaOks3Rk9BPs97RbJyl56NUD9QvLQQc9tlKJ3rYqy/yRfrV4i/PSe2mLZ+LYb+6DbOv4cXB3CZmsQ1V+qeL7rDtEu30u/lMqL9mke+ys7TldkQq6teg1bLP25OXVzaatbk6m//Y307XUJk8IN78JuYCgjpb66a5Sf6borhxpPXFXCWXbfjz3WJ2ZS6S3cdUhI0m5uFyr+SK+pj0/oGEg9SzN9zm9kXzYjETWWxvuPXti2o/kcW5hREtrBH1JjedrnE4e6oLbcNoEno8Ewrhx8+uIpaJ6Ff3eH5KS+klkc8eDxUNId06VR3agzcUpdvFKojbgiUtDj6n07WnohbzM9rYD57/d970gs/j6p6DQLL+GtpRV/qxH9ILLZoMV8MuMr2byuMUv6co3ZiOQLJ5/i22i24u66R+utZlw+MtZNeyu6r3N+e5C+8s7nSa1mrgVmwefh//6tYHBdQtZr+AnI4PHcaQ298G6XIgWiNVzO3vuxTBw421x7z4wvChNwqX3ewP6ae22gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDbf2K+K3BbtXxnAAAAAElFTkSuQmCC" alt=""/>
                </th>
                <th><button onClick={openHome}>Home</button></th>
                <th><button onClick={openAbout}>About</button></th>
                <th><button onClick={openProject}>Project</button></th>
                <th><button onClick={openContact} >Contact</button></th>
            </tr>
        </table>
      </div>
      <div id='main-area'>
            <Home/>
      </div>
    </div>
  );
}

export default App;
