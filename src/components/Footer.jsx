import "./../styles/footer.css"

function Footer() {
  return (
    <section className=" footer" id="contact">
      <div className="footer-name">
        <h4>Visit Romania</h4>
        <span>Hoia-Baciu Paranormal Forest</span>
      </div>
      <ul className="footer-table">
        <li className="footer-table-colm">
          <h5>ABAOUT</h5>
          <span>lorem</span>
          <span>lorem</span>
          <span>lorem</span>
        </li>
        <li className="footer-table-colm">
          <h5>BOOKS</h5>
          <span>lorem</span>
          <span>lorem</span>
          <span>lorem</span>
        </li>
        <li className="footer-table-colm">
          <h5>INSPIRATION</h5>
          <a href="https://www.pinterest.com/pin/5629568275643740/" target="_blank">Inspiration Website</a>
        </li>
        <li className="footer-table-colm">
          <h5>CONTACT</h5>
        </li>
      </ul>
    </section>
  );
}

export default Footer;