import supabase from "../config/supabaseClient";


import React from 'react';
import { useQuery } from 'react-query';

function MyComponent() {
  const supabase_URL = 'https://njnfyypwtoiiqclfvxqe.supabase.co'
  const { data, isLoading, error } = useQuery('myData', () => fetch(supabase_URL));

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
