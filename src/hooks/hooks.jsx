import { useEffect, useState } from "react"; 

export const useStore = (key) => { 

 
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(null);
    }
  }, [key]); 

  
  const syncData = () => {
    const storedData = localStorage.getItem(key);
    setData(storedData ? JSON.parse(storedData) : null);
  };

  const getData = () => {
   
    return data;
  };

  const setStoredData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    syncData(); 
  };  
//   didnt understsnd

  const updateData = (value) => {
    const existingData = localStorage.getItem(key);

   
    const newData = existingData
      ? { ...JSON.parse(existingData), ...value }
      : value;

    localStorage.setItem(key, JSON.stringify(newData));
    syncData(); 
  };

  const removeData = () => {
    localStorage.removeItem(key);
    syncData(); 
  };

  const clearData = () => { 
    localStorage.clear();
    setData(null); 
  };

  return { data, getData, setStoredData, updateData, removeData, clearData };
};