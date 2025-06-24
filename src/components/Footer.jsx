import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const footerStyles = {
  wrapper: {
    width: '100%',
    padding: '60px 80px 30px 80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '40px',
    backgroundColor: '#1C1C1C',
    margin: '0 auto',
    position: 'absolute',
    bottom: '0',
  },
  section: {
    width: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    fontSize: '14px',
    color: 'white',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: 'white',
    fontSize: '14px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  bottomBar: {
    width: '1280px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px 12px 12px',
    border: '1px solid #262626',
    borderRadius: '100px',
    color: 'white',
    fontSize: '14px',
  },
  socialIcons: {
    display: 'flex',
    gap: '16px',
  },
  iconCircle: {
    width: '32px',
    height: '32px',
    backgroundColor: '#C6FF00',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1C1C1C',
    fontSize: '14px',
  },
  policyLinks: {
    display: 'flex',
    gap: '16px',
    color: '#999',
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.wrapper}>
      {/* Logo and Navigation */}
      <div style={{ ...footerStyles.section, ...footerStyles.logoArea }}>
        <img src="/shape-30.png" alt="logo" width="32" height="32" />
        <h2 className="text-white font-bold text-lg">YourBanK</h2>
        <div style={footerStyles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">About</a>
          <a href="#">Security</a>
        </div>
      </div>

      {/* Contact Info */}
      <div style={{ ...footerStyles.section, ...footerStyles.contact }}>
        <div style={footerStyles.contactItem}>
          <FaEnvelope className="text-lime-400" />
          <span>hello@skillbridge.com</span>
        </div>
        <div style={footerStyles.contactItem}>
          <FaPhoneAlt className="text-lime-400" />
          <span>+91 91813 23 2309</span>
        </div>
        <div style={footerStyles.contactItem}>
          <FaMapMarkerAlt className="text-lime-400" />
          <span>Somewhere in the World</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={footerStyles.bottomBar}>
        <div style={footerStyles.socialIcons}>
          <div style={footerStyles.iconCircle}><FaFacebookF /></div>
          <div style={footerStyles.iconCircle}><FaTwitter /></div>
          <div style={footerStyles.iconCircle}><FaLinkedinIn /></div>
        </div>
        <div>YourBank All Rights Reserved</div>
        <div style={footerStyles.policyLinks}>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
