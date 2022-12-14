import { useState, useEffect } from "react";
const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);
  return {data};
};
export default useFetch;




// import supabase from "../config/supabaseClient";
//
// import React from 'react';
// import { useQuery } from 'react-query';
//
// function MyComponent() {
//   const supabase_URL = 'https://njnfyypwtoiiqclfvxqe.supabase.co'
//   const { data, isLoading, error } = useQuery('myData', () => fetch(supabase_URL));
//
//   if (isLoading) return 'Loading...';
//   if (error) return `Error: ${error.message}`;
//
//   return (
//     <div>
//       {data.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }
//
