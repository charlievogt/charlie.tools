import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.CdJzaNS0.js";const f=[{name:"Built-in web parts",short:"Built-in",ceiling:28,outgrown:"past drag-and-drop layouts"},{name:"List formatting",short:"List format",ceiling:50,outgrown:"past visuals into logic"},{name:"Power Automate",short:"Power Automate",ceiling:72,outgrown:"past flows into UI"},{name:"SPFx",short:"SPFx",ceiling:100,outgrown:"",unbounded:!0}],c=82,m=[{kind:"rise",from:0,to:28,duration:1300},{kind:"hold",value:28,duration:600},{kind:"rise",from:28,to:50,duration:1100},{kind:"hold",value:50,duration:600},{kind:"rise",from:50,to:72,duration:1100},{kind:"hold",value:72,duration:600},{kind:"rise",from:72,to:c,duration:950}],x=m.reduce((t,s)=>t+s.duration,0);function _(t){let s=0;for(const a of m){if(t<s+a.duration){if(a.kind==="hold")return a.value;const n=(t-s)/a.duration,i=1-Math.pow(1-n,2.2);return a.from+(a.to-a.from)*i}s+=a.duration}return c}function v(){const[t,s]=l.useState(0),[a,n]=l.useState(0);l.useEffect(()=>{if(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){n(c);return}n(0);let o=0;const g=performance.now(),d=u=>{const p=u-g;n(_(p)),p<x&&(o=requestAnimationFrame(d))},b=window.setTimeout(()=>{o=requestAnimationFrame(d)},350);return()=>{window.clearTimeout(b),o&&cancelAnimationFrame(o)}},[t]);const i=f.map(r=>{const o=!r.unbounded&&a>r.ceiling;return{tool:r,broken:o}});return e.jsxs("figure",{className:"spfx-flow",role:"img","aria-label":"Bar chart showing the capability ceilings of four SharePoint customization tools — built-in web parts, list formatting, Power Automate, and SPFx — with a rising requirement line that crosses the first three ceilings, leaving SPFx as the only tool still tall enough to clear it.",children:[e.jsxs("header",{className:"spfx-flow__header",children:[e.jsx("span",{className:"spfx-flow__kicker",children:"[ WHEN THE OPTIONS RUN OUT ]"}),e.jsxs("p",{className:"spfx-flow__headline",children:["Each tool has a ceiling."," ",e.jsx("span",{className:"spfx-flow__em",children:"SPFx doesn't."})]})]}),e.jsxs("div",{className:"spfx-flow__chart",children:[e.jsxs("div",{className:"spfx-flow__bars-area",children:[e.jsx("div",{className:"spfx-flow__bars",children:i.map(({tool:r,broken:o})=>e.jsx("div",{className:`spfx-flow__col${o?" is-broken":""}${r.unbounded?" is-spfx":""}`,children:e.jsx("div",{className:"spfx-flow__bar",style:{height:`${r.ceiling}%`},children:r.unbounded&&e.jsx("span",{className:"spfx-flow__bar-mark","aria-hidden":"true",children:"↑"})})},r.name))}),e.jsx("div",{className:"spfx-flow__req",style:{bottom:`${a}%`},"aria-hidden":"true"})]}),e.jsx("div",{className:"spfx-flow__labels",children:i.map(({tool:r,broken:o})=>e.jsxs("div",{className:`spfx-flow__lab${o?" is-broken":""}${r.unbounded?" is-spfx":""}`,children:[e.jsx("span",{className:"spfx-flow__lab-name",children:r.short}),e.jsx("span",{className:"spfx-flow__lab-note",children:o?r.outgrown:r.unbounded?"no ceiling":""})]},r.name))})]}),e.jsxs("div",{className:"spfx-flow__legend","aria-hidden":"true",children:[e.jsx("span",{className:"spfx-flow__legend-line"}),e.jsx("span",{children:"The request you got"})]}),e.jsx("button",{type:"button",className:"spfx-flow__replay",onClick:()=>s(r=>r+1),"aria-label":"Replay the rising-requirement animation",children:"↻ Replay"}),e.jsx("style",{children:`
        .spfx-flow {
          margin: 2rem 0;
          font-family:
            'Geist Variable',
            'Geist',
            ui-sans-serif,
            system-ui,
            sans-serif;
        }

        .spfx-flow__header {
          margin-bottom: 1rem;
        }
        .spfx-flow__kicker {
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
        .spfx-flow__headline {
          margin: 0.45rem 0 0;
          font-size: clamp(1.0625rem, 3.4vw, 1.3125rem);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.012em;
          color: rgb(var(--fg));
        }
        .spfx-flow__em {
          color: rgb(var(--accent));
        }
        @supports (
          (background-clip: text) or (-webkit-background-clip: text)
        ) {
          .spfx-flow__em {
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

        .spfx-flow__chart {
          padding: 0 0.75rem;
          margin-bottom: 0.75rem;
        }

        /* Bars area: where the bars and the requirement line live.
           Position-relative so the line's bottom-percent is measured
           against just this area, no padding gymnastics. */
        .spfx-flow__bars-area {
          position: relative;
          height: 220px;
        }

        .spfx-flow__bars {
          display: grid;
          grid-template-columns: repeat(${f.length}, 1fr);
          gap: 1rem;
          height: 100%;
          align-items: end;
          background-image: radial-gradient(
            rgb(var(--fg) / 0.06) 1px,
            transparent 1px
          );
          background-size: 14px 14px;
          background-position: 50% 0;
          border-bottom: 1px solid rgb(var(--border));
        }

        .spfx-flow__col {
          display: flex;
          align-items: end;
          height: 100%;
        }
        .spfx-flow__bar {
          width: 100%;
          background: linear-gradient(
            180deg,
            rgb(var(--accent) / 0.85) 0%,
            rgb(var(--accent) / 0.55) 100%
          );
          border-top: 2px solid rgb(var(--accent));
          border-radius: 4px 4px 0 0;
          position: relative;
          transition:
            background 280ms ease,
            border-color 280ms ease,
            opacity 280ms ease;
        }
        .spfx-flow__col.is-broken .spfx-flow__bar {
          background: linear-gradient(
            180deg,
            rgb(var(--fg-muted) / 0.45) 0%,
            rgb(var(--fg-muted) / 0.18) 100%
          );
          border-top-color: rgb(var(--fg-muted));
          opacity: 0.55;
        }
        .spfx-flow__col.is-spfx .spfx-flow__bar {
          background: linear-gradient(
            180deg,
            rgb(var(--accent)) 0%,
            rgb(var(--accent-glow) / 0.7) 100%
          );
          box-shadow: 0 0 24px -4px rgb(var(--accent) / 0.5);
        }
        .spfx-flow__bar-mark {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.875rem;
          color: rgb(var(--accent));
        }

        /* Requirement line — sits over the bars area only. */
        .spfx-flow__req {
          position: absolute;
          left: 0;
          right: 0;
          height: 0;
          border-top: 2px dashed rgb(var(--accent) / 0.7);
          pointer-events: none;
        }

        /* Labels row — separate from bars area so layout is simple. */
        .spfx-flow__labels {
          display: grid;
          grid-template-columns: repeat(${f.length}, 1fr);
          gap: 1rem;
          margin-top: 0.75rem;
        }
        .spfx-flow__lab {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.2rem;
        }
        .spfx-flow__lab-name {
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgb(var(--fg));
          line-height: 1.2;
        }
        .spfx-flow__lab.is-broken .spfx-flow__lab-name {
          color: rgb(var(--fg-muted));
        }
        .spfx-flow__lab.is-spfx .spfx-flow__lab-name {
          color: rgb(var(--accent));
        }
        .spfx-flow__lab-note {
          font-size: 0.6875rem;
          line-height: 1.3;
          color: rgb(var(--fg-subtle));
          min-height: 1.7em;
          padding: 0 0.25rem;
        }
        .spfx-flow__lab.is-broken .spfx-flow__lab-note {
          color: rgb(var(--fg-muted));
        }
        .spfx-flow__lab.is-spfx .spfx-flow__lab-note {
          color: rgb(var(--accent));
        }

        .spfx-flow__legend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.6875rem;
          letter-spacing: 0.04em;
          color: rgb(var(--fg-muted));
        }
        .spfx-flow__legend-line {
          display: inline-block;
          width: 28px;
          height: 0;
          border-top: 2px dashed rgb(var(--accent) / 0.7);
        }

        .spfx-flow__replay {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.75rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid rgb(var(--border));
          border-radius: 999px;
          background: transparent;
          color: rgb(var(--fg-muted));
          font-family:
            'Geist Mono Variable',
            'Geist Mono',
            monospace;
          font-size: 0.6875rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            color 160ms ease,
            border-color 160ms ease,
            background-color 160ms ease;
        }
        .spfx-flow__replay:hover,
        .spfx-flow__replay:focus-visible {
          color: rgb(var(--accent));
          border-color: rgb(var(--accent) / 0.5);
          background: rgb(var(--accent) / 0.06);
          outline: none;
        }

        @media (max-width: 540px) {
          .spfx-flow__bars,
          .spfx-flow__labels {
            gap: 0.4rem;
          }
          .spfx-flow__lab-name {
            font-size: 0.625rem;
          }
          .spfx-flow__lab-note {
            font-size: 0.5625rem;
            line-height: 1.25;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spfx-flow__bar,
          .spfx-flow__req {
            transition: none !important;
          }
        }
      `})]})}export{v as SpfxDecisionFlow};
