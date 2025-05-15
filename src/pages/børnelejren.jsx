import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar";
import "../style/børnelejren.scss";
import { useEffect, useState } from "react";

const Børnelejren = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sponsors")) || [];
    setSponsors(stored);
  }, []);

  return (
    <>
      <NavBar />
      <div className="børnelejren-pic"></div>

      <div className="børnelejren-info">
        <h2 className="tak-title">Børnelejren takker</h2>
        <p>
          Børnelejren på Langeland takker alle, der på den ene eller anden måde har støttet
          foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård.
        </p>
      </div>

      <h3 className="tak-subtitle">En særlig tak til:</h3>

      <div className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <strong>{sponsor.name}</strong>
            <p>Støttetype: {sponsor.supportType}</p>
            <p>Beløb: {sponsor.amount} kr.</p>
          </div>
        ))}
      </div>


      <Footer />
    </>
  );
};

export default Børnelejren;
