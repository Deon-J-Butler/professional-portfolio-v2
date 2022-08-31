export function Footer() {
  const socialLinks = [
    {
      link: 'https://github.com/Deon-J-Butler',
      fontawesome: 'fa-brands fa-github',
    },
    {
      link: 'https://www.linkedin.com/in/deon-j-butler/',
      fontawesome: 'fa-brands fa-linkedin',
    },
  ];

  return (
    <div className='perma-footer'>
      <div className='footer-content'>
        <span>Let's Connect!</span>
      </div>
      {socialLinks.map((socialLink) => (
        <SocialLink socialLink={socialLink} key={socialLink.link} />
      ))}
    </div>
  );
}

function SocialLink(props) {
  const { link, fontawesome } = props.socialLink;

  return (
    <div className='footer-content'>
      <a href={link} className='text-decoration-none text-light'>
        <span className='fas'>
          <i className={fontawesome}></i>
        </span>
      </a>
    </div>
  );
}
