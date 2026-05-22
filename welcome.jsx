/* Welcome / introduction screen */

function Welcome({ data, set, onBegin }) {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <div className="welcome-brand-top">
          <div className="rail-wordmark">GUIDE</div>
          <div className="rail-pill">ATX</div>
        </div>

        <div>
          <div className="section-eyebrow" style={{ marginBottom: 28 }}>
            Listing intake · Private to you
          </div>
          <h1 className="welcome-hero">
            A quiet hand-off,<br />
            <em>before the listing begins.</em>
          </h1>
          <p className="welcome-lead">
            This helps our team streamline launch preparation, reduce unnecessary back-and-forth,
            and tailor the listing experience to your property and preferences.
          </p>
          <p className="welcome-lead" style={{ marginTop: 18 }}>
            We've kept it short on purpose. Skip anything that doesn't apply — there are no
            wrong answers, and nothing is final.
          </p>

          <div className="welcome-meta-grid">
            <div className="item">
              <div className="label">Length</div>
              <div className="value">5–10 min</div>
            </div>
            <div className="item">
              <div className="label">Sections</div>
              <div className="value">Five</div>
            </div>
            <div className="item">
              <div className="label">Progress</div>
              <div className="value">Auto-saved</div>
            </div>
          </div>

          <div className="q" style={{ marginTop: 56, borderTop: '1px solid var(--line)' }}>
            <div className="q-stack">
              <div className="q-head">Before we begin</div>
              <div>
                <h3 className="q-prompt">Whose listing is this for?</h3>
                <div className="row-inputs" style={{ marginTop: 12 }}>
                  <div>
                    <label className="q-help" style={{ display: 'block', marginBottom: 4 }}>Your name</label>
                    <Text value={data.sellerName} onChange={(v) => set('sellerName', v)} placeholder="First and last" />
                  </div>
                  <div>
                    <label className="q-help" style={{ display: 'block', marginBottom: 4 }}>Property address</label>
                    <Text value={data.propertyAddress} onChange={(v) => set('propertyAddress', v)} placeholder="1407 W 9th St, Austin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingTop: 8 }}>
          <div className="foot-meta" style={{ fontSize: 10 }}>
            <span>Prepared for {data.sellerName || '—'}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Powered by MODUS Real Estate</span>
          </div>
          <button className="btn btn-primary" onClick={onBegin}>
            Begin <span className="btn-arrow"></span>
          </button>
        </div>
      </div>

      <div className="welcome-right">
        <img src="assets/austin-skyline.png" alt="Austin skyline" />
        <div className="welcome-overlay">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="rail-wordmark" style={{ color: 'var(--beluga)', fontSize: 18 }}>GUIDE</div>
              <div className="rail-pill" style={{ borderColor: 'var(--beluga)', color: 'var(--beluga)' }}>ATX</div>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(240,241,242,0.55)' }}>
              Private · 2026
            </div>
          </div>

          <div>
            <p className="welcome-quote">
              "We read neighborhoods before we read MLS — and we'd rather know the story of your
              home than write it from scratch."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Welcome = Welcome;
