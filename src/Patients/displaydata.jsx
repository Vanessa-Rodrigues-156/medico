import React, { useEffect, useState } from 'react';
import { db } from '../connection';
import 'firebase/firestore';

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('data').get();
        const fetchedData = snapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
            <th>Field 3</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.field1}</td>
              <td>{item.field2}</td>
              <td>{item.field3}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;