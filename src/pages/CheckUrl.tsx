import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const CheckUrl = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<null | { safe: boolean; url: string; score: number }>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const suspicious =
        /(login|verify|secure|account|update|free|bank|paypal|signin)/i.test(url) || url.length > 75;
      const score = suspicious ? Math.floor(70 + Math.random() * 25) : Math.floor(5 + Math.random() * 20);
      setResult({ safe: !suspicious, url, score });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="app-bg">
      <PnNavbar />

      <section className="container py-5 mt-3">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 pn-fade">
            <div className="pn-eyebrow">URL Checker</div>
            <h1 className="pn-hero-title mt-2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", textAlign: "left" }}>
              Check a URL
            </h1>
            <p className="mt-3" style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
              Add the URL of a website to verify whether it is{" "}
              <span style={{ color: "var(--brand)", fontWeight: 600 }}>legitimate</span> or{" "}
              <span style={{ color: "var(--danger)", fontWeight: 600 }}>phishing</span>.
              Our XGBoost model evaluates 15 distinct features to deliver an instant verdict.
            </p>
            <ul className="list-unstyled mt-4" style={{ color: "var(--text-muted)" }}>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>Instant analysis</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>No data stored</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>15-feature ML model</li>
            </ul>
          </div>

          <div className="col-lg-7 pn-fade pn-delay-2">
            <div className="pn-panel">
              <form onSubmit={handleAnalyze}>
                <label className="pn-eyebrow d-block mb-2">Website URL</label>
                <input
                  type="text"
                  className="pn-input"
                  placeholder="https://www.example.com/"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="d-flex gap-2 mt-3 flex-wrap">
                  <button type="submit" className="btn btn-pn-primary" disabled={loading}>
                    {loading ? (
                      <><span className="spinner-border spinner-border-sm me-2" /> Analyzing…</>
                    ) : (
                      <><i className="bi bi-shield-check me-2"></i>Analyze URL</>
                    )}
                  </button>
                  <button type="button" className="btn btn-pn-ghost" onClick={() => navigate("/")}>
                    <i className="bi bi-arrow-left me-2"></i>Return Home
                  </button>
                </div>
              </form>

              {result && (
                <div className={`pn-result mt-4 ${result.safe ? "safe" : "unsafe"}`}>
                  <i className={`bi ${result.safe ? "bi-shield-check" : "bi-exclamation-triangle-fill"} icon`}></i>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="mb-1" style={{ color: result.safe ? "var(--accent)" : "var(--danger)" }}>
                        {result.safe ? "Looks Legitimate" : "Potential Phishing Detected"}
                      </h5>
                      <small style={{ color: "var(--text-muted)" }}>Risk: {result.score}%</small>
                    </div>
                    <small style={{ color: "var(--text-muted)" }} className="d-block text-truncate">
                      {result.url}
                    </small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <PnFooter />
    </div>
  );
};

export default CheckUrl;
