import { Header } from '../components'
import '../styles/globals.scss'
import React,{useState,useEffect} from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer/>
    </>
  ); 
}

export default MyApp
