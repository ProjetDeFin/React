import './index.scss';

export default function Button({type = 'button', children, iconLeft = null, iconRight = null, classes = null}) {
    return (
        <button
            className={`${null !== classes ? classes : 'link'}`}
            type={type}
        >
            {null !== iconLeft ? iconLeft : ''}
            {children}
            {null !== iconRight ? iconRight : ''}
        </button>
    );
}
