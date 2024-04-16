import './index.scss';

export default function Button({
                                type = 'button',
                                children, iconLeft = null,
                                iconRight = null,
                                classes = null,
                                onClick = null,
                                attributes = []
}) {
    return (
        <button
            onClick={onClick}
            {...attributes}
            className={`${null !== classes ? classes : 'link'} btn`}
            type={type}
        >
            {null !== iconLeft ? iconLeft : ''}
            {children}
            {null !== iconRight ? iconRight : ''}
        </button>
    );
}
