import Quill from '../../components/Form/Quill';
import { useEffect, useState } from 'react';

export default function Offers() {
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log(value);
    }, [value]);
  return (
    <div>
      <h1>Offers</h1>
        <Quill value={value} onChange={setValue}/>
    </div>
  );
}
