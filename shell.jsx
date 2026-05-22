/* Shell — left rail navigation + bottom progress footer */

const STEPS = [
  { id: 0, key: 'welcome', num: '00', label: 'Begin' },
  { id: 1, key: 'story', num: '01', label: 'Property story' },
  { id: 2, key: 'logistics', num: '02', label: 'Showings & access' },
  { id: 3, key: 'listing', num: '03', label: 'Pre-market' },
  { id: 4, key: 'comms', num: '04', label: 'Communication' },
  { id: 5, key: 'offer', num: '05', label: 'Offer & timeline' },
  { id: 6, key: 'review', num: '06', label: 'Review & submit' },
];

function Rail({ step, onGo, address }) {
  return (
    <aside className="rail">
      <div className="rail-brand">
        <div className="rail-wordmark">GUIDE</div>
        <div className="rail-pill">ATX</div>
      </div>

      <div>
        <div className="rail-eyebrow">Listing intake</div>
        <div className="rail-title">{address || 'Your property'}</div>
      </div>

      <nav className="rail-nav" aria-label="Sections">
        {STEPS.slice(1).map((s) => {
          const isActive = s.id === step;
          const isDone = s.id < step;
          return (
            <button
              key={s.id}
              type="button"
              className={`rail-step ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
              onClick={() => onGo(s.id)}
            >
              <span className="rail-step-num">{s.num}</span>
              <span className="rail-step-label">{s.label}</span>
              <span className="rail-step-tick">✓</span>
            </button>
          );
        })}
      </nav>

      <div className="mobile-progress">
        <span>Step {Math.max(1, step)} of {STEPS.length - 1}</span>
        <span style={{ display: 'inline-flex', gap: 4 }}>
          {STEPS.slice(1).map((s) => (
            <span
              key={s.id}
              className={`dot ${s.id < step ? 'is-done' : ''} ${s.id === step ? 'is-active' : ''}`}
            ></span>
          ))}
        </span>
      </div>

      <div className="rail-foot">
        Guide Advisory Group<br />
        Powered by MODUS Real Estate
      </div>
    </aside>
  );
}

function FootNav({ step, total, onBack, onNext, isLast }) {
  const pct = Math.min(100, Math.round(((step) / (total - 1)) * 100));
  return (
    <div className="foot-nav">
      <button
        className="btn btn-ghost"
        onClick={onBack}
        disabled={step <= 1}
      >
        <span className="btn-arrow left"></span> Back
      </button>
      <div className="foot-meta">
        <span>Auto-saved</span>
        <span className="foot-bar">
          <span className="foot-bar-fill" style={{ width: `${pct}%` }}></span>
        </span>
        <span>{pct}%</span>
      </div>
      <button className="btn btn-primary" onClick={onNext}>
        {isLast ? 'Review' : 'Continue'} <span className="btn-arrow"></span>
      </button>
    </div>
  );
}

Object.assign(window, { Rail, FootNav, STEPS });
