import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    };
    fetchTours();
  }, []);
  return (
    <main>
      <section>
        <div className="tours">
          {tours.map((tour) => {
            return (
              <article className="single-tour" key={tour.id}>
                <img src={tour.image} alt="" className="img" />
                <span className="tour-price">{tour.price}</span>
                <div className="tour-info">
                  <h5>{tour.name}</h5>
                  <p>{tour.info}</p>
                  <button className="delete-btn btn-block btn">
                    not interrested
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default App;
