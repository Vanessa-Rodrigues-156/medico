import React, { useEffect, useState } from 'react';
import 'firebase/firestore';
import { db } from '../connection';

const DisplayData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        // Fetch data from Firestore collection
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users').get();
                const fetchedData = snapshot.docs.map((doc) => doc.data());
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from Firestore</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;