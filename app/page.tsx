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
    var r = document.getElementById("banner-wrapper-backdrop-filter");
    var yPos = 0 - window.pageYOffset/4;  
    s!.style.top = yPos + "%"; 
    var z = document.getElementById("carousel-wrapper");
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    z!.style.filter = `brightness(${filterValue})`;
    r!.style.filter = `brightness(${filterValue})`;
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
        <div className="banner-wrapper-backdrop-filter" id="banner-wrapper-backdrop-filter"></div>
        <div className="banner-div" id="banner-div">
          <div className="banner-grid">
            <Image
              src="https://imgur.com/voEgSSD.jpeg"
              height={300}
              width={300}
              alt='personal photo'
              className="banner-image"
              style={{float: 'right',
                      margin: 5}}
            />
            <div className="banner-headings-flex">
              <h1 className="banner-heading">
                Nickolas Ramirez
              </h1>
              <h2 className="banner-subheading">
                Web Developer - UI/UX Engineer
              </h2>
            </div>
            <p className="banner-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras ornare dui erat, et hendrerit augue consectetur et. 
            Nullam eleifend dapibus elit nec condimentum. 
            Aliquam posuere maximus libero, eu ultricies diam. 
            Nulla efficitur tempor velit sit amet sagittis. 
            Vivamus quis leo eget enim pretium tincidunt ut sed tortor. 
            Proin a euismod elit. Maecenas convallis at tortor quis sollicitudin. 
            Aliquam tincidunt malesuada dignissim. 
            Ut viverra augue mauris, a euismod mauris efficitur non.</p>
          </div>
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
      <div className="carousel-wrapper">
      </div>
      <style jsx>{`
          .banner-wrapper{
            height: 75vh;
            background-color: gray;
            width: 100vw;
            z-index: 1;
            overflow: visible;
            position: relative;
            backdrop-filter: brightness(0.1);
            display: grid;
            grid-template-areas: "q";
          }
          .banner-wrapper-backdrop-filter{
            background-color: gray;
            grid-area: "q";
            filter: brightness(0.1);
          }
          .banner-div{
            grid-area: "q";
            height: 100vh;
            width: 100vw;
            background-color: blue;
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,0) 100%);
            z-index: 2;
            position: absolute;
            top: 0;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .banner-grid{
            margin-top: 2rem;
            height: fit-content;
            width: 60%;
          }
          .banner-headings-flex{
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .banner-heading {
            font-size: 3rem;
          }
          .banner-subheading {
            color: #ccc;
          }
          .banner-image{
            
          }
          .banner-p{
            grid-area: c;
            
            font-size: 1.5rem;
          }
          .links-div{
            z-index: 1;
            height: fit-content;
            position: absolute;
            bottom: 0;
          }
          .carousel-wrapper{
            background-color: gray;
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
            background-color: green;
          }
          h1, h2, p{
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