import "../style/footer.scss";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer>
        <a href="https://www.facebook.com/Boernelejren/">
       <FaFacebook className="facebook-icon" />
       </a>
        <p>Mobilepay: 27231 </p>
      </footer>
    </>
  );
}
