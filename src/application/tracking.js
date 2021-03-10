import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router';


export default () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('UA-19791121-2');
    }, []);

    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [location]);

    return null;
};
