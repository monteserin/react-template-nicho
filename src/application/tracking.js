import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router';


export default () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('261679733');
    }, []);

    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [location]);

    return null;
};
