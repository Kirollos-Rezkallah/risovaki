import { LiaInstagram, LiaVk, LiaTelegram } from "react-icons/lia";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Рисоваки — ИП Сидоркина Ульяна Анатольевна
      </p>
      <p>ИНН 246106037933</p>

      <div className="footer-socials">
        <a
          href="https://vk.com/risowaki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="VK">
          <LiaVk color={"var(--color-accent)"} className="vk" />
        </a>
        <a
          href="https://www.instagram.com/risowaki?igsh=dHowYXd1NnhzejFr&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ fontSize: 24 }}>
          <LiaInstagram color={"var(--color-accent)"} />
        </a>
        <a
          href="https://t.me/myidea24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram">
          <LiaTelegram color={"var(--color-accent)"} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
