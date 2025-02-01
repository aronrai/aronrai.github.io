const Works = () => {
  return (
    <div id="works" className="works div">
      <h2>Works</h2>
      <div className="works-container">
        <div className="works-card">
          <img
            src="/src/assets/restaurant.png"
            alt="restaurant website image."
          />
          <h3>Restaurant Website</h3>
          <p>
            A clean and responsive restaurant website built using React. It
            features a well-structured layout with an intuitive design, making
            it easy for users to explore the menu, learn about the restaurant,
            and find contact details.
          </p>
        </div>
        <div className="works-card">
          <img src="/src/assets/weather.png" alt="weather website image." />
          <h3>Weather</h3>
          <p>
            A dynamic weather app built with HTML, CSS, and JavaScript that
            fetches real-time weather data using the OpenWeather API. Users can
            easily check current weather conditions by entering a location, with
            a clean and responsive design.
          </p>
        </div>
        <div className="works-card">
          <img
            src="/src/assets/todo.png"
            alt="to do lists image."
          />
          <h3>To Do Lists</h3>
          <p>
            A simple and intuitive to-do list app built with HTML, CSS, and
            JavaScript. It allows users to add, edit, and delete tasks, with all
            data stored in localStorage for persistence. The app is fully
            responsive, providing a seamless user experience across devices.
          </p>
        </div>
        <div className="works-card">
          <img
            src=""
            alt="random quotes image."
          />
          <h3>Random Quotes</h3>
          <p>
          A fun and interactive random quote generator built with React. It fetches and displays inspiring quotes at the click of a button, offering a fresh quote every time. The app is simple, fast, and provides a smooth user experience with React's dynamic rendering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
