import {
  Mail, ShoppingBag, ExternalLink, Instagram, Copy, CheckCheck,
} from 'lucide-react';
import { useState } from 'react';
import { SITE_CONFIG } from '../config';

/* ─────────────────────────────────────────────────
   Comic Celebration Illustration – pure inline SVG
   Outside Arul Jothi Prime Enterprise, characters
   celebrate Instagram, carry shopping bags, and
   display speech bubbles.
───────────────────────────────────────────────── */
function ContactComicIllustration() {
  return (
    <div className="relative w-full select-none">
      <svg
        viewBox="0 0 1100 600"
        className="w-full h-auto drop-shadow-2xl"
        aria-label="Comic celebration illustration outside Arul Jothi Prime Enterprise"
      >
        <defs>
          {/* Sky gradient – deep night with teal tinge */}
          <linearGradient id="cSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050015" />
            <stop offset="70%" stopColor="#080a20" />
            <stop offset="100%" stopColor="#0a0e18" />
          </linearGradient>
          {/* Ground */}
          <linearGradient id="cGround" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0a00" />
            <stop offset="100%" stopColor="#0a0500" />
          </linearGradient>
          {/* Instagram gradient */}
          <radialGradient id="igGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f9ce34" />
            <stop offset="25%"  stopColor="#ee2a7b" />
            <stop offset="60%"  stopColor="#6228d7" />
            <stop offset="100%" stopColor="#4a00a0" />
          </radialGradient>
          {/* Building sign glow */}
          <radialGradient id="cSignGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ff6a00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff6a00" stopOpacity="0"   />
          </radialGradient>
          {/* Amazon orange */}
          <radialGradient id="amzGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ff9900" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff9900" stopOpacity="0"   />
          </radialGradient>
          {/* Filters */}
          <filter id="glow0">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softShadow">
            <feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.5"/>
          </filter>
        </defs>

        {/* ── BG ── */}
        <rect width="1100" height="600" fill="url(#cSky)" rx="18"/>

        {/* Stars */}
        {[
          [50,25],[130,40],[220,18],[320,35],[450,22],[570,45],[700,20],[820,38],[950,28],[1050,42],
          [80,70],[200,62],[380,55],[500,75],[650,60],[780,72],[900,58],[1000,68],[170,90],[740,85],
        ].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%3===0?2:1.2} fill="#fff" opacity={0.4+((i*0.07)%0.5)}/>
        ))}

        {/* ── BUILDING ── */}
        {/* Main walls */}
        <rect x="280" y="100" width="540" height="440" rx="4" fill="#0d1a2e" stroke="#00d4ff" strokeWidth="3"/>
        {/* Roof */}
        <polygon points="260,105 550,38 840,105" fill="#080f1e" stroke="#ff6a00" strokeWidth="3"/>
        <polygon points="280,105 550,48 820,105" fill="#060810"/>
        {/* Roof accent line */}
        <line x1="280" y1="150" x2="820" y2="150" stroke="#00d4ff" strokeWidth="2" opacity="0.7"/>

        {/* Sign board */}
        <rect x="340" y="55" width="420" height="56" rx="10" fill="#1a0800" stroke="#ff6a00" strokeWidth="3"/>
        <ellipse cx="550" cy="83" rx="200" ry="25" fill="url(#cSignGlow)"/>
        <text x="550" y="90" textAnchor="middle" fontFamily="Orbitron,sans-serif" fontWeight="900" fontSize="18" fill="#ff6a00" filter="url(#glow0)">
          Arul Jothi Prime Enterprise
        </text>

        {/* Shop windows */}
        {/* Left window */}
        <rect x="310" y="175" width="150" height="120" rx="6" fill="#061020" stroke="#00d4ff" strokeWidth="2"/>
        <rect x="312" y="177" width="146" height="116" rx="5" fill="#050e1c"/>
        {/* window shelves */}
        <line x1="310" y1="220" x2="460" y2="220" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5"/>
        <line x1="310" y1="260" x2="460" y2="260" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5"/>
        {/* products in window */}
        <rect x="320" y="184" width="28" height="32" rx="4" fill="#ff6a00"/>
        <rect x="355" y="184" width="28" height="32" rx="4" fill="#00d4ff"/>
        <rect x="390" y="184" width="24" height="32" rx="4" fill="#bf00ff"/>
        <rect x="420" y="184" width="28" height="32" rx="4" fill="#00ff88"/>
        <rect x="318" y="228" width="32" height="26" rx="3" fill="#0080ff"/>
        {[0,1,2,3].map(i=><rect key={i} x={320+i*7} y={230} width="5" height="4" rx="1" fill="#fff" opacity="0.5"/>)}
        <rect x="358" y="228" width="32" height="26" rx="3" fill="#ff4500"/>
        {[0,1,2,3].map(i=><rect key={i} x={360+i*7} y={230} width="5" height="4" rx="1" fill="#fff" opacity="0.4"/>)}
        <rect x="398" y="228" width="52" height="22" rx="4" fill="#222"/>
        <text x="424" y="243" textAnchor="middle" fontSize="10" fill="#ff6a00" fontFamily="Rajdhani,sans-serif" fontWeight="700">RC CAR</text>
        <text x="385" y="285" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10" fill="#00d4ff">TECH SHOP</text>

        {/* Right window */}
        <rect x="640" y="175" width="150" height="120" rx="6" fill="#061020" stroke="#ff6a00" strokeWidth="2"/>
        <rect x="642" y="177" width="146" height="116" rx="5" fill="#050e1c"/>
        <line x1="640" y1="220" x2="790" y2="220" stroke="#ff6a00" strokeWidth="1.5" opacity="0.5"/>
        <line x1="640" y1="260" x2="790" y2="260" stroke="#ff6a00" strokeWidth="1.5" opacity="0.5"/>
        {/* headset */}
        <path d="M648 205 Q668 190 688 205 L688 218 Q682 222 668 220 Q655 222 648 218 Z" fill="#ff6a00"/>
        <rect x="656" y="220" width="10" height="10" rx="2" fill="#cc4400"/>
        {/* action figures */}
        {[650,672,694,716,738,760].map((x,i)=>(
          <g key={i}>
            <circle cx={x} cy={242} r={6} fill={['#ff4500','#00d4ff','#bf00ff','#ff6a00','#00ffcc','#ffb300'][i]}/>
            <rect x={x-4} y={248} width="8" height="10" rx="2" fill={['#cc2200','#0077aa','#880099','#cc4400','#009966','#cc8800'][i]}/>
          </g>
        ))}
        {/* USB cable display */}
        <path d="M648 272 Q668 265 688 272 Q698 275 698 280 Q698 285 688 285 L648 285 Q640 285 640 280 Q640 275 648 272 Z" fill="#00d4ff" opacity="0.9"/>
        <text x="670" y="282" textAnchor="middle" fontSize="9" fill="#000" fontFamily="Rajdhani,sans-serif" fontWeight="700">USB/HDMI</text>
        <text x="715" y="292" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10" fill="#ff6a00">TOYS</text>

        {/* Door */}
        <rect x="490" y="390" width="120" height="150" rx="4" fill="#061828" stroke="#00d4ff" strokeWidth="2.5"/>
        <rect x="495" y="395" width="52" height="140" rx="2" fill="#040e1e"/>
        <rect x="553" y="395" width="52" height="140" rx="2" fill="#040e1e"/>
        <circle cx="550" cy="470" r="5" fill="#ff6a00"/>
        <circle cx="555" cy="470" r="5" fill="#ff6a00"/>
        <text x="550" y="545" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10" fill="#00d4ff">OPEN</text>

        {/* Neon sign strips */}
        <rect x="282" y="330" width="536" height="6" rx="3" fill="#ff6a00" opacity="0.3" filter="url(#glow0)"/>
        <rect x="282" y="330" width="536" height="2" rx="1" fill="#ff6a00" opacity="0.8"/>

        {/* ── GIANT INSTAGRAM LOGO (centre-top sky) ── */}
        <rect x="468" y="120" width="164" height="164" rx="38" fill="url(#igGrad)" filter="url(#glow1)"/>
        <rect x="480" y="132" width="140" height="140" rx="30" fill="none" stroke="#fff" strokeWidth="9" opacity="0.9"/>
        <circle cx="550" cy="202" r="42" fill="none" stroke="#fff" strokeWidth="9" opacity="0.9"/>
        <circle cx="596" cy="152" r="12" fill="#fff" opacity="0.95"/>
        {/* Glow halo */}
        <circle cx="550" cy="202" r="85" fill="url(#igGrad)" opacity="0.15"/>

        {/* Speed lines from Instagram logo */}
        {Array.from({length:16},(_,i) => {
          const a = (i*22.5) * Math.PI/180;
          const r1=90, r2=130;
          return <line key={i} x1={550+Math.cos(a)*r1} y1={202+Math.sin(a)*r1} x2={550+Math.cos(a)*r2} y2={202+Math.sin(a)*r2} stroke="#ee2a7b" strokeWidth={i%2===0?2.5:1.5} opacity="0.6"/>;
        })}

        {/* ── GROUND ── */}
        <rect x="0" y="530" width="1100" height="70" rx="0" fill="url(#cGround)"/>
        <line x1="0" y1="530" x2="1100" y2="530" stroke="#ff6a00" strokeWidth="2.5" opacity="0.5"/>
        {/* Pavement tiles */}
        {Array.from({length:22},(_,i)=>(
          <line key={i} x1={i*52} y1={530} x2={i*52} y2={600} stroke="#1a0e00" strokeWidth="1" opacity="0.6"/>
        ))}

        {/* ── CHARACTER 1: TALL GREEN ALIEN – far left, raising phone ── */}
        {/* legs */}
        <line x1="85" y1="490" x2="78" y2="528" stroke="#00cc88" strokeWidth="10" strokeLinecap="round"/>
        <line x1="105" y1="490" x2="112" y2="528" stroke="#00cc88" strokeWidth="10" strokeLinecap="round"/>
        {/* body */}
        <ellipse cx="95" cy="460" rx="26" ry="34" fill="#00cc88" stroke="#007755" strokeWidth="2"/>
        {/* arm – left raised holding phone */}
        <line x1="69" y1="450" x2="48" y2="418" stroke="#00cc88" strokeWidth="9" strokeLinecap="round"/>
        {/* phone */}
        <rect x="34" y="398" width="22" height="34" rx="4" fill="#111" stroke="#ee2a7b" strokeWidth="2"/>
        <rect x="36" y="400" width="18" height="28" rx="2" fill="#1a0020"/>
        {/* IG icon on phone screen */}
        <rect x="37" y="401" width="16" height="16" rx="4" fill="url(#igGrad)" opacity="0.9"/>
        {/* arm – right down with bag */}
        <line x1="121" y1="455" x2="140" y2="475" stroke="#00cc88" strokeWidth="9" strokeLinecap="round"/>
        {/* shopping bag */}
        <rect x="134" y="468" width="28" height="34" rx="5" fill="#ff6a00" stroke="#cc4400" strokeWidth="2"/>
        <path d="M137 468 Q137 461 148 461 Q159 461 159 468" fill="none" stroke="#cc4400" strokeWidth="2"/>
        <text x="148" y="488" textAnchor="middle" fontSize="9" fill="#fff">🎮</text>
        {/* head */}
        <ellipse cx="95" cy="420" rx="22" ry="20" fill="#00ff99" stroke="#007755" strokeWidth="2"/>
        {/* eyes */}
        <ellipse cx="87" cy="415" rx="6" ry="8" fill="#000"/>
        <ellipse cx="103" cy="415" rx="6" ry="8" fill="#000"/>
        <circle cx="89" cy="413" r="3" fill="#00ffff"/>
        <circle cx="105" cy="413" r="3" fill="#00ffff"/>
        {/* excited mouth */}
        <path d="M87 424 Q95 431 103 424" stroke="#007755" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* antennae */}
        <line x1="89" y1="400" x2="84" y2="385" stroke="#00cc88" strokeWidth="2"/>
        <circle cx="83" cy="383" r="4" fill="#00ffff" filter="url(#glow0)"/>
        <line x1="101" y1="400" x2="106" y2="385" stroke="#00cc88" strokeWidth="2"/>
        <circle cx="107" cy="383" r="4" fill="#00ffff" filter="url(#glow0)"/>

        {/* ── CHARACTER 2: ASTRONAUT – centre-left ── */}
        {/* legs */}
        <rect x="210" y="490" width="16" height="38" rx="6" fill="#d0d8e0" stroke="#8899aa" strokeWidth="1.5"/>
        <rect x="238" y="490" width="16" height="38" rx="6" fill="#d0d8e0" stroke="#8899aa" strokeWidth="1.5"/>
        {/* body suit */}
        <rect x="198" y="430" width="68" height="64" rx="14" fill="#c8d4de" stroke="#8899aa" strokeWidth="2"/>
        {/* chest pack */}
        <rect x="212" y="445" width="40" height="28" rx="5" fill="#889aaa" stroke="#667788" strokeWidth="1.5"/>
        {[0,1,2].map(i=><circle key={i} cx={220+i*12} cy={460} r={4} fill={['#ff4500','#00d4ff','#00ff88'][i]} filter="url(#glow0)"/>)}
        {/* arms */}
        <rect x="176" y="435" width="22" height="48" rx="9" fill="#c8d4de" stroke="#8899aa" strokeWidth="1.5"/>
        <rect x="266" y="435" width="22" height="48" rx="9" fill="#c8d4de" stroke="#8899aa" strokeWidth="1.5"/>
        {/* glove holding bag */}
        <rect x="267" y="478" width="22" height="14" rx="6" fill="#889aaa"/>
        <rect x="270" y="484" width="28" height="36" rx="5" fill="#bf00ff" stroke="#7700aa" strokeWidth="2"/>
        <path d="M273 484 Q273 477 284 477 Q295 477 295 484" fill="none" stroke="#7700aa" strokeWidth="2"/>
        <text x="284" y="503" textAnchor="middle" fontSize="9" fill="#fff">⌨️</text>
        {/* helmet */}
        <ellipse cx="232" cy="415" rx="36" ry="34" fill="#c8d4de" stroke="#8899aa" strokeWidth="2.5"/>
        {/* visor */}
        <ellipse cx="232" cy="415" rx="24" ry="22" fill="#001830" stroke="#0088bb" strokeWidth="2"/>
        {/* face in visor */}
        <circle cx="225" cy="412" r="4" fill="#fff" opacity="0.8"/>
        <circle cx="239" cy="412" r="4" fill="#fff" opacity="0.8"/>
        <path d="M225 422 Q232 428 239 422" stroke="#00d4ff" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* helmet glow */}
        <ellipse cx="232" cy="415" rx="24" ry="22" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.4"/>

        {/* ── CHARACTER 3: ROBOT – centre, hands up ── */}
        {/* legs */}
        <rect x="387" y="492" width="16" height="36" rx="5" fill="#0055bb" stroke="#003388" strokeWidth="1.5"/>
        <rect x="415" y="492" width="16" height="36" rx="5" fill="#0055bb" stroke="#003388" strokeWidth="1.5"/>
        {/* body */}
        <rect x="374" y="426" width="70" height="68" rx="10" fill="#0066cc" stroke="#003888" strokeWidth="2.5"/>
        {/* belly lights */}
        {[0,1,2,3].map(i=><rect key={i} x={381+i*15} y={450} width="10" height="8" rx="2" fill={['#ff6a00','#00d4ff','#ff006e','#00ff88'][i]} filter="url(#glow0)"/>)}
        {/* speaker grill */}
        {[0,1,2,3,4].map(i=><line key={i} x1={382} y1={464+i*5} x2={434} y2={464+i*5} stroke="#003888" strokeWidth="1.5" opacity="0.5"/>)}
        {/* arms – both raised up */}
        <rect x="352" y="428" width="18" height="52" rx="8" fill="#0066cc" stroke="#003888" strokeWidth="1.5"/>
        <rect x="350" y="390" width="20" height="36" rx="9" fill="#0055bb" stroke="#003888" strokeWidth="1.5"/>
        <rect x="448" y="428" width="18" height="52" rx="8" fill="#0066cc" stroke="#003888" strokeWidth="1.5"/>
        <rect x="448" y="390" width="20" height="36" rx="9" fill="#0055bb" stroke="#003888" strokeWidth="1.5"/>
        {/* head */}
        <rect x="376" y="382" width="66" height="48" rx="10" fill="#0088ff" stroke="#003888" strokeWidth="2.5"/>
        {/* visor */}
        <rect x="384" y="392" width="50" height="20" rx="6" fill="#001a3a"/>
        <rect x="386" y="394" width="22" height="16" rx="4" fill="#ff0000" opacity="0.85"/>
        <rect x="412" y="394" width="20" height="16" rx="4" fill="#ff0000" opacity="0.85"/>
        {/* antenna */}
        <line x1="409" y1="382" x2="409" y2="362" stroke="#0088ff" strokeWidth="4"/>
        <circle cx="409" cy="358" r="7" fill="#00d4ff" filter="url(#glow1)"/>

        {/* ── CHARACTER 4: CHILD GAMER – centre-right ── */}
        {/* legs */}
        <line x1="632" y1="498" x2="625" y2="528" stroke="#224488" strokeWidth="9" strokeLinecap="round"/>
        <line x1="648" y1="498" x2="655" y2="528" stroke="#224488" strokeWidth="9" strokeLinecap="round"/>
        {/* body */}
        <ellipse cx="640" cy="470" rx="22" ry="30" fill="#ff4500" stroke="#cc2200" strokeWidth="2"/>
        {/* arms */}
        <line x1="618" y1="462" x2="600" y2="448" stroke="#f5c09a" strokeWidth="8" strokeLinecap="round"/>
        <line x1="662" y1="462" x2="680" y2="448" stroke="#f5c09a" strokeWidth="8" strokeLinecap="round"/>
        {/* bag in right hand */}
        <rect x="674" y="440" width="26" height="32" rx="5" fill="#00d4ff" stroke="#0088bb" strokeWidth="2"/>
        <path d="M677 440 Q677 433 687 433 Q697 433 697 440" fill="none" stroke="#0088bb" strokeWidth="2"/>
        <text x="687" y="459" textAnchor="middle" fontSize="9" fill="#000">🖱️</text>
        {/* head */}
        <circle cx="640" cy="438" r="20" fill="#f5c09a" stroke="#cc8866" strokeWidth="2"/>
        {/* eyes – wide excited */}
        <circle cx="633" cy="435" r="4" fill="#333"/>
        <circle cx="647" cy="435" r="4" fill="#333"/>
        <circle cx="634" cy="434" r="1.5" fill="#fff"/>
        <circle cx="648" cy="434" r="1.5" fill="#fff"/>
        {/* big smile */}
        <path d="M630 444 Q640 452 650 444" stroke="#cc8866" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* hat */}
        <ellipse cx="640" cy="419" rx="22" ry="6" fill="#0055aa"/>
        <rect x="622" y="400" width="36" height="20" rx="6" fill="#0066cc"/>
        <text x="640" y="414" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Rajdhani,sans-serif" fontWeight="700">GAMER</text>

        {/* ── CHARACTER 5: PURPLE ALIEN – right, holding shopping bags both hands ── */}
        {/* legs */}
        <line x1="820" y1="492" x2="812" y2="528" stroke="#9900cc" strokeWidth="10" strokeLinecap="round"/>
        <line x1="842" y1="492" x2="850" y2="528" stroke="#9900cc" strokeWidth="10" strokeLinecap="round"/>
        {/* body */}
        <ellipse cx="831" cy="460" rx="28" ry="36" fill="#bf00ff" stroke="#7700aa" strokeWidth="2.5"/>
        {/* left arm + bag */}
        <line x1="803" y1="452" x2="780" y2="468" stroke="#9900cc" strokeWidth="9" strokeLinecap="round"/>
        <rect x="762" y="460" width="28" height="36" rx="5" fill="#ff6a00" stroke="#cc4400" strokeWidth="2"/>
        <path d="M765 460 Q765 452 776 452 Q787 452 787 460" fill="none" stroke="#cc4400" strokeWidth="2"/>
        <text x="776" y="480" textAnchor="middle" fontSize="10" fill="#fff">🎧</text>
        {/* right arm + bag */}
        <line x1="859" y1="452" x2="882" y2="468" stroke="#9900cc" strokeWidth="9" strokeLinecap="round"/>
        <rect x="882" y="460" width="28" height="36" rx="5" fill="#00d4ff" stroke="#0088bb" strokeWidth="2"/>
        <path d="M885 460 Q885 452 896 452 Q907 452 907 460" fill="none" stroke="#0088bb" strokeWidth="2"/>
        <text x="896" y="480" textAnchor="middle" fontSize="10" fill="#000">🚗</text>
        {/* head */}
        <ellipse cx="831" cy="422" rx="26" ry="24" fill="#dd44ff" stroke="#7700aa" strokeWidth="2"/>
        {/* eyes */}
        <ellipse cx="822" cy="418" rx="7" ry="9" fill="#000"/>
        <ellipse cx="840" cy="418" rx="7" ry="9" fill="#000"/>
        <circle cx="824" cy="416" r="3" fill="#ffff00" opacity="0.9"/>
        <circle cx="842" cy="416" r="3" fill="#ffff00" opacity="0.9"/>
        {/* smile */}
        <path d="M822 430 Q831 437 840 430" stroke="#7700aa" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* antennae */}
        <line x1="823" y1="398" x2="817" y2="381" stroke="#bf00ff" strokeWidth="2.5"/>
        <circle cx="816" cy="378" r="5" fill="#ffff00" filter="url(#glow0)"/>
        <line x1="839" y1="398" x2="845" y2="381" stroke="#bf00ff" strokeWidth="2.5"/>
        <circle cx="846" cy="378" r="5" fill="#ffff00" filter="url(#glow0)"/>

        {/* ── CHARACTER 6: FAR-RIGHT SMALL ALIEN raising phone ── */}
        <line x1="1008" y1="494" x2="1002" y2="528" stroke="#00aa66" strokeWidth="8" strokeLinecap="round"/>
        <line x1="1024" y1="494" x2="1030" y2="528" stroke="#00aa66" strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="1016" cy="465" rx="22" ry="30" fill="#00cc77" stroke="#007744" strokeWidth="2"/>
        <line x1="994" y1="456" x2="972" y2="440" stroke="#00aa66" strokeWidth="8" strokeLinecap="round"/>
        <rect x="956" y="422" width="20" height="30" rx="4" fill="#111" stroke="#ee2a7b" strokeWidth="2"/>
        <rect x="958" y="424" width="16" height="24" rx="2" fill="#1a0020"/>
        <rect x="959" y="425" width="14" height="14" rx="3" fill="url(#igGrad)" opacity="0.9"/>
        <line x1="1038" y1="456" x2="1058" y2="468" stroke="#00aa66" strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="1016" cy="436" rx="20" ry="18" fill="#00ff88" stroke="#007744" strokeWidth="2"/>
        <ellipse cx="1009" cy="432" rx="5" ry="7" fill="#000"/>
        <ellipse cx="1023" cy="432" rx="5" ry="7" fill="#000"/>
        <circle cx="1011" cy="430" r="2.5" fill="#00ffff"/>
        <circle cx="1025" cy="430" r="2.5" fill="#00ffff"/>
        <path d="M1009 441 Q1016 447 1023 441" stroke="#007744" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <line x1="1010" y1="418" x2="1005" y2="404" stroke="#00cc77" strokeWidth="2"/>
        <circle cx="1004" cy="401" r="4" fill="#00ffff" filter="url(#glow0)"/>
        <line x1="1022" y1="418" x2="1027" y2="404" stroke="#00cc77" strokeWidth="2"/>
        <circle cx="1028" cy="401" r="4" fill="#00ffff" filter="url(#glow0)"/>

        {/* ── COMIC ACTION EFFECTS ── */}
        {/* Top-left starburst – NEW */}
        {Array.from({length:10},(_,i)=>{ const a=(i*36)*Math.PI/180; return <line key={i} x1={155} y1={105} x2={155+Math.cos(a)*22} y2={105+Math.sin(a)*22} stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round"/>; })}
        <circle cx="155" cy="105" r="12" fill="#ff6a00"/>
        <text x="155" y="109" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Rajdhani,sans-serif" fontWeight="800">SALE!</text>

        {/* Top-right starburst – HOT */}
        {Array.from({length:10},(_,i)=>{ const a=(i*36)*Math.PI/180; return <line key={i} x1={945} y1={108} x2={945+Math.cos(a)*20} y2={108+Math.sin(a)*20} stroke="#00d4ff" strokeWidth="2" strokeLinecap="round"/>; })}
        <circle cx="945" cy="108" r="11" fill="#00d4ff"/>
        <text x="945" y="112" textAnchor="middle" fontSize="8" fill="#000" fontFamily="Rajdhani,sans-serif" fontWeight="800">HOT!</text>

        {/* Lightning bolts */}
        <path d="M168 340 L185 318 L178 335 L198 313" stroke="#ffff00" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#glow0)" opacity="0.95"/>
        <path d="M930 338 L948 316 L941 333 L961 311" stroke="#ffff00" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#glow0)" opacity="0.95"/>

        {/* ZAP speed lines – left side */}
        {[0,1,2,3,4].map(i=>(
          <line key={i} x1={30} y1={300+i*18} x2={95+i*5} y2={300+i*18} stroke="#ee2a7b" strokeWidth={2-i*0.3} opacity={0.7-i*0.1} strokeLinecap="round"/>
        ))}
        {/* ZAP speed lines – right side */}
        {[0,1,2,3,4].map(i=>(
          <line key={i} x1={1070} y1={300+i*18} x2={1005-i*5} y2={300+i*18} stroke="#00d4ff" strokeWidth={2-i*0.3} opacity={0.7-i*0.1} strokeLinecap="round"/>
        ))}

        {/* ── SPEECH BUBBLES ── */}
        {/* Bubble 1 – above alien 1 */}
        <rect x="10" y="330" width="195" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="75,374 65,392 95,374" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="108" y="350" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ee2a7b">Follow Arul Jothi</text>
        <text x="108" y="365" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#6228d7">Prime on Instagram!</text>

        {/* Bubble 2 – above astronaut */}
        <rect x="150" y="355" width="195" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="230,399 220,415 250,399" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="248" y="374" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#111">Message us for</text>
        <text x="248" y="389" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#0066cc">product inquiries! 📩</text>

        {/* Bubble 3 – above robot */}
        <rect x="335" y="320" width="195" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="415,364 405,382 435,364" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="433" y="340" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ff6a00">Best Gaming</text>
        <text x="433" y="355" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#0066cc">Accessories in Galaxy!</text>

        {/* Bubble 4 – above gamer kid */}
        <rect x="578" y="350" width="185" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="638,394 628,412 658,394" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="670" y="368" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ff4500">Affordable Tech</text>
        <text x="670" y="383" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#111">for Everyone! 💡</text>

        {/* Bubble 5 – above purple alien */}
        <rect x="736" y="328" width="185" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="810,372 800,390 830,372" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="828" y="347" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#bf00ff">Shop on</text>
        <text x="828" y="362" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ff9900">Amazon Today! 🛒</text>

        {/* Bubble 6 – above small right alien */}
        <rect x="900" y="340" width="180" height="44" rx="14" fill="#fff" stroke="#222" strokeWidth="2.5"/>
        <polygon points="1000,384 990,400 1015,384" fill="#fff" stroke="#222" strokeWidth="2"/>
        <text x="990" y="358" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ee2a7b">Follow &amp; DM us</text>
        <text x="990" y="373" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#6228d7">on Instagram! 📸</text>

        {/* Amazon banner strip at bottom of building */}
        <rect x="282" y="360" width="536" height="26" rx="0" fill="url(#amzGlow)"/>
        <rect x="282" y="360" width="536" height="26" fill="#ff9900" opacity="0.12"/>
        <text x="550" y="378" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="800" fontSize="13" fill="#ffb300" filter="url(#glow0)">
          🛒 SHOP NOW ON AMAZON · Arul Jothi Prime Enterprise
        </text>
      </svg>
    </div>
  );
}

/* ─── Instagram Icon SVG ─── */
function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="igBtn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#f9ce34"/>
          <stop offset="35%"  stopColor="#ee2a7b"/>
          <stop offset="70%"  stopColor="#6228d7"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igBtn)"/>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8"/>
      <circle cx="17.2" cy="6.8" r="1.3" fill="#fff"/>
    </svg>
  );
}

/* ─── Copy-email hook ─── */
function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return { copied, copy };
}

export default function ContactPage() {
  const { copied, copy } = useCopyEmail();

  return (
    <div className="relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700"/>
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8"/>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-neon-blue/10 rounded-full blur-[150px]"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-pink-600/8 rounded-full blur-[130px]"/>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass animate-fade-in">
            <Mail className="w-4 h-4 text-neon-blue"/>
            <span className="font-rajdhani font-semibold text-sm text-neon-blue tracking-wider uppercase">
              Contact &amp; Connect
            </span>
          </div>
          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-4 animate-slide-up leading-none">
            <span className="gradient-text">Get in</span>
            <br/>
            <span className="text-white text-4xl sm:text-5xl">Touch with Us</span>
          </h1>
          <p className="font-rajdhani text-lg text-gray-400 max-w-xl mx-auto">
            Follow us on Instagram, shop our Amazon store, or reach us directly by email. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700 to-dark-900"/>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-6">

            {/* ── EMAIL CARD ── */}
            <div className="glass-card rounded-3xl p-8 border border-neon-blue/25 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mb-5 group-hover:bg-neon-blue/20 transition-colors">
                <Mail className="w-8 h-8 text-neon-blue"/>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">Email Us</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-5 leading-relaxed">
                For business enquiries, product questions, collabs, or any general inquiry.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-rajdhani font-bold text-sm text-neon-blue hover:underline break-all mb-4"
              >
                {SITE_CONFIG.contactEmail}
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-rajdhani font-semibold text-neon-blue hover:border-neon-blue/50 transition-all"
              >
                {copied
                  ? <><CheckCheck className="w-4 h-4 text-green-400"/> Copied!</>
                  : <><Copy className="w-4 h-4"/> Copy Email</>
                }
              </button>
            </div>

            {/* ── INSTAGRAM CARD ── */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group"
                 style={{ border: '1px solid rgba(238,42,123,0.3)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                   style={{ background: 'rgba(238,42,123,0.12)', border: '1px solid rgba(238,42,123,0.35)' }}>
                <InstagramIcon size={36}/>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">Instagram</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-6 leading-relaxed">
                Follow <strong className="text-pink-400">@aruljothiprime</strong> for product updates, deals, and behind-the-scenes content.
              </p>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-rajdhani font-bold text-base text-white transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
                  boxShadow: '0 0 20px rgba(238,42,123,0.4), 0 0 40px rgba(238,42,123,0.2)',
                }}
              >
                <InstagramIcon size={20}/>
                Follow on Instagram
                <ExternalLink className="w-4 h-4"/>
              </a>
            </div>

            {/* ── AMAZON CARD ── */}
            <div className="glass-card rounded-3xl p-8 border border-neon-orange/25 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-neon-orange/10 border border-neon-orange/30 flex items-center justify-center mb-5 group-hover:bg-neon-orange/20 transition-colors">
                <ShoppingBag className="w-8 h-8 text-neon-orange"/>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">Amazon Store</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-6 leading-relaxed">
                Browse our full range of gaming accessories, PC peripherals, RC toys, and action figures.
              </p>
              <a
                href={SITE_CONFIG.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange w-full justify-center"
              >
                <ShoppingBag className="w-5 h-5"/>
                Shop on Amazon
                <ExternalLink className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMIC ILLUSTRATION ── */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"/>
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-6"/>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-pink-700/8 rounded-full blur-[120px]"/>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-neon-orange/8 rounded-full blur-[120px]"/>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge glass text-pink-400 border border-pink-500/25 mb-4"
                 style={{ background: 'rgba(238,42,123,0.05)' }}>
              <InstagramIcon size={14}/>&nbsp; Our Community
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="text-white">Everyone Loves </span>
              <span className="gradient-text-warm">Our Store!</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-400 max-w-2xl mx-auto">
              Aliens, robots, astronauts, gamers, and families are all celebrating Arul Jothi Prime Enterprise — follow us on Instagram to join the fun!
            </p>
          </div>

          {/* Comic frame */}
          <div
            className="relative rounded-3xl overflow-hidden p-1"
            style={{
              border: '3px solid rgba(238,42,123,0.4)',
              boxShadow: '0 0 30px rgba(238,42,123,0.2), 0 0 60px rgba(238,42,123,0.1)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                 style={{ background: 'linear-gradient(90deg, #f9ce34, #ee2a7b, #6228d7, #ff6a00)' }}/>
            <ContactComicIllustration/>
          </div>

          {/* Bottom CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-rajdhani font-bold text-lg text-white transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
                boxShadow: '0 0 20px rgba(238,42,123,0.4)',
              }}
            >
              <InstagramIcon size={22}/>
              Follow on Instagram
              <ExternalLink className="w-5 h-5"/>
            </a>
            <a
              href={SITE_CONFIG.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange text-lg px-8 py-4"
            >
              <ShoppingBag className="w-6 h-6"/>
              Shop on Amazon
              <ExternalLink className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
