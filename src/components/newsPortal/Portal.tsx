import React from 'react';
import { useEffect } from 'react';
import Request from '../../common/request/request';
import Header from './header/Header';
import './Portal.less';

const Portal: React.FC<unknown> = () => {
    useEffect(() => {
        const getNews = async () => {
            try {
                console.log(await Request.get("https://lenta.ru/rss/"));
            } catch (e) { console.error(e); }
        };
        // const parser = new DOMParser();
        // const xmlDoc = parser.parseFromString(text, "text/xml");
        getNews();
    }, []);

    return <div className="portal-container"><Header /></div>
};

export default Portal