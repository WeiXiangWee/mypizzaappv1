import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Header({ isOpen }) {
  return (
    <header>
      <h1
        //ACTIVITY 5
        style={{
          color: "orange",
          fontSize: "48px",
          textTransform: "uppercase",
        }}
      >
        Andy's Pizza Co.
      </h1>
      {isOpen && <p className="tagline"> Authentic Italian Cuisine </p>}
    </header>
  );
}

//Challenge Display all pizzas
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <br />
      <h2>{props.name}</h2>
      <p>{props.ingredients} </p>
      <p>{props.soldOut ? "Sold Out" : `$${props.price}`}</p>
    </div>
  );
}

//ACTIVITY 6
function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </div>
  );
}

//ACTIVITY 7

function Footer() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  const isOpen = hours >= 10 && hours < 22;

  return (
    <footer className="footer">
      <div>
        <p>{isOpen ? "We're currently open" : "Sorry, we're closed"}</p>

        {isOpen && <button className="btn">Order Now</button>}
      </div>
    </footer>
  );
}

function App() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  const isOpen = hours >= 10 && hours < 22;
  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
