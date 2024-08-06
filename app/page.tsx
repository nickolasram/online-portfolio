'use client';

import styles from "./page.module.css";
import {Stack} from '@mui/material';
import Image from 'next/image';




export default function Home() {
  function parallax() {
    var s = document.getElementById("banner-div");
  var yPos = 0 - window.pageYOffset/11;  
  s!.style.top = yPos + "%"; }

  window.addEventListener("scroll", function(){
      parallax(); 
  });

  return (
    <main>
      {/* <Stack>
        <p>asad</p>
        <p>asdad</p>
        <p>udqwi</p>
      </Stack> */}
      <div className="banner-wrapper">
        <div className="banner-div" id="banner-div">
          <h1 className="banner-heading">
            This is a welcoming
          </h1>
          <Image
            src="https://imgur.com/voEgSSD.jpeg"
            height={100}
            width={100}
            alt='personal photo'
          />
          <p className="banner-p">
            This is a paragraph containing details.
          </p>
        </div>
      </div>
      <div className="carousel-wrapper">

      </div>
      <style jsx>{`
          .banner-wrapper{
            height: 75vh;
            background-color: red;
            width: 100vw;
            z-index: 1;
            overflow: visible;
          }
          .banner-div{
            height: 100vh;
            width: 100vw;
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,0) 100%);
            z-index: 2;
            position: relative;
          }
          .carousel-wrapper{
            background-color: blue;
            width: 100vw;
            height: 75vh;
            z-index: 1;
          }
          h1, p{
            color: white;
          }
      `}</style>
    </main>
  );
}