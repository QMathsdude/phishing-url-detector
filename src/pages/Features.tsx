import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const featureGroups = [
  {
    overline: "Model & Training",
    title: "Model & Training",
    items: [
      { icon: "bi-diagram-3", title: "XXX Algorithm", text: "XXX" },
      { icon: "bi-cpu", title: "115,000+ URLs", text: "Dataset of 85% legitimate and 15% phishing URLs. Imbalance was tackled using XXX." },
      { icon: "bi-graph-up", title: "XX.X% Accuracy", text: "XXX." },
    ],
  },
  {
  overline: "Feature Engineering",
  title: "Feature Engineering",
  items: [
    {
      icon: "bi-rulers",
      title: "Length",
      text: "Total length of URL, domain, TLD, path, and query."
    },
    {
      icon: "bi-fonts",
      title: "Character Composition",
      text: "Letter, digit, special-character counts and ratios."
    },
    {
      icon: "bi-at",
      title: "Special Characters",
      text: "Counts of 6 characters:\n = ? & . - _ and /."
    },
    {
      icon: "bi-slash",
      title: "Structural & Hierarchical",
      text: "Subdomain-count and presence of IP as hostname."
    },
    {
      icon: "bi-lock",
      title: "Protocol",
      text: "Presence of HTTPS protocol (TLS/SSL present)."
    },
    {
      icon: "bi-shuffle",
      title: "Entropy",
      text: "Shannon entropy of the whole URL string."
    }
  ]
  },
  {
    overline: "Experience",
    title: "Experience",
    items: [
      { icon: "bi-lightning-charge", title: "Sub-second Latency", text: "Instant verdicts so you can decide and move on." },
      { icon: "bi-lock", title: "Privacy First", text: "Your URLs stay in your session — and remain private." },
      { icon: "bi-phone", title: "Responsive UI", text: "Polished experience across desktop, tablet and mobile." },
    ],
  },
];

const Features = () => {
  return (
    <div className="app-bg">
      <PnNavbar />

      <header className="container text-center py-5 mt-3">
        <span className="pn-pill pn-fade">
          <span className="dot" /> What&apos;s inside
        </span>
        <h1 className="pn-hero-title pn-hero-title--gradient mt-4 pn-fade pn-delay-1">Features built for trust</h1>
        <p className="pn-hero-sub pn-lead-muted mt-3 pn-fade pn-delay-2">
          A clear look at the model, the data and the user experience that powers PhishNet.AI.
        </p>
      </header>

      {featureGroups.map((group) => (
        <section className="container py-4 pb-5" key={group.title}>
          <div className="pn-overline mb-2">{group.overline}</div>
          <h2 className="pn-section-title pn-section-title--left mb-4">{group.title}</h2>
          <div className="row g-4">
            {group.items.map((f) => (
              <div className="col-md-6 col-lg-4" key={f.title}>
                <div className="pn-card">
                  <div className="pn-card-icon">
                    <i className={`bi ${f.icon}`} />
                  </div>
                  <h3>{f.title}</h3>
                  <p className="whitespace-pre-line">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <PnFooter />
    </div>
  );
};

export default Features;
