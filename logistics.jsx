/* SECTION 2 — Showing + Property Logistics */

function LogisticsSection({ data, set }) {
  return (
    <div className="section">
      <div className="section-eyebrow">Section Two · Showings &amp; access</div>
      <h2 className="section-title">How the house should be<br />approached, day to day.</h2>
      <p className="section-intro">
        The operational details — so we can coordinate showings without circling back for codes,
        timing windows, or who's at home. We'll always confirm before unusual or back-to-back visits.
      </p>

      <Q
        head="02.01"
        prompt="What's the occupancy situation?"
      >
        <Cards
          value={data.occupancy}
          onChange={(v) => set('occupancy', v)}
          options={[
            { id: 'owner', title: 'Owner-occupied', sub: 'You live there now.' },
            { id: 'vacant', title: 'Vacant', sub: 'No one is currently living there.' },
            { id: 'tenant', title: 'Tenant-occupied', sub: 'Long-term lease in place.' },
            { id: 'str', title: 'Short-term rental', sub: 'Active STR (Airbnb / VRBO).' },
          ]}
        />
      </Q>

      <Q
        head="02.02"
        prompt="Preferred showing notice"
        help="What's a comfortable heads-up before a visit? We'll respect this as the default."
      >
        <Seg
          value={data.showingNotice}
          onChange={(v) => set('showingNotice', v)}
          options={['1 hour', '2 hours', '4 hours', 'Same day', '24 hours']}
        />
      </Q>

      <Q
        head="02.03"
        prompt="Days and hours that work — or don't"
        help="Toggle anything that's a hard no. Leave the rest open."
      >
        <ToggleCard>
          <Toggle
            title="Weekday mornings (before noon)"
            value={data.timeWeekdayAM}
            onChange={(v) => set('timeWeekdayAM', v)}
          />
          <Toggle
            title="Weekday afternoons"
            value={data.timeWeekdayPM}
            onChange={(v) => set('timeWeekdayPM', v)}
          />
          <Toggle
            title="Weekday evenings (after 6 pm)"
            value={data.timeWeekdayEve}
            onChange={(v) => set('timeWeekdayEve', v)}
          />
          <Toggle
            title="Saturdays"
            value={data.timeSat}
            onChange={(v) => set('timeSat', v)}
          />
          <Toggle
            title="Sundays"
            value={data.timeSun}
            onChange={(v) => set('timeSun', v)}
          />
        </ToggleCard>
        <div style={{ marginTop: 18 }}>
          <Long
            value={data.scheduleNotes}
            onChange={(v) => set('scheduleNotes', v)}
            placeholder="Recurring conflicts, naptimes, work-from-home days, dog-walking windows — anything we should know."
            rows={2}
          />
        </div>
      </Q>

      <Q
        head="02.04"
        prompt="Pets on property"
      >
        <ToggleCard>
          <Toggle
            title="Pets are present during showings"
            help="If yes, we'll plan around them and flag in showing instructions."
            value={data.petsPresent}
            onChange={(v) => set('petsPresent', v)}
          />
          <Toggle
            title="Pets will be removed for each showing"
            value={data.petsRemoved}
            onChange={(v) => set('petsRemoved', v)}
          />
        </ToggleCard>
        <div style={{ marginTop: 14 }}>
          <Long
            value={data.petsNotes}
            onChange={(v) => set('petsNotes', v)}
            placeholder="Names, what to expect, any special instructions."
            rows={2}
          />
        </div>
      </Q>

      <Q
        head="02.05"
        prompt="Access details"
        help="We'll set up a digital lockbox by default. Anything below overrides that."
      >
        <div className="row-inputs">
          <div>
            <label className="q-help" style={{ display: 'block', marginBottom: 4 }}>Gate / community code</label>
            <Text value={data.gateCode} onChange={(v) => set('gateCode', v)} placeholder="Optional" />
          </div>
          <div>
            <label className="q-help" style={{ display: 'block', marginBottom: 4 }}>Alarm code &amp; disarm steps</label>
            <Text value={data.alarmCode} onChange={(v) => set('alarmCode', v)} placeholder="Optional" />
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <Long
            value={data.accessNotes}
            onChange={(v) => set('accessNotes', v)}
            placeholder="Side gate, sticky lock, parking quirks, neighborhood directions, garage code…"
            rows={2}
          />
        </div>
      </Q>

      <Q
        head="02.06"
        prompt="Parking for showings"
      >
        <Chips
          multi={false}
          value={data.parking}
          onChange={(v) => set('parking', v)}
          options={[
            'Driveway available',
            'Street parking (no permit)',
            'Street parking (permit zone)',
            'Garage may be used',
            'Limited — coordinate ahead',
          ]}
        />
      </Q>

      <Q
        head="02.07"
        prompt="Anything off-limits during showings?"
        help="Closets, offices, a closed wing, the casita — anything we should keep closed."
        optional
      >
        <Long
          value={data.offLimits}
          onChange={(v) => set('offLimits', v)}
          placeholder="Optional. We'll honor whatever you note."
          rows={2}
        />
      </Q>
    </div>
  );
}

window.LogisticsSection = LogisticsSection;
