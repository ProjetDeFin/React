import './index.scss';

export default function InputCustom({ type, placeholder, classes = null }) {
    return (
      <input className={null !== classes ? classes : ''} type={type} placeholder={placeholder} />
    );
}
