// pages/index.jsx  (Next.js) or src/App.jsx (React)
// Replace placeholders, then deploy to Vercel / Netlify.
import React from "react";

export default function Home() {
  const projects = [
    { title: "Project One", desc: "Short description.", live: "#", repo: "#" },
    { title: "Project Two", desc: "Short description.", live: "#", repo: "#" },
  ];

  return (
    <main style={{fontFamily:"Inter,system-ui",maxWidth:1000,margin:"40px auto",padding:20}}>
      <header style={{display:"flex",gap:20,alignItems:"center"}}>
        <div style={{width:96,height:96,background:"#eee",borderRadius:12}} />
        <div>
          <h1 style={{margin:0}}>Your Name <span style={{color:"#2563eb"}}>.</span></h1>
          <p style={{margin:"6px 0 0",color:"#475569"}}>Full-stack dev — React · Node · PostgreSQL</p>
        </div>
      </header>

      <section style={{marginTop:28}}>
        <h2>Projects</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          {projects.map((p) => (
            <article key={p.title} style={{padding:16,background:"#f8fafc",borderRadius:10}}>
              <h3 style={{margin:"0 0 6px"}}>{p.title}</h3>
              <p style={{margin:"0 0 12px"}}>{p.desc}</p>
              <a href={p.live} style={{marginRight:8}}>Live</a>
              <a href={p.repo}>Source</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{marginTop:28}}>
        <h2>About</h2>
        <p>I build production-ready web apps with a focus on performance and good UX.</p>
        <p>Contact: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </section>
    </main>
  );
}
