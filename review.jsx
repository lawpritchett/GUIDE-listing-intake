/* Review & Submit */

function formatVal(v) {
  if (v === null || v === undefined || v === '') return null;
  if (Array.isArray(v)) return v.length ? v.join(' · ') : null;
  if (typeof v === 'boolean') return v ? 'Yes' : null;
  return String(v);
}

function ReviewSection({ data, onEdit, onSubmit, submitted }) {
  const blocks = [
    {
      id: 1,
      head: 'Section One — Property story',
      rows: [
        ['What drew you to the home', data.drewYou],
        ['Favorite spaces / features', data.favoriteSpaces],
        ['What guests compliment', data.guestCompliments],
        ['Unique about lot or lifestyle', data.lotSpecial],
        ['Improvements completed', data.improvements],
        ['Improvement notes', data.improvementsNote],
        ['Neighborhood spots', data.neighborhoodSpots],
        ['Anything else for a future owner', data.elseAboutHome],
      ],
    },
    {
      id: 2,
      head: 'Section Two — Showings &amp; access',
      rows: [
        ['Occupancy', occupancyLabel(data.occupancy)],
        ['Preferred notice', data.showingNotice],
        ['Available windows', toggledWindows(data)],
        ['Schedule notes', data.scheduleNotes],
        ['Pets present during showings', data.petsPresent ? 'Yes' : null],
        ['Pets removed for showings', data.petsRemoved ? 'Yes' : null],
        ['Pet notes', data.petsNotes],
        ['Gate code', data.gateCode],
        ['Alarm code', data.alarmCode],
        ['Access notes', data.accessNotes],
        ['Parking', data.parking],
        ['Off-limits areas', data.offLimits],
      ],
    },
    {
      id: 3,
      head: 'Section Three — Pre-market &amp; marketing',
      rows: [
        ['Concierge services', data.concierge],
        ['Planned repairs', data.plannedRepairs],
        ['Documents on hand', data.documents],
        ['Photography timing', data.photoTime],
        ['Photo timing notes', data.photoTimeNote],
        ['Exclusions from photography', data.photoExclude],
        ['Privacy preferences', privacyList(data)],
      ],
    },
    {
      id: 4,
      head: 'Section Four — Communication',
      rows: [
        ['Channel', commsChannelLabels(data.commsChannel)],
        ['Cadence', data.cadence],
        ['Detail level', detailLabel(data.detailLevel)],
        ['Others to include', data.cc],
        ['Decision-makers', data.decisionMakers],
        ['Travel / quiet periods', data.unavailable],
      ],
    },
    {
      id: 5,
      head: 'Section Five — Offer &amp; timeline',
      rows: [
        ['Ideal closing window', data.closeWindow],
        ['Specific date', data.closeDate],
        ['Leaseback', data.leaseback],
        ['Priorities besides price', data.priorities],
        ['Terms to avoid', data.avoid],
        ['Else', data.elseOffer],
      ],
    },
  ];

  if (submitted) {
    return (
      <div className="done">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Received · Thank you
        </div>
        <h1>That's everything we need to begin.</h1>
        <p>
          Your Guide team has been notified. Expect a short note within the day, and a calendar
          invite for the launch conversation within forty-eight hours. Everything you shared is
          private to your Guide team.
        </p>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-eyebrow">Final · A last look</div>
      <h2 className="section-title">Confirm what you'd like<br />us to see.</h2>
      <p className="section-intro">
        A summary of everything you shared. Edit anything that's not quite right — or send
        and we'll take it from here.
      </p>

      {blocks.map((b) => (
        <div key={b.id} className="review-block">
          <div className="review-head" dangerouslySetInnerHTML={{ __html: b.head }} />
          <div className="review-body">
            {b.rows.filter(([, v]) => formatVal(v)).length === 0 ? (
              <div className="pair">
                <div className="pair-a empty">Skipped — that's fine.</div>
              </div>
            ) : (
              b.rows.map(([q, v], i) => {
                const f = formatVal(v);
                if (!f) return null;
                return (
                  <div className="pair" key={i}>
                    <div className="pair-q">{q}</div>
                    <div className="pair-a">{f}</div>
                  </div>
                );
              })
            )}
          </div>
          <button className="review-edit" onClick={() => onEdit(b.id)}>Edit</button>
        </div>
      ))}

      <div className="submit-card">
        <div className="eyebrow">Ready when you are</div>
        <h3>Send to your advisor.</h3>
        <p>
          We'll review tonight, follow up tomorrow with timing for our launch call, and queue
          any concierge requests in the meantime. Nothing leaves Guide without your sign-off.
        </p>
        <div className="row">
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit intake <span className="btn-arrow"></span>
          </button>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--ginko)', letterSpacing: '0.04em' }}>
            Auto-saved · Private to Guide ATX
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Helpers for review labels ---- */
function occupancyLabel(v) {
  return ({
    owner: 'Owner-occupied',
    vacant: 'Vacant',
    tenant: 'Tenant-occupied',
    str: 'Short-term rental',
  })[v] || null;
}

function detailLabel(v) {
  return ({
    headlines: 'Headlines only',
    context: 'Headlines plus context',
    full: 'Full briefing',
  })[v] || null;
}

function commsChannelLabels(arr) {
  if (!Array.isArray(arr) || !arr.length) return null;
  const m = { text: 'Text', email: 'Email', phone: 'Phone', 'in-person': 'In person' };
  return arr.map((x) => m[x] || x).join(' · ');
}

function toggledWindows(data) {
  const arr = [];
  if (data.timeWeekdayAM) arr.push('Weekday mornings');
  if (data.timeWeekdayPM) arr.push('Weekday afternoons');
  if (data.timeWeekdayEve) arr.push('Weekday evenings');
  if (data.timeSat) arr.push('Saturdays');
  if (data.timeSun) arr.push('Sundays');
  return arr.length ? arr.join(' · ') : null;
}

function privacyList(data) {
  const arr = [];
  if (data.privAddress) arr.push('Withhold address from marketing');
  if (data.privSocial) arr.push('No social-media posting of interiors');
  if (data.privSign) arr.push('No yard sign');
  if (data.privOpen) arr.push('No open houses');
  if (data.privScreen) arr.push('Pre-screen all showing requests');
  return arr.length ? arr.join(' · ') : null;
}

window.ReviewSection = ReviewSection;
