import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

export default () => {
    const { pathname } = useRouter();

    useEffect(() => {
        ReactGA.initialize('UA-19791121-2');
    }, []);

    useEffect(() => {
        ReactGA.pageview(pathname);
    }, [pathname]);

    return null;
};
