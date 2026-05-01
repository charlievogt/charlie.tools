import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as w}from"./index.CdJzaNS0.js";const j=400,N=400,h=j/2,b=N/2,x=110,$=14,M="marketing",f=[{kind:"exact",glyph:"≡",label:"Exact",site:"hr",angle:90,filename:"original.docx",description:"An exact byte-for-byte copy lives at /sites/hr/. Same hash on both sides. Surfacing this duplicate is the easy case."},{kind:"stale",glyph:"←",label:"Stale",site:"legal",angle:18,filename:"original.docx",description:"A copy was made to /sites/legal/, then original.docx kept getting edited. Legal still holds the older bytes. To find it, hash version history, not just the current file."},{kind:"diverged",glyph:"⇄",label:"Diverged",site:"operations",angle:-54,filename:"original.docx",description:"A copy was made to /sites/operations/, and then both copies were edited independently. Neither current file matches the other; their shared ancestor is back in version history."},{kind:"near",glyph:"≈",label:"Near-dup",site:"procurement",angle:-126,filename:"policy-finalreallyfinal.docx",description:"A copy was made to /sites/procurement/, then polished and renamed. Same words, different bytes, different filename. Only a similarity hash like SimHash catches this pair."},{kind:"samename",glyph:"≢",label:"Same-name",site:"sales",angle:162,filename:"original.docx",description:"A different document at /sites/sales/ happens to share the filename. It isn't a copy at all. The only thing in common with original.docx is the name."}],z="Six SharePoint libraries hold a file called original.docx. Each leg below shows how a copy ended up in its category.",L=[1500,6500,8500,8500,8500,7500];function y(a,r){const s=a*Math.PI/180;return{x:h+r*Math.cos(s),y:b-r*Math.sin(s)}}function T(a,r){const s=r.x-a.x,i=r.y-a.y,d=Math.hypot(s,i),o=s/d,u=-(i/d),_=o,n=6,v=5;let k=`M ${a.x} ${a.y}`;for(let m=1;m<=n;m++){const E=(m-1)/n,g=m/n,t=(E+g)/2,c=a.x+s*g,l=a.y+i*g,S=a.x+s*t+u*v*(m%2===0?1:-1),A=a.y+i*t+_*v*(m%2===0?1:-1);k+=` Q ${S.toFixed(2)} ${A.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`}return k}function I({kind:a}){return a==="pause"?e.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",focusable:"false",children:[e.jsx("rect",{x:"4",y:"2.8",width:"1.7",height:"8.4",rx:"0.4"}),e.jsx("rect",{x:"8.3",y:"2.8",width:"1.7",height:"8.4",rx:"0.4"})]}):a==="play"?e.jsx("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M 4.6 3 L 11 7 L 4.6 11 Z",strokeLinejoin:"round",stroke:"currentColor",strokeWidth:"0.4"})}):e.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[e.jsx("path",{d:"M 11 7 A 4 4 0 1 1 7 3"}),e.jsx("polyline",{points:"5 1.5 7 3 5 4.5"})]})}function P(a,r){const s=r.x-a.x,i=r.y-a.y,d=Math.hypot(s,i),o=-i/d*3.5,p=s/d*3.5;return[{x1:a.x+o,y1:a.y+p,x2:r.x+o,y2:r.y+p},{x1:a.x-o,y1:a.y-p,x2:r.x-o,y2:r.y-p}]}function C({leg:a,isActive:r}){const s=y(a.angle,x),i=y(a.angle,14);return e.jsxs("g",{className:`dedup__spoke dedup__spoke--${a.kind} ${r?"is-active":"is-settled"}`,children:[a.kind==="near"?e.jsx("path",{d:T(i,s),pathLength:100,className:"dedup__line"}):a.kind==="diverged"?e.jsx(e.Fragment,{children:P(i,s).map((d,o)=>e.jsx("line",{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,pathLength:100,className:"dedup__line"},o))}):e.jsx("line",{x1:i.x,y1:i.y,x2:s.x,y2:s.y,pathLength:100,className:"dedup__line"}),e.jsx("circle",{cx:s.x,cy:s.y,r:5.5,className:"dedup__node"}),e.jsx("circle",{cx:s.x,cy:s.y,r:2,className:"dedup__node-core"}),(a.kind==="diverged"||a.kind==="near")&&r&&e.jsx("circle",{cx:s.x,cy:s.y,r:5.5,className:"dedup__edit-pulse","aria-hidden":"true"})]})}function G({leg:a,isActive:r}){const s=y(a.angle,x),i=a.angle*Math.PI/180,d={x:s.x+$*Math.cos(i),y:s.y-$*Math.sin(i)},o=Math.cos(i),p=o>.25?"right":o<-.25?"left":"center";return e.jsxs("div",{className:`dedup__label dedup__label--${a.kind} dedup__label--${p} ${r?"is-active":"is-settled"}`,style:{left:`${d.x/j*100}%`,top:`${d.y/N*100}%`},children:[e.jsxs("span",{className:"dedup__label-kind",children:[e.jsx("span",{className:"dedup__label-glyph","aria-hidden":"true",children:a.glyph}),a.label]}),e.jsxs("span",{className:"dedup__label-site",children:[e.jsxs("span",{className:"dedup__label-site--full",children:["/sites/",a.site,"/"]}),e.jsx("span",{className:"dedup__label-site--short",children:a.site})]}),e.jsx("span",{className:"dedup__label-filename",title:a.filename,children:a.filename})]})}function F(){const[a,r]=w.useState(0),[s,i]=w.useState(0),[d,o]=w.useState(!0),p=f.length,u=a>=p,_=a-1,n=_>=0?f[_]:null;w.useEffect(()=>{if(!d||u)return;const t=L[a]??7e3,c=window.setTimeout(()=>{r(l=>l+1),i(l=>l+1)},t);return()=>window.clearTimeout(c)},[a,d,u]);const v=()=>{u?(r(1),i(t=>t+1),o(!0)):(r(t=>t+1),i(t=>t+1))},k=()=>{a>0&&(r(t=>t-1),i(t=>t+1))},m=()=>{r(0),i(t=>t+1),o(!0)},E=()=>{u?(r(1),i(t=>t+1),o(!0)):o(t=>!t)},g=n?.description??z;return e.jsxs("figure",{className:"dedup","data-active":n?.kind??"idle",role:"img","aria-label":"A central canonical document at /sites/marketing/ with five peer copies in other libraries, each illustrating one duplicate-detection category: exact, stale, diverged, near-duplicate, and same-name.",children:[e.jsxs("header",{className:"dedup__header",children:[e.jsxs("span",{className:"dedup__kicker",children:["[ DEDUP CONSTELLATION ·"," ",a===0?"start":`${a} of ${p}`," ]"]}),e.jsxs("p",{className:"dedup__headline",children:["Same filename. Six libraries."," ",e.jsx("span",{className:"dedup__em",children:"Five distinct problems."})]})]}),e.jsxs("div",{className:"dedup__stage",children:[e.jsxs("svg",{viewBox:`0 0 ${j} ${N}`,className:"dedup__svg","aria-hidden":"true",children:[e.jsx("circle",{cx:h,cy:b,r:x,className:"dedup__ring"}),f.slice(0,a).map((t,c)=>{const l=c===_;return e.jsx(C,{leg:t,isActive:l},l?`${t.kind}-${s}`:t.kind)}),e.jsxs("g",{className:"dedup__hub",children:[e.jsx("circle",{cx:h,cy:b,r:28,className:"dedup__hub-halo"}),e.jsx("circle",{cx:h,cy:b,r:14,className:"dedup__hub-ring"}),e.jsx("circle",{cx:h,cy:b,r:6,className:"dedup__hub-core"}),n&&(n.kind==="stale"||n.kind==="diverged")&&e.jsx("circle",{cx:h,cy:b,r:14,className:"dedup__hub-edit-pulse","aria-hidden":"true"},`hub-pulse-${s}`)]})]}),e.jsxs("div",{className:"dedup__hub-label",children:[e.jsx("span",{className:"dedup__hub-label-kind",children:"original.docx"}),e.jsxs("span",{className:"dedup__hub-label-site",children:["/sites/",M,"/"]})]}),n&&n.kind!=="samename"&&e.jsx("span",{className:"dedup__copy","aria-hidden":"true",style:{"--end-x":`${y(n.angle,x).x/j*100}%`,"--end-y":`${y(n.angle,x).y/N*100}%`}},`copy-${s}`),f.slice(0,a).map((t,c)=>{const l=c===_;return e.jsx(G,{leg:t,isActive:l},l?`${t.kind}-label-${s}`:`${t.kind}-label`)})]}),e.jsxs("div",{className:"dedup__stepper",children:[e.jsxs("p",{className:"dedup__description","aria-live":"polite",children:[n&&e.jsxs("span",{className:`dedup__description-tag dedup__description-tag--${n.kind}`,children:[e.jsx("span",{"aria-hidden":"true",children:n.glyph})," ",n.label.toUpperCase()]}),e.jsx("span",{className:"dedup__description-text",children:g})]}),e.jsxs("div",{className:"dedup__nav",children:[e.jsxs("div",{className:"dedup__transport",children:[e.jsx("button",{type:"button",className:"dedup__btn",onClick:k,disabled:a===0,"aria-label":"Previous category",children:"←"}),e.jsx("button",{type:"button",className:"dedup__btn dedup__btn--play",onClick:E,"aria-label":u?"Replay from start":d?"Pause auto-play":"Resume auto-play","aria-pressed":!d,children:e.jsx(I,{kind:u?"replay":d?"pause":"play"})}),e.jsx("button",{type:"button",className:"dedup__btn",onClick:v,disabled:u,"aria-label":"Next category",children:"→"})]}),e.jsx("div",{className:"dedup__progress",role:"group","aria-label":"Progress through categories",children:f.map((t,c)=>e.jsx("button",{type:"button",className:`dedup__dot ${c<a?"is-on":""} ${c===_?"is-active":""}`,onClick:()=>{r(c+1),i(l=>l+1)},"aria-label":`Show ${t.label}`,"aria-current":c===_?"step":void 0},t.kind))})]}),a>0&&e.jsx("button",{type:"button",className:"dedup__reset",onClick:m,children:"Reset"})]}),e.jsx("style",{children:`
        .dedup {
          margin: 2rem 0;
          font-family:
            'Geist Variable',
            'Geist',
            ui-sans-serif,
            system-ui,
            sans-serif;
        }

        .dedup__header {
          margin-bottom: 1rem;
        }

        .dedup__kicker {
          display: block;
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            ui-monospace,
            monospace;
          font-size: 0.6875rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgb(var(--fg-subtle));
        }

        .dedup__headline {
          margin: 0.45rem 0 0;
          font-size: clamp(1.0625rem, 3.4vw, 1.3125rem);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.012em;
          color: rgb(var(--fg));
        }

        .dedup__em {
          color: rgb(var(--accent));
        }
        @supports (
          (background-clip: text) or (-webkit-background-clip: text)
        ) {
          .dedup__em {
            background: linear-gradient(
              135deg,
              rgb(var(--accent)) 0%,
              rgb(var(--accent-glow)) 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
        }

        .dedup__stage {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
        }

        .dedup__svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .dedup__ring {
          fill: none;
          stroke: rgb(var(--border));
          stroke-width: 1;
          stroke-dasharray: 1 4;
          opacity: 0.6;
        }

        .dedup__hub-halo {
          fill: rgb(var(--accent) / 0.16);
          transform-origin: ${h}px ${b}px;
          animation: dedup-hub-breathe 3.2s ease-in-out infinite;
        }

        .dedup__hub-ring {
          fill: none;
          stroke: rgb(var(--accent));
          stroke-width: 1.5;
        }

        .dedup__hub-core {
          fill: rgb(var(--accent));
        }

        /* Hub edit pulse — when STALE or DIVERGED is the active leg,
           this fires after the copy lands to indicate "the canonical
           was edited." */
        .dedup__hub-edit-pulse {
          fill: none;
          stroke: rgb(var(--accent));
          stroke-width: 2;
          opacity: 0;
          transform-origin: ${h}px ${b}px;
          animation: dedup-edit-pulse 1.6s cubic-bezier(0.4, 0, 0.2, 1)
            4500ms forwards;
        }

        /* === SETTLED-LEG STYLES (final state, no animation). ===
           These apply to legs the reader has already advanced past.
           The line is fully drawn, in its category-specific pattern. */
        .dedup__line {
          fill: none;
          stroke: rgb(var(--fg-muted));
          stroke-width: 1.4;
          stroke-linecap: round;
          opacity: 0.85;
        }
        .dedup__spoke--exact .dedup__line {
          stroke: rgb(var(--accent));
          stroke-width: 1.7;
          opacity: 1;
        }
        .dedup__spoke--stale .dedup__line {
          stroke-dasharray: 5 4;
        }
        .dedup__spoke--samename .dedup__line {
          stroke-dasharray: 1 4;
          opacity: 0.6;
        }

        .dedup__node {
          fill: rgb(var(--bg));
          stroke: rgb(var(--fg-muted));
          stroke-width: 1.4;
        }
        .dedup__node-core {
          fill: rgb(var(--fg-muted));
        }
        .dedup__spoke--exact .dedup__node {
          stroke: rgb(var(--accent));
          stroke-width: 1.7;
        }
        .dedup__spoke--exact .dedup__node-core {
          fill: rgb(var(--accent));
        }

        /* === ACTIVE-LEG ANIMATION TIMINGS ===
           Per-leg phases (timings are absolute from leg-start = 0):
             0.0s  line starts drawing, with stroke-dashoffset
             1.5s  line fully drawn
             1.6s  copy pulse leaves the hub
             3.6s  copy pulse arrives at peer + fades
             3.6s  peer dot fades in
             4.0s  peer label + filename fade in
             4.5s  per-leg "what happened" beat fires (stale/diverged/near)
             6.0s  leg fully settled
           SAME-NAME is shorter: no copy pulse; peer just fades in. */

        /* Active line: starts hidden + dashed-as-line, then draws in. */
        .dedup__spoke.is-active .dedup__line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: dedup-line-draw 1.5s cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        }

        /* After the line draws, transition to the category pattern. */
        .dedup__spoke--stale.is-active .dedup__line {
          animation:
            dedup-line-draw 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            dedup-pattern-stale 0ms 4500ms forwards;
        }
        .dedup__spoke--samename.is-active .dedup__line {
          animation:
            dedup-line-draw 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            dedup-pattern-samename 0ms 1500ms forwards;
        }

        /* Active node + label — fade in after the copy lands. */
        .dedup__spoke.is-active .dedup__node {
          opacity: 0;
          animation: dedup-fade-in 0.5s ease 3600ms forwards;
        }
        .dedup__spoke.is-active .dedup__node-core {
          opacity: 0;
          animation: dedup-fade-in 0.5s ease 3700ms forwards;
        }

        /* SAME-NAME special case: no copy from canonical. The line is
           dotted from the start (the "false equivalence" pattern) and
           the peer simply fades in at its location. */
        .dedup__spoke--samename.is-active .dedup__line {
          stroke-dasharray: 1 4;
          stroke-dashoffset: 0;
          opacity: 0;
          animation: dedup-fade-in 0.9s ease 1800ms forwards;
        }
        .dedup__spoke--samename.is-active .dedup__node {
          opacity: 0;
          animation: dedup-fade-in 0.6s ease 800ms forwards;
        }
        .dedup__spoke--samename.is-active .dedup__node-core {
          opacity: 0;
          animation: dedup-fade-in 0.6s ease 1000ms forwards;
        }

        /* Edit pulse at peer for DIVERGED + NEAR. */
        .dedup__edit-pulse {
          fill: none;
          stroke: rgb(var(--accent));
          stroke-width: 2;
          opacity: 0;
          transform-origin: center;
          animation: dedup-edit-pulse 1.6s cubic-bezier(0.4, 0, 0.2, 1)
            4500ms forwards;
        }

        /* Copy pulse — small accent-bordered "document" marker. */
        .dedup__copy {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 14px;
          height: 18px;
          background: rgb(var(--bg-raised));
          border: 1.5px solid rgb(var(--accent));
          border-radius: 2px;
          box-shadow: 0 0 0 3px rgb(var(--accent) / 0.16);
          transform: translate(-50%, -50%) scale(0.55);
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          animation: dedup-copy 2s cubic-bezier(0.4, 0, 0.2, 1) 1600ms
            forwards;
        }
        .dedup__copy::after {
          content: '';
          position: absolute;
          inset: 3px 3px 4px 3px;
          background:
            linear-gradient(
              to bottom,
              rgb(var(--accent)) 0 1px,
              transparent 1px 4px,
              rgb(var(--accent)) 4px 5px,
              transparent 5px 8px,
              rgb(var(--accent)) 8px 9px,
              transparent 9px 100%
            );
        }

        /* === LABELS === */
        .dedup__hub-label,
        .dedup__label {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          line-height: 1.15;
          white-space: nowrap;
          text-align: center;
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            ui-monospace,
            monospace;
        }

        .dedup__hub-label {
          left: 50%;
          top: 50%;
          margin-top: 2.6rem;
        }

        .dedup__hub-label-kind {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgb(var(--accent));
        }

        .dedup__hub-label-site {
          font-size: 0.6875rem;
          color: rgb(var(--fg-muted));
        }

        .dedup__label.is-settled {
          opacity: 1;
        }
        .dedup__label.is-active {
          opacity: 0;
          animation: dedup-label-in 0.5s ease 4000ms forwards;
        }
        .dedup__label--left {
          text-align: right;
          transform: translate(-100%, -50%);
        }
        .dedup__label--right {
          text-align: left;
          transform: translate(0, -50%);
        }
        .dedup__label--center {
          text-align: center;
          transform: translate(-50%, -100%);
          margin-top: -0.25rem;
        }

        .dedup__label-kind {
          display: inline-flex;
          align-items: baseline;
          gap: 0.3rem;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgb(var(--fg));
        }
        .dedup__label--left .dedup__label-kind {
          flex-direction: row-reverse;
        }

        .dedup__label-glyph {
          font-size: 0.95rem;
          line-height: 1;
          color: rgb(var(--fg-muted));
          font-variant-numeric: tabular-nums;
        }

        .dedup__label-site {
          font-size: 0.6875rem;
          color: rgb(var(--fg-subtle));
          letter-spacing: 0.02em;
        }
        .dedup__label-site--short {
          display: none;
        }

        .dedup__label-filename {
          font-size: 0.625rem;
          color: rgb(var(--fg-muted));
          letter-spacing: 0;
          max-width: 14ch;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dedup__label--left .dedup__label-filename,
        .dedup__label--right .dedup__label-filename {
          max-width: none;
        }

        /* === STEPPER === */
        .dedup__stepper {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          align-items: center;
        }

        .dedup__description {
          margin: 0;
          max-width: 36rem;
          text-align: center;
          font-size: 0.9375rem;
          line-height: 1.5;
          color: rgb(var(--fg-muted));
        }

        .dedup__description-tag {
          display: inline-block;
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 0.15rem 0.5rem;
          margin-right: 0.4rem;
          border-radius: 4px;
          color: rgb(var(--accent));
          background: rgb(var(--accent) / 0.08);
        }

        .dedup__description-text {
          color: rgb(var(--fg-muted));
        }

        .dedup__nav {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dedup__transport {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .dedup__btn {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgb(var(--border));
          background: rgb(var(--bg-raised));
          color: rgb(var(--fg));
          border-radius: 999px;
          cursor: pointer;
          font-size: 0.875rem;
          line-height: 1;
          padding: 0;
          transition:
            color 160ms ease,
            border-color 160ms ease,
            background-color 160ms ease;
        }
        .dedup__btn:hover:not(:disabled),
        .dedup__btn:focus-visible:not(:disabled) {
          border-color: rgb(var(--accent) / 0.55);
          color: rgb(var(--accent));
          background: rgb(var(--accent) / 0.06);
          outline: none;
        }
        .dedup__btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        /* Play/pause is the visual anchor of the transport row. */
        .dedup__btn--play {
          width: 2.4rem;
          height: 2.4rem;
          background: rgb(var(--accent));
          border-color: rgb(var(--accent));
          color: rgb(var(--bg));
          font-size: 0.9375rem;
        }
        .dedup__btn--play:hover:not(:disabled),
        .dedup__btn--play:focus-visible:not(:disabled) {
          background: rgb(var(--accent-strong));
          border-color: rgb(var(--accent-strong));
          color: rgb(var(--bg));
        }

        .dedup__progress {
          display: inline-flex;
          gap: 0.4rem;
          padding: 0 0.25rem;
        }
        .dedup__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          padding: 0;
          margin: 0;
          border: none;
          background: rgb(var(--border-strong));
          cursor: pointer;
          transition: background-color 160ms ease, transform 160ms ease;
        }
        .dedup__dot.is-on {
          background: rgb(var(--accent) / 0.5);
        }
        .dedup__dot.is-active {
          background: rgb(var(--accent));
          transform: scale(1.25);
        }

        .dedup__reset {
          background: none;
          border: 0;
          padding: 0;
          color: rgb(var(--fg-subtle));
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.6875rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
        }
        .dedup__reset:hover,
        .dedup__reset:focus-visible {
          color: rgb(var(--accent));
          outline: none;
        }

        /* === KEYFRAMES === */
        @keyframes dedup-fade-in {
          to { opacity: 1; }
        }
        @keyframes dedup-label-in {
          from { opacity: 0; filter: blur(2px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @keyframes dedup-line-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dedup-pattern-stale {
          to { stroke-dasharray: 5 4; }
        }
        @keyframes dedup-pattern-samename {
          to { stroke-dasharray: 1 4; }
        }
        @keyframes dedup-hub-breathe {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }
        @keyframes dedup-edit-pulse {
          0%   { opacity: 0; transform: scale(0.8); }
          25%  { opacity: 1; transform: scale(1.4); }
          75%  { opacity: 0.4; transform: scale(2.2); }
          100% { opacity: 0; transform: scale(2.6); }
        }
        @keyframes dedup-copy {
          0% {
            left: 50%; top: 50%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.55);
          }
          12% {
            left: 50%; top: 50%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          88% {
            left: var(--end-x); top: var(--end-y);
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            left: var(--end-x); top: var(--end-y);
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.85);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dedup__hub-halo {
            animation: none !important;
            opacity: 0.55;
            transform: scale(1);
          }
          .dedup__line,
          .dedup__node,
          .dedup__node-core,
          .dedup__label,
          .dedup__edit-pulse,
          .dedup__hub-edit-pulse,
          .dedup__copy {
            animation-duration: 0.01ms !important;
            animation-delay: 0ms !important;
          }
          .dedup__copy,
          .dedup__edit-pulse,
          .dedup__hub-edit-pulse {
            display: none;
          }
        }

        @media (max-width: 540px) {
          .dedup__stage { max-width: 340px; }
          .dedup__label-site--full { display: none; }
          .dedup__label-site--short { display: inline; }
          .dedup__label-kind { font-size: 0.625rem; gap: 0.25rem; }
          .dedup__label-glyph { font-size: 0.875rem; }
          .dedup__label-site { font-size: 0.625rem; }
          .dedup__label-filename { font-size: 0.5625rem; max-width: 11ch; }
          .dedup__hub-label-kind { font-size: 0.6875rem; }
          .dedup__hub-label-site { font-size: 0.625rem; }
          .dedup__hub-label { margin-top: 1.85rem; }
          .dedup__description { font-size: 0.875rem; }
        }
      `})]})}export{F as DedupConstellation,F as default};
