import { useParams } from 'react-router-dom';
import ApplyJob from '../../components/ApplyJob';

const ApplyJobWrapper = () => {
    const { id } = useParams();
    return <ApplyJob id={id} />;
};

export default ApplyJobWrapper;
