/* Form primitives — used across all sections.
   Components exported to window for cross-script use. */

const { useState, useRef, useEffect } = React;

/* ---- Question container ---- */
function Q({ head, prompt, help, optional, children }) {
  return (
    <div className="q">
      <div className="q-stack">
        <div className="q-head">{head}</div>
        <div>
          <h3 className="q-prompt">
            {prompt}
            {optional ? <span className="q-optional">Optional</span> : null}
          </h3>
          {help ? <p className="q-help">{help}</p> : null}
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---- Short text ---- */
function Text({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      className="input"
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

/* ---- Long text ---- */
function Long({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      className="input"
      rows={rows}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

/* ---- Chip multi-select / single ---- */
function Chips({ options, value, onChange, multi = true }) {
  const arr = Array.isArray(value) ? value : value ? [value] : [];
  const toggle = (opt) => {
    if (multi) {
      const has = arr.includes(opt);
      onChange(has ? arr.filter((v) => v !== opt) : [...arr, opt]);
    } else {
      onChange(value === opt ? null : opt);
    }
  };
  return (
    <div className="chips">
      {options.map((opt) => {
        const on = multi ? arr.includes(opt) : value === opt;
        return (
          <button
            key={opt}
            type="button"
            className={`chip ${on ? 'is-on' : ''}`}
            onClick={() => toggle(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

/* ---- Hairline checkbox list ---- */
function CheckList({ options, value, onChange }) {
  const arr = Array.isArray(value) ? value : [];
  const toggle = (opt) => {
    const has = arr.includes(opt);
    onChange(has ? arr.filter((v) => v !== opt) : [...arr, opt]);
  };
  return (
    <div className="check-list">
      {options.map((opt) => {
        const on = arr.includes(opt);
        return (
          <div
            key={opt}
            className={`check-row ${on ? 'is-on' : ''}`}
            onClick={() => toggle(opt)}
            role="checkbox"
            aria-checked={on}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(opt); } }}
          >
            <div className="check-box"></div>
            <div>{opt}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ---- Big card grid (single or multi) ---- */
function Cards({ options, value, onChange, multi = false }) {
  const arr = Array.isArray(value) ? value : value ? [value] : [];
  const toggle = (id) => {
    if (multi) {
      const has = arr.includes(id);
      onChange(has ? arr.filter((v) => v !== id) : [...arr, id]);
    } else {
      onChange(value === id ? null : id);
    }
  };
  return (
    <div className="cards-grid">
      {options.map((o) => {
        const on = multi ? arr.includes(o.id) : value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            className={`card-pick ${on ? 'is-on' : ''}`}
            onClick={() => toggle(o.id)}
          >
            <div className="card-pick-title">{o.title}</div>
            {o.sub ? <div className="card-pick-sub">{o.sub}</div> : null}
          </button>
        );
      })}
    </div>
  );
}

/* ---- Segmented ---- */
function Seg({ options, value, onChange }) {
  return (
    <div className="seg">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`seg-btn ${value === opt ? 'is-on' : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ---- Toggle row ---- */
function Toggle({ title, help, value, onChange }) {
  return (
    <div className="tog-row">
      <div>
        <div className="tog-row-title">{title}</div>
        {help ? <div className="tog-row-help">{help}</div> : null}
      </div>
      <button
        type="button"
        className={`tog ${value ? 'is-on' : ''}`}
        onClick={() => onChange(!value)}
        aria-pressed={!!value}
      ></button>
    </div>
  );
}

function ToggleCard({ children }) {
  return <div className="toggle-card">{children}</div>;
}

/* ---- Note callout ---- */
function Note({ title, children }) {
  return (
    <div className="note">
      {title ? <strong>{title}</strong> : null}
      {children}
    </div>
  );
}

/* ---- Reassurance line ---- */
function Reassure({ children }) {
  return <div className="reassure">{children}</div>;
}

Object.assign(window, {
  Q, Text, Long, Chips, CheckList, Cards, Seg, Toggle, ToggleCard, Note, Reassure
});
