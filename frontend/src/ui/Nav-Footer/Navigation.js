export function Navigation() {
  const buttons = [
    {
      link: '/skills',
      type: 'Skills',
    },
    {
      link: '/portfolio',
      type: 'Portfolio',
    },
    {
      link: '/contact-me',
      type: 'Contact Me',
    },
  ];

  return (
    <>
      <div className='nav'>
        <a href='/' className='unstyled-link'>
          <i className='fa-solid fa-house home-button'></i>
        </a>
        <button className='dropdown-toggle' onClick={showDropdown}>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className='dropdown'>
          <div id='dropdown-content' className='dropdown-content'>
            {buttons.map((button) => (
              <NavButton button={button} key={button.type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function NavButton(props) {
  const { link, type } = props.button;

  return (
    <>
      <a href={link} className='unstyled-link'>
        <p className='nav-button'>{type}</p>
      </a>
    </>
  );
}

function showDropdown() {
  const target = document.getElementById('dropdown-content');
  if (target.className === 'dropdown-content') {
    target.className = 'show.dropdown-content';
  } else {
    target.className = 'dropdown-content';
  }
}
