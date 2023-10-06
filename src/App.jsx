import React, { useEffect, useState } from 'react';
import './App.scss';
import list from './list.json';
import Table from 'react-bootstrap/Table';
import FoodModal from './components/modal';
import logo from './images/logo.jpg';

function App() {

  const [menu, setMenu] = useState(null);

  const [appetizer] = useState(
    list.appetizer.map((obj, i) => {
      return (
        <tr key={i} onClick={() => setMenu({ food: obj.food, shortDescription: obj.shortDescription, price: obj.price, image: obj.image, description: obj.description })}>
          <td>{i + 1}</td>
          <td className="text-decoration-underline">{obj.food}</td>
          <td>{obj.shortDescription}</td>
          <td>${obj.price.toString()}</td>
        </tr >
      )
    })
  );
  const [appetizer2] = useState(
    list.appetizer2.map((obj, i) => {
      return (
        <tr key={i} onClick={() => setMenu({ food: obj.food, shortDescription: obj.shortDescription, price: obj.price, image: obj.image, description: obj.description })}>
          <td>{i + 1}</td>
          <td className="text-decoration-underline">{obj.food}</td>
          <td>{obj.shortDescription}</td>
          <td>${obj.price.toString()}</td>
        </tr >
      )
    })
  );
  useEffect(() => {

  }, []);

  return (
    <div>
      <div className="menu fluid-container">
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <a href="/"><img src={logo} alt="logo" className="img-fluid" /></a>
          </div>
          {/* flex-md-row justify-content-md-around */}
          <div className="mt-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-around">
            <ul className="mb-5 mb-md-0">
              <a href="/"><li>Phone Numer</li></a>
              <a href="/" target="_blank" rel="noreferrer">
                <li>Location</li>
              </a>
            </ul>
            <ul>
              <a href="/"><li>Phone Number</li></a>
              <a href="/" target="_blank" rel="noreferrer">
                <li>Location</li>
              </a>
            </ul>
          </div>
        </div>

        <h3 className="text-center mb-4 mt-5">Click the item to learn more about it!</h3>
        
        
        {/* Your first Category */}
        <h2 className="text-center">Category</h2>
        <div className="mb-5 d-flex">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Meal Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                appetizer
              }
            </tbody>
          </Table>
        </div>
        {/* End of your first category */}
        {/* Paste your first category under here to create a second category */}






        {/* Bottom of second category */}












      </div>


      <FoodModal
        {...menu}
        show={!!menu}
        onHide={() => setMenu(null)}
      />
    </div>
  );
}

export default App;
