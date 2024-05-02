import React from "react";
import { db } from "../connection";
import { collection, getDocs } from "firebase/firestore";
const HospitalDisplay = () => {
    const [userData, setUserData] = React.useState([]);

 React.useEffect(() => {
  getDocs(collection(db, "hospital")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserData(newData);
    console.log(userData, newData);
  });
    }, []);

  return (
    <div>
      <h1>Hospital Display</h1>
      <p>Displaying all the hospitals</p>
      {Object.values(userData).map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        
        </div>
      ))}
    </div>
  );
};
export default HospitalDisplay;
