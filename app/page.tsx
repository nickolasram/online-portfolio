'use client';

import styles from "./page.module.css";
import {Stack} from '@mui/material';
import Image from 'next/image';
import { useState } from "react";


// filter: brightness(0.4);

export default function Home() {
  const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);

  function parallax() {
    var s = document.getElementById("banner-div");
    var yPos = 0 - window.pageYOffset/4;  
    s!.style.top = yPos + "%"; 
    var z = document.getElementById("carousel-wrapper");
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    z!.style.filter = `brightness(${filterValue})`;
    setPageYOffset(window.pageYOffset)
  }

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
        <div className="links-div">
          <p>Here will be links</p>
        </div>
      </div>
      <div className="carousel-wrapper" id="carousel-wrapper">
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
        </div>
      </div>
      <style jsx>{`
          .banner-wrapper{
            height: 75vh;
            background-color: red;
            width: 100vw;
            z-index: 1;
            overflow: visible;
            position: relative;
          }
          .banner-div{
            height: 100vh;
            width: 100vw;
            background-color: blue;
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,0) 100%);
            z-index: 2;
            position: absolute;
            top: 0;
          }
          .links-div{
            z-index: 1;
            height: fit-content;
            position: absolute;
            bottom: 0;
          }
          .carousel-wrapper{
            background-color: green;
            width: 100vw;
            height: 75vh;
            z-index: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            filter: brightness(0.1);
          }
          .carousel-item{
            height: 70vh;
            width: 20%;
            background-color: grey;
          }
          h1, p{
            color: white;
          }
      `}</style>
    </main>
  );
}
// .banner-wrapper{
//   height: 75vh;
//   background-color: red;
//   width: 100vw;
//   z-index: 1;
//   overflow: visible;
//   display: grid;
//   grid-template-rows: 150px 1fr;
// }
// .banner-div{
//   height: 100vh;
//   width: 100vw;
//   background-color: blue;
//   background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,0) 100%);
//   z-index: 2;
//   grid-row: 1;
// }
// .links-div{
//   z-index: 1;
//   height: fit-content;
//   grid-row: -1;
// }