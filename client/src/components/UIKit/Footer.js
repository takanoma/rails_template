import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul className="l-footer">
                <a className="u-text__link-none" href="/" target="_blank" rel="noreferrer noopener">
                    <li>運営会社</li>
                </a>
                <a className="u-text__link-none" href="/" target="_blank" rel="noreferrer noopener">
                    <li>利用規約</li>
                </a>
                <a className="u-text__link-none" href="/" target="_blank" rel="noreferrer noopener">
                    <li>プライバシーポリシー</li>
                </a>
                <li>Copyright &copy; 2020 Orange Square</li>
            </ul>
        </footer>
    );
};

export default Footer;