import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Reading Progress Bar */}
      <div className="progress-bar" id="progressBar" aria-hidden="true" />

      {/* Navigation Overlay for Mobile */}
      <div className="nav-overlay" id="navOverlay" aria-hidden="true" />

      <header className="hdr">
        <div className="hdr-inner">
          <div className="hdr-top">
            <div className="hdr-brand">
              <h1>Future Stars Academy</h1>
              <p className="tagline">Building Africa's Next Generation of Innovators</p>
            </div>

            <div className="hdr-actions">
              {/* Theme Toggle */}
              <button
                className="theme-toggle"
                id="themeToggle"
                aria-label="Toggle dark mode"
                type="button"
              >
                <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </button>

              {/* Export Button */}
              <button id="exportPdf" className="export-btn" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Export to PDF</span>
              </button>

              {/* Mobile Nav Toggle */}
              <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mainNav" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <svg className="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav" id="mainNav" role="navigation" aria-label="Main navigation">
            <a href="#executive-summary">Executive Summary</a>
            <a href="#organisation-profile">Organisation Profile</a>
            <a href="#business-problem">Business Problem</a>
            <a href="#solution">Solution</a>
            <a href="#target-market">Target Market</a>
            <a href="#flagship-projects">Flagship Projects</a>
            <a href="#existing-assets">Existing Assets</a>
            <a href="#funding-required">Funding Required</a>
            <a href="#use-of-funds">Use of Funds</a>
            <a href="#business-model">Business Model Canvas</a>
            <a href="#swot">SWOT Analysis</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="executive-summary" className="section">
          <h2>Executive Summary</h2>
          <p>Future Stars Academy is an innovation‑driven educational institution established to prepare children and young people for the future through project‑based learning, Artificial Intelligence, software development, engineering, entrepreneurship, leadership, and technology‑enabled vocational education.</p>
          <p>Unlike traditional educational institutions, the Academy begins with real community problems and guides learners through research, design, prototyping, implementation, and business creation.</p>
          <p>The Academy initially serves learners aged 10‑18 years through after‑school programmes, weekend innovation academies, holiday boot camps, and online learning while they continue attending their existing schools. Over time, Future Stars Academy will expand its programmes to serve learners of all ages.</p>
          <p>The Academy seeks an investment of M300,000 to establish Phase One operations, including innovation laboratories, technology infrastructure, curriculum implementation, and digital learning systems.</p>
        </section>

        <section id="organisation-profile" className="section">
          <h2>Organisation Profile</h2>
          <table className="tbl">
            <tbody>
              <tr><th>Business Name</th><td>Future Stars Academy</td></tr>
              <tr><th>Business Type</th><td>Innovation and Technology Education Institution</td></tr>
              <tr><th>Legal Structure</th><td>(To be completed)</td></tr>
              <tr><th>Location</th><td>Maseru, Lesotho</td></tr>
              <tr><th>Founder</th><td>Moshoeshoe Koali</td></tr>
              <tr><th>Funding Requested</th><td>M300,000</td></tr>
              <tr><th>Founder Contribution</th><td>≈ M230,500 (Existing Assets, Equipment, Curriculum Development and IP)</td></tr>
              <tr><th>Total Initial Project Value</th><td>M530,500</td></tr>
            </tbody>
          </table>
        </section>

        <section id="business-problem" className="section">
          <h2>Business Problem</h2>
          <ul>
            <li>High youth unemployment.</li>
            <li>Skills mismatch between education and industry.</li>
            <li>Limited practical STEM education.</li>
            <li>Low entrepreneurship rates among young people.</li>
            <li>Limited access to Artificial Intelligence education.</li>
            <li>Few innovation hubs for children.</li>
            <li>Growing electronic waste.</li>
            <li>Limited commercialisation of student innovations.</li>
          </ul>
          <p>Future Stars Academy addresses these challenges through practical, technology‑driven education.</p>
        </section>

        <section id="solution" className="section">
          <h2>The Solution</h2>
          <p>Future Stars Academy offers a breadth of programmes:</p>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Software Development</li>
            <li>Robotics</li>
            <li>Engineering</li>
            <li>Renewable Energy</li>
            <li>Smart Agriculture</li>
            <li>Entrepreneurship</li>
            <li>Leadership</li>
            <li>Fashion Technology</li>
            <li>Baking & Food Technology</li>
            <li>Digital Media</li>
            <li>Electronics</li>
            <li>Business Creation</li>
            <li>Innovation Challenges</li>
            <li>Startup Incubation</li>
          </ul>
          <p>Every programme culminates in a tangible product, prototype, service or business.</p>
        </section>

        <section id="target-market" className="section">
          <h2>Target Market – Phase One</h2>
          <h3>Children (10‑18 years)</h3>
          <p>Delivery Model:</p>
          <ul>
            <li>After‑school programmes</li>
            <li>Saturday Innovation Academy</li>
            <li>Holiday Innovation Camps</li>
            <li>Online Learning</li>
          </ul>
          <h3>Future Expansion</h3>
          <p>Adults, Teachers, Businesses, Government institutions, Communities.</p>
        </section>

        <section id="flagship-projects" className="section">
          <h2>Flagship Projects (examples)</h2>
          <ul>
            <li>Smart Light & Energy Lab</li>
            <li>Smart Agriculture Lab</li>
            <li>Smart Water Lab</li>
            <li>Smart Fashion Lab</li>
            <li>Smart Bakery</li>
            <li>Smart Village Programme</li>
            <li>AI for Community Development</li>
            <li>Robotics for Rural Communities</li>
          </ul>
        </section>

        <section id="existing-assets" className="section">
          <h2>Existing Assets (≈ M230,500)</h2>
          <ul>
            <li>Office furniture – 3 desks, chairs, filing systems.</li>
            <li>ICT – 10 desktop computers, printer, networking equipment.</li>
            <li>Vocational – Commercial oven, broiler.</li>
            <li>Intellectual Property – Curriculum, Innovation Passport, Digital Ecosystem, Project Frameworks.</li>
          </ul>
        </section>

        <section id="funding-required" className="section">
          <h2>Funding Required</h2>
          <p><strong>M300,000</strong></p>
        </section>

        <section id="use-of-funds" className="section">
          <h2>Use of Funds</h2>
          <table className="tbl">
            <tbody>
              <tr><th>Item</th><th>Amount (M)</th></tr>
              <tr><td>ICT Expansion</td><td>70,000</td></tr>
              <tr><td>Innovation Laboratory Equipment</td><td>55,000</td></tr>
              <tr><td>Robotics & AI Kits</td><td>35,000</td></tr>
              <tr><td>Furniture & Classroom Setup</td><td>30,000</td></tr>
              <tr><td>Digital Platform Development</td><td>30,000</td></tr>
              <tr><td>Marketing & Community Outreach</td><td>20,000</td></tr>
              <tr><td>Working Capital</td><td>60,000</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>300,000</strong></td></tr>
            </tbody>
          </table>
        </section>

        <section id="business-model" className="section">
          <h2>Business Model Canvas</h2>
          <div className="iframe-wrapper">
            <div className="iframe-skeleton" aria-hidden="true">
              <div className="skeleton-bar" />
              <div className="skeleton-bar small" />
              <div className="skeleton-bar small" />
            </div>
            <iframe
              src="/proposal/business_model_canvas.html"
              title="Business Model Canvas"
              loading="lazy"
              allow="fullscreen"
            ></iframe>
          </div>
        </section>

        <section id="swot" className="section">
          <h2>SWOT Analysis</h2>
          <div className="iframe-wrapper">
            <div className="iframe-skeleton" aria-hidden="true">
              <div className="skeleton-bar" />
              <div className="skeleton-bar small" />
              <div className="skeleton-bar small" />
            </div>
            <iframe
              src="/proposal/swot_analysis.html"
              title="SWOT Analysis"
              loading="lazy"
              allow="fullscreen"
            ></iframe>
          </div>
        </section>

        <section className="section">
          <h2>Financial Summary (Year\u20091 \u2013 Conservative)</h2>
          <ul>
            <li>Students: 40</li>
            <li>Revenue: M691,000</li>
            <li>Operating Expenses: M460,000</li>
            <li>Projected Surplus: M231,000</li>
          </ul>
          <p>Year\u20092 \u2013 80 students, {'>'} \u2009M1.2\u2009million revenue. Year\u20093 \u2013 150 students, {'>'} \u2009M2\u2009million revenue.</p>
        </section>

        <section className="section">
          <h2>Social Impact (3\u2009year horizon)</h2>
          <ul>
            <li>Train over 270 learners.</li>
            <li>Support 25 partner schools.</li>
            <li>Launch at least 30 student businesses.</li>
            <li>Complete {'>'} \u2009100 community innovation projects.</li>
            <li>Create employment opportunities via student enterprises.</li>
            <li>Increase access to AI, engineering and entrepreneurship education.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Why Invest?</h2>
          <p>Investing in Future Stars Academy delivers youth employment, entrepreneurship, innovation, STEM education, AI readiness, sustainable development, community empowerment, economic diversification, technology adoption and national competitiveness.</p>
        </section>

        <section className="section">
          <h2>Conclusion</h2>
          <p>Future Stars Academy offers a new model of education for Lesotho—equipping learners with knowledge, skills, confidence and an entrepreneurial mindset to solve real‑world problems. The requested M300,000 will launch Phase\u2009One, building on substantial founder contributions and laying the foundation for a scalable, high‑impact institution.</p>
        </section>
      </main>

      <footer className="ftr">
        <p>Future Stars Academy \u2022 Maseru, Lesotho \u2022 \u00a9 2026</p>
        <button
          id="backToTop"
          className="back-to-top"
          aria-label="Back to top"
          type="button"
        >
          <svg className="progress-ring" viewBox="0 0 52 52" aria-hidden="true">
            <circle className="progress-ring-circle" r="22" cx="26" cy="26" />
            <circle className="progress-ring-progress" r="22" cx="26" cy="26" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </footer>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" strategy="lazyOnload" />
      <Script src="/export.js" strategy="lazyOnload" />
      <Script src="/ui.js" strategy="lazyOnload" />
    </>
  );
}