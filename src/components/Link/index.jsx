import './index.scss';

export default function Link({
    href,
    children,
    iconLeft = null,
    iconRight = null,
    classes = null,
    attributes = []
}) {
    return (
        <a
            className={`${null !== classes ? classes : 'link'}`}
            href={href}
            {...attributes}
        >
            {null !== iconLeft ? iconLeft : ''}
            {children}
            {null !== iconRight ? iconRight : ''}
        </a>
    );
}
