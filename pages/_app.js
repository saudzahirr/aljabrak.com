import { Header } from '../components'
import '../styles/globals.scss'
import React,{useState,useEffect} from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      
    </>
  ); 
}

export default MyApp
