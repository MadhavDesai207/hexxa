import React from 'react';
import './HexaLogo.css';

export const HexaLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
      {/* Grid background */}
      <g>
        {/* Horizontal grid lines */}
        <line className="grid-line" x1="0" y1="30" x2="400" y2="30" />
        <line className="grid-line" x1="0" y1="60" x2="400" y2="60" />
        <line className="grid-line" x1="0" y1="90" x2="400" y2="90" />
        <line className="grid-line" x1="0" y1="120" x2="400" y2="120" />
        <line className="grid-line" x1="0" y1="150" x2="400" y2="150" />
        <line className="grid-line" x1="0" y1="180" x2="400" y2="180" />
        <line className="grid-line" x1="0" y1="210" x2="400" y2="210" />
        <line className="grid-line" x1="0" y1="240" x2="400" y2="240" />
        <line className="grid-line" x1="0" y1="270" x2="400" y2="270" />
        
        {/* Vertical grid lines */}
        <line className="grid-line" x1="40" y1="0" x2="40" y2="300" />
        <line className="grid-line" x1="80" y1="0" x2="80" y2="300" />
        <line className="grid-line" x1="120" y1="0" x2="120" y2="300" />
        <line className="grid-line" x1="160" y1="0" x2="160" y2="300" />
        <line className="grid-line" x1="200" y1="0" x2="200" y2="300" />
        <line className="grid-line" x1="240" y1="0" x2="240" y2="300" />
        <line className="grid-line" x1="280" y1="0" x2="280" y2="300" />
        <line className="grid-line" x1="320" y1="0" x2="320" y2="300" />
        <line className="grid-line" x1="360" y1="0" x2="360" y2="300" />
      </g>
      
      {/* Binary text background */}
      <text x="40" y="40" className="binary">01001000 01000101 01011000 01011000 01000001</text>
      <text x="320" y="80" className="binary">10110010 10101101</text>
      <text x="180" y="220" className="binary">01001000 01000101</text>
      <text x="70" y="260" className="binary">01011000 01011000 01000001</text>
      <text x="280" y="160" className="binary">01000001 01001001</text>
      <text x="120" y="100" className="binary">11001010 10110110</text>
      <text x="240" y="280" className="binary">01001100 01001100 01010110</text>
      
      {/* Enhanced technical circuit background elements */}
      <path id="circuit" d="M20,60 H120 M280,60 H380 M20,240 H100 M300,240 H380 
                           M60,20 V100 M340,20 V100 M60,200 V280 M340,200 V280
                           M120,60 L160,100 H240 L280,60
                           M100,240 L160,180 H240 L300,240
                           M60,100 L100,140 H160 M240,140 H300 L340,100
                           M60,200 L100,160 H160 M240,160 H300 L340,200"/>
      
      {/* Additional technical circuit elements */}
      {/* CPU/IC component at top left */}
      <rect className="ic-component" x="30" y="30" width="40" height="40" rx="2" />
      <path className="cpu-lines" d="M35,35 H65 M35,40 H65 M35,45 H65 M35,50 H65 M35,55 H65 M35,60 H65" />
      
      {/* CPU/IC component at top right */}
      <rect className="ic-component" x="330" y="30" width="40" height="40" rx="2" />
      <path className="cpu-lines" d="M335,35 H365 M335,40 H365 M335,45 H365 M335,50 H365 M335,55 H365 M335,60 H365" />
      
      {/* CPU/IC component at bottom left */}
      <rect className="ic-component" x="30" y="230" width="40" height="40" rx="2" />
      <path className="cpu-lines" d="M35,235 H65 M35,240 H65 M35,245 H65 M35,250 H65 M35,255 H65 M35,260 H65" />
      
      {/* CPU/IC component at bottom right */}
      <rect className="ic-component" x="330" y="230" width="40" height="40" rx="2" />
      <path className="cpu-lines" d="M335,235 H365 M335,240 H365 M335,245 H365 M335,250 H365 M335,255 H365 M335,260 H365" />
      
      {/* Connection points between ICs */}
      <path className="cpu-lines" d="M70,50 H100 V80 H150 M330,50 H300 V80 H250
                               M70,250 H100 V220 H150 M330,250 H300 V220 H250" />
      
      {/* Additional connecting wires */}
      <path className="cpu-lines" d="M50,70 V90 H80 V110 H100 V140
                              M350,70 V90 H320 V110 H300 V140
                              M50,230 V210 H80 V190 H100 V160
                              M350,230 V210 H320 V190 H300 V160" />
      
      {/* Circuit nodes - original */}
      <circle className="circuit-node" cx="120" cy="60" r="2" />
      <circle className="circuit-node" cx="280" cy="60" r="2" />
      <circle className="circuit-node" cx="100" cy="240" r="2" />
      <circle className="circuit-node" cx="300" cy="240" r="2" />
      <circle className="circuit-node" cx="60" cy="100" r="2" />
      <circle className="circuit-node" cx="340" cy="100" r="2" />
      <circle className="circuit-node" cx="60" cy="200" r="2" />
      <circle className="circuit-node" cx="340" cy="200" r="2" />
      <circle className="circuit-node" cx="160" cy="100" r="2" />
      <circle className="circuit-node" cx="240" cy="100" r="2" />
      <circle className="circuit-node" cx="160" cy="180" r="2" />
      <circle className="circuit-node" cx="240" cy="180" r="2" />
      <circle className="circuit-node" cx="100" cy="140" r="2" />
      <circle className="circuit-node" cx="160" cy="140" r="2" />
      <circle className="circuit-node" cx="240" cy="140" r="2" />
      <circle className="circuit-node" cx="300" cy="140" r="2" />
      <circle className="circuit-node" cx="100" cy="160" r="2" />
      <circle className="circuit-node" cx="160" cy="160" r="2" />
      <circle className="circuit-node" cx="240" cy="160" r="2" />
      <circle className="circuit-node" cx="300" cy="160" r="2" />
      
      {/* Additional junction nodes */}
      <circle className="circuit-node" cx="50" cy="50" r="2" />
      <circle className="circuit-node" cx="350" cy="50" r="2" />
      <circle className="circuit-node" cx="50" cy="250" r="2" />
      <circle className="circuit-node" cx="350" cy="250" r="2" />
      <circle className="circuit-node" cx="100" cy="80" r="2" />
      <circle className="circuit-node" cx="300" cy="80" r="2" />
      <circle className="circuit-node" cx="100" cy="220" r="2" />
      <circle className="circuit-node" cx="300" cy="220" r="2" />
      <circle className="circuit-node" cx="150" cy="80" r="2" />
      <circle className="circuit-node" cx="250" cy="80" r="2" />
      <circle className="circuit-node" cx="150" cy="220" r="2" />
      <circle className="circuit-node" cx="250" cy="220" r="2" />
      <circle className="circuit-node" cx="80" cy="110" r="2" />
      <circle className="circuit-node" cx="320" cy="110" r="2" />
      <circle className="circuit-node" cx="80" cy="190" r="2" />
      <circle className="circuit-node" cx="320" cy="190" r="2" />
      
      {/* Animated data stream lines - primary with extended paths */}
      <path id="dataLine1" className="data-line" d="M20,170 C100,120 150,220 200,170 S300,120 380,170 M380,170 C460,120 510,220 560,170 S660,120 740,170 M740,170 C820,120 870,220 920,170 S1020,120 1100,170"/>
      
      <path id="dataLine2" className="data-line" d="M20,200 C80,140 180,240 220,170 S320,100 380,140 M380,140 C440,80 540,180 580,110 S680,40 740,80 M740,80 C800,20 900,120 940,50 S1040,-20 1100,20"/>
      
      <path id="dataLine3" className="data-line" d="M20,140 C60,200 140,120 240,200 S300,140 380,200 M380,200 C420,260 500,180 600,260 S660,200 740,260 M740,260 C780,320 860,240 960,320 S1020,260 1100,320"/>
      
      {/* Animated data stream lines - secondary with extended paths */}
      <path className="data-line2" d="M0,100 C40,90 80,110 120,100 S160,90 200,100 S240,110 280,100 S320,90 360,100 S400,110 440,100 M440,100 C480,90 520,110 560,100 S600,90 640,100 S680,110 720,100 S760,90 800,100 S840,110 880,100"/>
      
      <path className="data-line2" d="M0,190 C40,200 80,180 120,190 S160,200 200,190 S240,180 280,190 S320,200 360,190 S400,180 440,190 M440,190 C480,200 520,180 560,190 S600,200 640,190 S680,180 720,190 S760,200 800,190 S840,180 880,190"/>
      
      <path className="data-line2" d="M20,50 C80,70 120,30 160,50 S200,70 240,50 S280,30 320,50 S360,70 400,50 M400,50 C460,70 500,30 540,50 S580,70 620,50 S660,30 700,50 S740,70 780,50 S820,30 860,50"/>
      
      <path className="data-line2" d="M20,250 C80,230 120,270 160,250 S200,230 240,250 S280,270 320,250 S360,230 400,250 M400,250 C460,230 500,270 540,250 S580,230 620,250 S660,270 700,250 S740,230 780,250 S820,270 860,250"/>
      
      <g className="logo-container">
        {/* HE text - first line */}
        <text id="H" x="100" y="130" fontSize="80" className="letter">H</text>
        <text id="E" x="150" y="130" fontSize="80" className="letter">E</text>
        
        {/* XXA text - second line (with increased spacing) */}
        <text id="X1" x="140" y="215" fontSize="80" className="letter">X</text>
        <text id="X2" x="190" y="215" fontSize="80" className="letter">X</text>
        <text id="A" x="240" y="215" fontSize="80" className="letter">A</text>
      </g>
    </svg>
  );
};

