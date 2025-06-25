import React from 'react';

const styles = {
  containerOuter: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '1280px',
    height: '73px',
    marginTop: '30px',
    borderRadius: '100px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#262626',
    paddingTop: '14px',
    paddingRight: '24px',
    paddingBottom: '14px',
    paddingLeft: '24px',
    backgroundColor: '#1C1C1C',
    boxSizing: 'border-box',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navLink: {
    color: '#ffffff',
    fontSize: '14px',
    marginRight: '24px',
    textDecoration: 'none',
  },
};

const Navbar = () => {
  return (
    <nav style={styles.containerOuter}>
      <div style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/shape-30.png" alt="logo" width="32" height="32" />
          <span>YourBanK</span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#"
            className="px-4 h-10 flex items-center rounded-full bg-[#272727] text-sm font-medium text-white"
          >
            Home
          </a>
          <a href="#" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            Careers
          </a>
          <a href="/pages/About.js" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            About
          </a>
          <a href="#" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            Security
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-white hover:underline">Sign Up</button>
          <button className="px-5 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold shadow hover:bg-lime-300">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;