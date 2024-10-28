  'use client';

import { useEffect } from "react";

  
  export default function Movies()  {
  useEffect(()=>{
    fetch('https://dummyapi.online/api/movies')
    .then((response) => response.json())
    .then((json) => console.log(json));
  },[])

}