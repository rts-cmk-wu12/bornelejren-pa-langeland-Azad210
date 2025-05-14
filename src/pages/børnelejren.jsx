import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar";
import "../style/børnelejren.scss";

const børnelejren = () => {
    return (
    <> 
    <NavBar />
     
      <div className="børnelejren-pic">
      </div>
<div className="børnelejren-info">
  <h2 className="tak-title">Børnelejren takker</h2>
  <p>
    Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
    foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
    – det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
    virksomhedssponsorer og donationer fra fonde.
  </p>
</div>

<h3 className="tak-subtitle">En særlig tak til:</h3>

<Footer />

    </>
    )
}
export default børnelejren


