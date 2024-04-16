import './index.scss';

export default function Item({ href, children, classes = null }) {
  return (
    <a
      className={`${null !== classes ? classes : 'navbar-item'} ${window.location.pathname === href ? 'active' : ''}`}
      href={href}
    >
      {children}
    </a>
  );
}
