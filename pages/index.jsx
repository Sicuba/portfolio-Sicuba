import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@nextui-org/react';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio - Josevaldo Sicuba</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      {/*   <link rel="icon" href="/favicon.ico" /> */}
      </Head>

       <header>
      <div className="container">
        <div className="header-grid">
          <section className="grid-align-center">
            <h1>
              <div>i&apos;m a</div>
              <span> Software </span>Engineer
              </h1>
          
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem animi minima delectus ullam necessitatibus
              recusandae quia! Veniam nihil natus earum, expedita est assumenda
              dignissimos, excepturi modi molestias, a reprehenderit voluptates!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="header-actions">
             <Link href="https://github.com/Sicuba"
                 >
                  <a target="_blank" style={{zIndex: 1000}}
                rel="noopener noreferrer">
                    <button className="black-button">
                      <img
                        src="/img/GitHub-Mark-Light-32px.png"
                        alt="Github"
                        width="20px"
                        className="icon"
                      />
                      <span>Github</span>
                    </button>
                  </a>
             </Link>
                
              <button className="blue-button">
             
                 
                <span>Projects</span>
              </button>
            </div>
          </section>
          <img
            src="/img/octocat-1664200929512.png"
            alt="Octocat"
              className="side-img"
              style={{zIndex:1000}}
          />
        </div>
        </div>
       
        
    </header>
      <main >
        <svg id="wave" style={{ transform: 'rotate(0deg)', transition: '0.3s' }} viewBox="0 0 1440 250" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(6, 65, 116, 1)" offset="0%"></stop><stop stopColor="rgba(42, 45, 56, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: '1' }} fill="url(#sw-gradient-0)" d="M0,100L40,120.8C80,142,160,183,240,187.5C320,192,400,158,480,141.7C560,125,640,125,720,108.3C800,92,880,58,960,45.8C1040,33,1120,42,1200,70.8C1280,100,1360,150,1440,145.8C1520,142,1600,83,1680,54.2C1760,25,1840,25,1920,20.8C2000,17,2080,8,2160,29.2C2240,50,2320,100,2400,116.7C2480,133,2560,117,2640,108.3C2720,100,2800,100,2880,100C2960,100,3040,100,3120,116.7C3200,133,3280,167,3360,170.8C3440,175,3520,150,3600,137.5C3680,125,3760,125,3840,108.3C3920,92,4000,58,4080,62.5C4160,67,4240,108,4320,116.7C4400,125,4480,100,4560,104.2C4640,108,4720,142,4800,158.3C4880,175,4960,175,5040,145.8C5120,117,5200,58,5280,33.3C5360,8,5440,17,5520,45.8C5600,75,5680,125,5720,150L5760,175L5760,250L5720,250C5680,250,5600,250,5520,250C5440,250,5360,250,5280,250C5200,250,5120,250,5040,250C4960,250,4880,250,4800,250C4720,250,4640,250,4560,250C4480,250,4400,250,4320,250C4240,250,4160,250,4080,250C4000,250,3920,250,3840,250C3760,250,3680,250,3600,250C3520,250,3440,250,3360,250C3280,250,3200,250,3120,250C3040,250,2960,250,2880,250C2800,250,2720,250,2640,250C2560,250,2480,250,2400,250C2320,250,2240,250,2160,250C2080,250,2000,250,1920,250C1840,250,1760,250,1680,250C1600,250,1520,250,1440,250C1360,250,1280,250,1200,250C1120,250,1040,250,960,250C880,250,800,250,720,250C640,250,560,250,480,250C400,250,320,250,240,250C160,250,80,250,40,250L0,250Z"></path></svg>
        <div className='bg'>
          <div className="projects-title">
              <h1>
                Projectos Web
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit? Consectetur illum eaque blanditiis earum.</p>
          </div>
       </div>
        
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
