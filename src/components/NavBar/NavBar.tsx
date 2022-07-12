import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__nav-logo nav-logo'>
          <Link href='/'>
            <h1 className='nav-logo__logo-item'>
              Event<span>App</span>
            </h1>
          </Link>
        </div>

        <div className='navbar__nav-menu'>
          <a href='' className='nav-menu__item'>
            Login
          </a>
          <a href='' className='nav-menu__item nav-menu__item--sign-up'>
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
