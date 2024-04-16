import './index.scss';

export default function Link({
  href,
  children,
  iconLeft = null,
  iconRight = null,
  classes = null,
  attributes = [],
}) {
  return (
    <a
      className={`link ${null !== classes ? classes : ''}`}
      href={href}
      {...attributes}
    >
      {null !== iconLeft ? iconLeft : ''}
      {children}
      {null !== iconRight ? iconRight : ''}
    </a>
  );
}
