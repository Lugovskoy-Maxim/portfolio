import email from '../../images/email.svg';
import tg from '../../images/tg.svg';
import phone from '../../images/phone.svg';
import github from '../../images/github.svg';
import vk from '../../images/vk.svg';

const Contacts = () => (
  <section className="contacts" id="contacts">
    <h1 className="contacts-title">Контакты</h1>
    <div className="contacts-container">
      <div className="contacts-info">
        <p className="contacts-info-title">Написать мне:</p>
        <ul className="contacts-info-list">
          <li className="contacts-info-list-item">
            <img
              src={email.src}
              alt="Почта"
              className="contacts-info-list-item-image"
            />
            <a
              href="mailto:lugovskou.myu@ya.ru"
              target="_blank"
              rel="noreferrer"
              className="contacts-info-list-item-link"
            >
              lugovskou.myu@ya.ru
            </a>
          </li>
          <li className="contacts-info-list-item">
            <img
              src={tg.src}
              alt="Телеграм"
              className="contacts-info-list-item-image"
            />
            <a
              href="https://t.me/MaximLugo"
              target="_blank"
              rel="noreferrer"
              className="contacts-info-list-item-link"
            >
              @MaximLugo
            </a>
          </li>
          <li className="contacts-info-list-item">
            <img
              src={phone.src}
              alt="Номер телефона"
              className="contacts-info-list-item-image"
            />
            <a
              href="tel:89934723166"
              target="_blank"
              rel="noreferrer"
              className="contacts-info-list-item-link"
            >
              +7(993) 472-31-66
            </a>
          </li>
        </ul>
      </div>
      <div className="contacts-media">
        <p className="contacts-media-title">Медия:</p>
        <ul className="contacts-media-list">
          <li className="contacts-media-list-item">
            <a
              href="https://github.com/Lugovskoy-Maxim"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github.src}
                alt="Профиль в Гитхаб"
                className="contacts-media-list-item-image"
              />
            </a>
          </li>
          <li className="contacts-media-list-item">
            <a href="https://vk.com/lugovskoi" target="_blank" rel="noreferrer">
              <img
                src={vk.src}
                alt="Профиль ВКонтакте"
                className="contacts-media-list-item-image"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Contacts;
