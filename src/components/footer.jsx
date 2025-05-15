import "../style/footer.scss";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://www.facebook.com/Boernelejren/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="facebook-icon" />
        </a>
        <p>MobilePay: 27231</p>
        <p>Knud Bro Allé 1, st. mf., 3660 Stenløse</p>
        <p>Telefon: 38 71 12 60</p>
      </div>
    </footer>
  );
}
