import { useNavigate } from "react-router-dom";
import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const features = [
  { icon: "bi-cpu", title: "ML-Powered Detection", text: "Trained and tested on 115,000+ URLs using various different ML models for the best results." },
  { icon: "bi-diagram-3", title: "XXX Algorithm", text: "XXX." },
  { icon: "bi-sliders", title: "22 Feature Extractions", text: "Features based on 6 categories: Length, Character-Composition, Special-Characters, Structural, Protocol and Entropy." },
  { icon: "bi-shield-check", title: "Domain Verification", text: "Validates domains purely on their lexical features." },
  { icon: "bi-lightning-charge", title: "Real-Time Analysis", text: "Get verdicts in under a second — no friction, just results." },
  { icon: "bi-lock", title: "Privacy First", text: "URLs are analyzed locally in your session, ensuring privacy." },
];

const stats = [
  { num: "XX.X%", label: "Accuracy" },
  { num: "115,000+", label: "URLs Trained" },
  { num: "22", label: "Features" },
  { num: "<1s", label: "Latency" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="app-bg">
      <PnNavbar />

      {/* Hero */}
      <header className="container text-center py-5 mt-4">
        <h1 className="pn-hero-title pn-hero-title--mint-gradient mt-3 pn-fade pn-delay-1">
          Detect phishing domains
          <br />
          before they <span className="pn-hero-highlight">reach you.</span>
        </h1>
        <p className="pn-hero-sub pn-hero-sub--grey pn-fade pn-delay-2">
          PhishNet.AI is a machine-learning based detection system that analyzes URLs in real time
          to determine whether a website is legitimate or a phishing attempt.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap pn-fade pn-delay-3">
          <button
            className="btn btn-pn-primary"
            onClick={() => navigate("/check-url")}
          >
            <i className="bi bi-search me-2"></i>Check URL
          </button>
        </div>

        {/* Stats */}
        <div className="row pn-panel mt-5 g-0 pn-fade pn-delay-4" style={{ padding: "1.25rem" }}>
          {stats.map((s) => (
            <div className="col-6 col-md-3 pn-stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Features */}
      <section id="features" className="container py-5 mt-4">
        <div className="text-center mb-5">
          <div className="pn-eyebrow">Capabilities</div>
          <h2 className="pn-section-title">Engineered for accuracy & trust</h2>
          <p className="pn-hero-sub pn-lead-muted">A modern detection stack combining feature engineering with proven gradient-boosted models.</p>
        </div>
        <div className="row g-4">
          {features.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="pn-card">
                <div className="pn-card-icon"><i className={`bi ${f.icon}`}></i></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <PnFooter />
    </div>
  );
};

export default Index;
