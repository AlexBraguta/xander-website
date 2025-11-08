import SplashCursor from "./components/ui/SplashCursor.jsx";
import LetterGlitch from "./components/ui/letter-glitch.jsx";


function App() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={true}
        smooth={true}
        glitchColors={['#7287fd', '#2b377d', '#9dabfc']}
        /* glitchColors={['#5a85c7', '#89b4fa', '#b3d1fc']} */
        /* glitchColors={['#0f766e', '#14b8a6', '#5eead4']} */
      />
      
      <SplashCursor />

      <div className="outer-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="content-container" style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(114, 135, 253, 0.1)',
          /* backgroundColor: 'rgba(255, 255, 255, 0.1)', */
          borderRadius: '24px',
          padding: 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* Top padding: 10% */}
          <div style={{ height: '10%' }}></div>

          {/* Title: 10% */}
          <div style={{ height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className="title-text" style={{
              fontWeight: '300',
              letterSpacing: '0.2em',
              color: 'white',
              textAlign: 'center',
              margin: 0
            }}>
              XANDER
            </h1>
          </div>

          {/* Space between title and subtitle: 5% */}
          <div style={{ height: '5%' }}></div>

          {/* Subtitle: 8% */}
          <div style={{ height: '8%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="subtitle-text" style={{
              color: 'rgb(114, 135, 253, 0.8)',
              textAlign: 'center',
              margin: 0
            }}>
              a.k.a. alex, sanea, sancho
            </p>
          </div>

          {/* Space between subtitle and text: 5% */}
          <div style={{ height: '5%' }}></div>

          {/* Text: 30% */}
          <div className="body-text" style={{
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            lineHeight: '1.3'
          }}>
            {[
              'writing python code', 'using arch linux btw', 'learning data science',
              'reading any good books', 'observing crypto markets',
              'playing steam & playstation', 'enthusiast about open-source',
            ].map((t, i) => <p key={i} style={{ margin: 0 }}>{t}</p>)}
          </div>

          {/* Space between text and email button: 5% */}
          <div style={{ height: '5%' }}></div>

          {/* Email button: 10% */}
          <div style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a
              href="mailto:alex@braguta.com"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <button
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <svg
                  style={{ width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.7)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </a>
          </div>

          {/* Space between email button and copyright: 5% */}
          <div style={{ height: '5%' }}></div>

          {/* Copyright: 3% */}
          <div style={{ height: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="copyright-text" style={{
              color: 'rgba(255, 255, 255, 0.4)',
              textAlign: 'center',
              margin: 0
            }}>
              all rights reserved <a href='https://systematiq.one' target='_blank' rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>©</a> 2025
            </p>
          </div>

          {/* Bottom padding: 9% */}
          <div style={{ height: '9%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
