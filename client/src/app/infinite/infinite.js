'use client'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    useEffect(() => {
        const loadItems = async () => {
            if (loading) return;
            setLoading(true);
            try {
                const response = await axios.get('/recipes.json');
                setItems(prevItems => [...prevItems, ...response.data.items]);
                setPage(prevPage => prevPage + 1);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setPage(prevPage => prevPage + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, []);

    return (
        <div>
            {items.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
            {loading && <p>Загрузка...</p>}
            <div ref={loader} />
        </div>
    );
};

export default InfiniteScroll;
