const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__capture">
        {`© 2023 ${
          currentYear === 2023 ? `` : `- ${currentYear}`
        } Максим Луговской`}
      </p>
    </footer>
  );
};

export default Footer;
