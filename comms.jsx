/* SECTION 4 — Communication Preferences */

function CommsSection({ data, set }) {
  return (
    <div className="section">
      <div className="section-eyebrow">Section Four · Communication</div>
      <h2 className="section-title">How you like to be<br />kept in the loop.</h2>
      <p className="section-intro">
        We adjust pacing, channel, and detail to each seller. None of this is set in stone — change it
        anytime mid-listing by telling your advisor.
      </p>

      <Q
        head="04.01"
        prompt="Preferred way to reach you"
      >
        <Cards
          multi
          value={data.commsChannel}
          onChange={(v) => set('commsChannel', v)}
          options={[
            { id: 'text', title: 'Text message', sub: 'Fast and asynchronous.' },
            { id: 'email', title: 'Email', sub: 'Best for documents and threads.' },
            { id: 'phone', title: 'Phone call', sub: 'For decisions and discussion.' },
            { id: 'in-person', title: 'In person', sub: 'Coffee, the porch, our office.' },
          ]}
        />
      </Q>

      <Q
        head="04.02"
        prompt="How often should we check in?"
        help="The default for an active listing is a weekly recap, plus an immediate note for anything urgent."
      >
        <Seg
          value={data.cadence}
          onChange={(v) => set('cadence', v)}
          options={['As things happen', 'Daily summary', 'Weekly recap', 'Only when there is news']}
        />
      </Q>

      <Q
        head="04.03"
        prompt="Level of detail you want in updates"
      >
        <Cards
          value={data.detailLevel}
          onChange={(v) => set('detailLevel', v)}
          options={[
            { id: 'headlines', title: 'Headlines only', sub: '“Two showings Saturday, one offer pending.”' },
            { id: 'context', title: 'Headlines + context', sub: 'A short paragraph with our read.' },
            { id: 'full', title: 'Full briefing', sub: 'Showings, feedback, market shifts, recommended action.' },
          ]}
        />
      </Q>

      <Q
        head="04.04"
        prompt="Anyone else who should be on updates?"
        help="A spouse, attorney, financial advisor, family member. We'll add them to the thread."
        optional
      >
        <Long
          value={data.cc}
          onChange={(v) => set('cc', v)}
          rows={2}
          placeholder="Name, role, email — one per line."
        />
      </Q>

      <Q
        head="04.05"
        prompt="Decision-makers besides you"
        help="So we know who needs to weigh in on offers, terms, or pricing changes."
        optional
      >
        <Long
          value={data.decisionMakers}
          onChange={(v) => set('decisionMakers', v)}
          rows={2}
          placeholder="Names and how they're involved — partner, trustee, co-owner, etc."
        />
      </Q>

      <Q
        head="04.06"
        prompt="Travel or quiet periods on your calendar"
        help="So we can plan around them or quarterback decisions on your behalf when you're unreachable."
        optional
      >
        <Long
          value={data.unavailable}
          onChange={(v) => set('unavailable', v)}
          rows={2}
          placeholder="Dates or windows — “out of country May 14–22,” “anniversary weekend in June,” etc."
        />
      </Q>
    </div>
  );
}

window.CommsSection = CommsSection;
