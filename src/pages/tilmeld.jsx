import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar";
import "../style/tilmeld.scss";

const tilmeld = () => {
    return (
    <> 
        <NavBar />

        

     <div className="sponsor-info">
    <h2 className="sponsor-title">Tilmelding Som Sponsor</h2>
    <p>
        Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
        opdelt støttemulighederne i 3 kategorier:
    </p>

    <h3 className="sponsor-subtitle">Børnesponsorat</h3>
    <p>
        Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
        navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
        lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
        inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
        smågaver og slik til ét barn.
    </p>

    <h3 className="sponsor-subtitle">Lejrsponsorat</h3>
    <p>
        For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
        omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
        vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
        kan være løn til specialuddannet personale.
    </p>

    <h3 className="sponsor-subtitle">Støtte til foreningen</h3>
    <p>
        Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
        at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
        1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
        støttebeløb - store som små - er naturligvis velkomne.
    </p>
</div>


        <div className="sponsor-form">
            <h2>Tilmeld som sponsor</h2>
            <form>
               <div className="form-group">
  <label>Støttetype</label>
  <select required>
    <option value="">Vælg støttetype</option>
    <option value="forening">Støtte til foreningen</option>
    <option value="lejrsponsorat">Lejrsponsorat</option>
    <option value="boernesponsorat">Børnesponsorat</option>
  </select>
</div>

                <div className="form-group">
                    <label> Firmanavn</label>
                    <input type="text" required />
                </div>
                 <div className="form-group">
                    <label>Adresse</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div className="form-group">
                <label>Telefon</label>
                <input
                type="tel"
                required
                pattern="\d{8,}"
                title="Telefonnummeret skal bestå af mindst 8 cifre"
                 />
                </div>

                <div className="form-group">
                <label>Beløb</label>
                <input type="number" required min="0" />
                </div>
                <button type="submit">Send tilmelding</button>
            </form>
        </div>
        <Footer />
    </>
    )
}
export default tilmeld