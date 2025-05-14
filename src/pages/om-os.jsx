import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar";
import "../style/om-os.scss";
import køkken from "/Billeder/Fotos/køkken.jpg";
import legeplads from "/Billeder/Fotos/legeplads.jpg";

const om = () => {
    return (
    <> 
     <NavBar />
      <div className="frontpage-pic">
      <h1>Om os</h1>
    </div>

<div className="om-os-container">
    
  <div className="om-os-section">

    <img className="om-os-image" src={køkken} alt="Køkken" />
    <p>
      Børnelejren på Langeland er en velgørende, non-profit forening, som afholder
      finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver
      afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne
      omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og
      transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens
      side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.
      Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet. Medarbejderne fra
      institutionerne på foreningens lejre får ikke kolonitillæg udbetalt.
    </p>
  </div>

  <div className="om-os-section">
    <p>
      Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og
      aktiviteter. Vi har heldigvis erfaret, at mange virksomheder er villige til at bakke op
      omkring lejren, og vi håber på endnu flere private støttemedlemmer. Alle henvendelser
      vedrørende Foreningen Børnelejren på Langeland og Søgård Hovedgård bedes sendt til:
      <br /><strong>Knud Bro Alle 1, st. mf., 3660 Stenløse</strong><br />
      Telefon: <strong>38711260</strong><br />
      Foreningens formand er dagligt at træffe i sekretariatet.
    </p>
    <img className="om-os-image" src={legeplads} alt="Legeplads" />
  </div>
</div>
  <Footer />
    </>
    )
}
export default om