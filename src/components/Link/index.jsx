import './index.scss';

export default function Link({href, children, iconLeft = null, iconRight = null, classes = null}) {
    return (
        <a
            className={`${null !== classes ? classes : 'link'}`}
            href={href}
        >
            {null !== iconLeft ? iconLeft : ''}
            {children}
            {null !== iconRight ? iconRight : ''}
        </a>
    );
}
