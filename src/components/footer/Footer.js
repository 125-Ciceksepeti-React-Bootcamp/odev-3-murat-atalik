import React from 'react';
import './Footer.scss';
const themes = {
  light: {
    backgroundColor: '#202020',
    color: '#fff',
  },
  night: {
    backgroundColor: '#000000',
    color: 'rgb(100, 100, 100)',
  },
};
function Footer(props) {
  return (
    <div
      className="footer"
      style={props.theme === 'light' ? themes.light : themes.night}
    >
      <p>
        A wizard is never late, Frodo Baggins. Nor is he early. He arrives
        precisely when he means to.
      </p>
    </div>
  );
}
export default Footer;
