'use client';

import styles from "./page.module.css";
import { Carousel } from "@/components/Carousel";
import Image from 'next/image';
import { useState } from "react";
import bart from '@/public/bart.jpg'
import suit from '@/public/suit.png'
import { Project } from "@/Models/Project";

const project1: Project = {title: 'a'}
const project2: Project = {title: 'b'}
const project3: Project = {title: 'c'}
const project4: Project = {title: 'd'}
const projectArray = [project1, project2, project3, project4, project1, project2, project3, project4]

export default function Home() {
  const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);

  function parallax() {
    var s = document.getElementById("banner-div");
    var r = document.getElementById("banner-wrapper-backdrop-filter");
    var yPos = 0 - window.pageYOffset/8;  
    s!.style.top = yPos + "%"; 
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    r!.style.filter = `brightness(${filterValue})`;
    setPageYOffset(window.pageYOffset)
  }

  window.addEventListener("scroll", function(){
      parallax(); 
  });

  return (
    <main>
      <div className="banner-wrapper">
      <div className="banner-div" id="banner-div">
          <div className="banner-grid">
            <Image
              src={bart}
              height={250}
              width={'auto'}
              alt='personal photo'
              className="banner-image"
              style={{float: 'right',
                      marginRight: 75,
                      marginLeft: 25,
                      marginBottom: 25
                    }}
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
        <div className="banner-wrapper-backdrop-filter" id="banner-wrapper-backdrop-filter">
          <h3 className="nav-big">Portfolio</h3>
          <div className="carousel-wrapper">
            <Carousel projects={projectArray} />
          </div>
        </div>
      </div>
      
      <div className="carousel-wrapper2">
      </div>
      <style jsx>{`
          .banner-wrapper{
            height: fit-content;
            background-color: #000851;
            width: 100vw;
            z-index: 1;
            overflow: visible;
            position: relative;
            display: grid;
            grid-template-areas: "q";
          }
          .banner-wrapper-backdrop-filter{
            background-color: #000851;
            grid-area: "q";
            filter: brightness(0.1);
            padding-top: 70vh;
          }
          .banner-div{
            grid-area: "q";
            width: 100vw;
            background-color: blue;
            background: linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 35%, rgba(15,15,15,0) 100%);
            z-index: 2;
            position: absolute;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .banner-grid{
            margin-top: 5rem;
            height: fit-content;
            width: 60%;
          }
          .banner-headings-flex{
            height: 125px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
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
            font-size: 1.5rem;
          }
          .nav-big{
            z-index: 1;
            height: fit-content;
            max-width: 1200px;
            margin: 0 auto;
            color: white;
            font-size: 2rem;
          }
          .carousel-wrapper{
            background-color: #000851;
            width: 100vw;
            height: 75vh;
            z-index: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .carousel-item{
            height: 70vh;
            width: 20%;
            background-color: green;
            border-radius: 15px;
          }
          h1, h2, p{
            color: white;
          }
          .carousel-wrapper2{
            height: 75vw;
            width: 100vw;
            background-color: pink;
          }
      `}</style>
    </main>
  );
}