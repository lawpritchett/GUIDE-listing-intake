/* App — orchestrates state, navigation, persistence, tweaks */

const { useState: useStateApp, useEffect: useEffectApp } = React;

const STORAGE_KEY = 'guide-intake-v1';

function App() {
  const [step, setStep] = useStateApp(0);
  const [data, setData] = useStateApp(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      sellerName: '',
      propertyAddress: '',
      favoriteSpaces: [],
      improvements: [],
      concierge: [],
      documents: [],
      commsChannel: ['text', 'email'],
      priorities: [],
      avoid: [],
      photoTime: 'Guide can recommend — open to anything',
      showingNotice: '2 hours',
      cadence: 'Weekly recap',
      leaseback: 'No leaseback',
      parking: 'Driveway available',
      timeWeekdayAM: true,
      timeWeekdayPM: true,
      timeWeekdayEve: false,
      timeSat: true,
      timeSun: false,
      petsRemoved: true,
    };
  });
  const [submitted, setSubmitted] = useStateApp(false);

  // Persist
  useEffectApp(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }, [data]);

  // Tweaks
  const [t, setTweak] = useTweaks(window.__TWEAKS || {});
  useEffectApp(() => {
    document.body.classList.toggle('accent-ginko', t.accent === 'ginko');
    document.body.classList.toggle('density-airy', t.density === 'airy');
    document.body.classList.toggle('nav-header', t.navStyle === 'header');
  }, [t.accent, t.density, t.navStyle]);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const go = (i) => {
    setStep(i);
    if (i > 0) {
      // scroll the pane back to top
      requestAnimationFrame(() => {
        document.querySelector('.pane')?.scrollTo?.({ top: 0, behavior: 'smooth' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  const total = STEPS.length;
  const isLast = step === total - 2; // last form section, next goes to review
  const onNext = () => {
    if (step === total - 1) return; // already on review
    go(step + 1);
  };
  const onBack = () => go(Math.max(0, step - 1));
  const onSubmit = () => {
    setSubmitted(true);
    setStep(total - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const onEdit = (sectionId) => go(sectionId);

  if (step === 0) {
    return (
      <React.Fragment>
        <Welcome data={data} set={set} onBegin={() => go(1)} />
        <TweaksHost t={t} setTweak={setTweak} />
      </React.Fragment>
    );
  }

  return (
    <div className="app">
      <Rail step={step} onGo={go} address={data.propertyAddress} />
      <main className="pane" key={step}>
        {step === 1 && <StorySection data={data} set={set} />}
        {step === 2 && <LogisticsSection data={data} set={set} />}
        {step === 3 && <ListingPrepSection data={data} set={set} />}
        {step === 4 && <CommsSection data={data} set={set} />}
        {step === 5 && <OfferSection data={data} set={set} />}
        {step === 6 && (
          <ReviewSection
            data={data}
            onEdit={onEdit}
            onSubmit={onSubmit}
            submitted={submitted}
          />
        )}
      </main>
      {step < total - 1 && (
        <FootNav step={step} total={total} onBack={onBack} onNext={onNext} isLast={isLast} />
      )}
      <TweaksHost t={t} setTweak={setTweak} />
    </div>
  );
}

/* Tweaks panel */
function TweaksHost({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Aesthetic">
        <TweakRadio
          label="Accent surface"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
          options={[
            { value: 'ballroom', label: 'Stone' },
            { value: 'ginko', label: 'Sage' },
          ]}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          onChange={(v) => setTweak('density', v)}
          options={[
            { value: 'comfortable', label: 'Comfortable' },
            { value: 'airy', label: 'Airy' },
          ]}
        />
      </TweakSection>
      <TweakSection title="Navigation">
        <TweakRadio
          label="Nav style"
          value={t.navStyle}
          onChange={(v) => setTweak('navStyle', v)}
          options={[
            { value: 'rail', label: 'Left rail' },
            { value: 'header', label: 'Top header' },
          ]}
        />
      </TweakSection>
      <TweakSection title="Demo">
        <TweakButton onClick={() => {
          localStorage.removeItem(STORAGE_KEY);
          window.location.reload();
        }}>Reset all answers</TweakButton>
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
