import './index.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function Validation({ setIsLoggedIn, isLoggedIn, errorToast, successToast }) {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/register/confirm/${token}`)
            .then((res) => {
                if (res.ok) {
                    res.json().then((result) => {
                        localStorage.setItem('token', result.token);
                        const decoded = jwtDecode(result.token);
                        fetch(
                            `${process.env.REACT_APP_API_URL}/api/login/details/${decoded.username}`,
                        ).then((detailedResponse => {
                            if (detailedResponse.ok) {
                                detailedResponse.json().then((detailedResult) => {
                                    localStorage.setItem('firstName', detailedResult.firstName);
                                    localStorage.setItem('lastName', detailedResult.lastName);
                                    localStorage.setItem('id', detailedResult.id);
                                    localStorage.setItem('role', decoded.roles[0]);
                                    setIsLoggedIn(true);
                                    successToast('Login successful');
                                    navigate('/');
                                });
                            } else {
                                errorToast('Invalid server response.');
                            }
                        }))
                    });
                }
            });
    });

    return (
        <div className="validation">
            <div className="container d-flex justify-center">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
