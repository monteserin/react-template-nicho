import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router';


export default () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('G-1X7WRTHTND');
    }, []);

    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [location]);

    return null;
};
