import React, { useEffect, useState } from "react";
import axios from "axios";

export function getDataItems() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [popularNews, setPopularNews] = useState(null);
    const [recentNews, setRecentNews] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => response.data)
            .then(data => {
                setData(data);
                setPopularNews(data.slice(0).sort((a, b) => b.view_count - a.view_count));
                setRecentNews(data.slice(0).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        error,
        data,
        popularNews,
        recentNews,
    }
}


export function getDataItem(id) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/news?newsId=${id}`)
            .then(response => response.data)
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

