import Link from 'next/link';
import avatar from '../../images/avatar.jpg';

const Header = () => (
  <header className="header">
    <div className="header__about">
      <img className="header__about-avatar" src={avatar.src} alt="Аватар"></img>
      <div className="header__about-text-block">
        <h2 className="header__about-text-block-welcome">
          Привет, я веб-разработчик!
        </h2>
        <h2 className="header__about-text-block-name">
          <span className="header__about-text-block-name-span">{`<`}</span>{' '}
          Луговской Максим{' '}
          <span className="header__about-text-block-name-span">{`/ >`}</span>
        </h2>
      </div>
    </div>
    <div className="header__about-navigation">
      <Link className="header__about-navigation-link" href="#projects">
        #<h3 className="header__about-navigation-link-title">Проекты</h3>
      </Link>
      <Link className="header__about-navigation-link" href="#about">
        #<h3 className="header__about-navigation-link-title">Обо мне</h3>
      </Link>
      <Link className="header__about-navigation-link" href="#skills">
        #<h3 className="header__about-navigation-link-title">Скиллы</h3>
      </Link>
      <Link className="header__about-navigation-link" href="#contacts">
        #<h3 className="header__about-navigation-link-title">Контакты</h3>
      </Link>
    </div>
  </header>
);

export default Header;
