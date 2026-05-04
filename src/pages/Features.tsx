import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const featureGroups = [
  {
    overline: "Model & Training",
    title: "Model & Training",
    items: [
      { icon: "bi-diagram-3", title: "XGBoost Classifier", text: "Gradient boosted trees tuned for binary phishing classification." },
      { icon: "bi-cpu", title: "2,000+ URL Dataset", text: "Balanced dataset of legitimate and phishing URLs trained in Google Colab." },
      { icon: "bi-graph-up", title: "98.7% Accuracy", text: "Validated on a held-out test split for reliable real-world performance." },
    ],
  },
  {
    overline: "Feature Engineering",
    title: "Feature Engineering",
    items: [
      { icon: "bi-link-45deg", title: "URL Lexical Features", text: "Length, special characters, subdomains, IP-as-hostname and more." },
      { icon: "bi-globe", title: "Domain Signals", text: "Age, WHOIS, DNS records, and registration patterns." },
      { icon: "bi-code-slash", title: "Page & Script Cues", text: "Embedded scripts, redirects, iFrames and form actions." },
    ],
  },
  {
    overline: "Experience",
    title: "Experience",
    items: [
      { icon: "bi-lightning-charge", title: "Sub-second Latency", text: "Instant verdicts so you can decide and move on." },
      { icon: "bi-lock", title: "Privacy First", text: "Your URLs stay in your session — nothing persisted." },
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
                  <p>{f.text}</p>
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
