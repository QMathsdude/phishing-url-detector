import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const CheckUrl = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<null | { safe: boolean; url: string; score: number, components: Record<string, string>, features: Record<string, number> }>(null);
  const [loading, setLoading] = useState(false);

  // Fake API response
  // const featuresAPI = {
  //   url_len: 86,           
  //   dom_len: 42,           
  //   tld_len: 3,            
  //   is_ip: 0,              
  //   subdom_cnt: 3,         
  //   letter_cnt: 65,        
  //   digit_cnt: 0,          
  //   special_cnt: 8,        
  //   eq_cnt: 1,             
  //   qm_cnt: 1,             
  //   amp_cnt: 0,            
  //   dot_cnt: 5,             
  //   dash_cnt: 1,          
  //   under_cnt: 0,          
  //   letter_ratio: 0.76,    
  //   digit_ratio: 0.0,      
  //   spec_ratio: 0.09,      
  //   is_https: 0,           
  //   slash_cnt: 2,          
  //   entropy: 4.2,          
  //   path_len: 12,          
  //   query_len: 16          
  // };
  // const dataAPI = {
  //   safe: true,
  //   score: 10,
  //   features: featuresAPI,
  // }

  // Logic of classifying legitimate or phishing
  const handleAnalyze = async (e?: React.FormEvent) => {
    // When form submitted, prevent page reload
    e?.preventDefault();
    // TODO: INPUT VALIDATION
    if (!url.trim()) return;
    // Show loading spinner + clear previous results
    setLoading(true);
    setResult(null);
    // Simulated API delay
    // setTimeout(() => {
    //   // Set results after receiving API response + stop loading spinner
    //   setResult({ safe: dataAPI.safe, url, score: dataAPI.score, features: dataAPI.features });
    //   setLoading(false);
    // }, 1000);

    try {
      // Make the actual API call
      // const response = await fetch("http://127.0.0.1:8000/api/check_url", {
      const response = await fetch("https://phishing-url-detector-backend-yncw.onrender.com/api/check_url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      const dataAPI = await response.json();

      // Set results from API response
      setResult({
        safe: dataAPI.safe,
        url: url,
        score: dataAPI.score,
        components: dataAPI.components,
        features: dataAPI.features
      });
    } catch (error) {
      console.error("Error analyzing URL:", error);
      alert("An error occurred while analyzing the URL. Please try again.");
    } finally {
      // Stop loading spinner
      setLoading(false);
    }
  };

  return (
    <div className="app-bg">
      <PnNavbar />
      {/* URL input section */}
      <section className="container py-5 mt-3">
        <div className="row align-items-center g-5">
          {/* Check a URL */}
          <div className="col-lg-5 pn-fade">
            <div className="pn-eyebrow">URL Checker</div>
            <h1 className="pn-hero-title mt-2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", textAlign: "left" }}>
              Check a URL
            </h1>
            <p className="mt-3" style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
              Add the URL of a website to verify whether it is{" "}
              <span style={{ color: "var(--brand)", fontWeight: 600 }}>legitimate</span> or{" "}
              <span style={{ color: "var(--danger)", fontWeight: 600 }}>phishing</span>.
              Our XXX model evaluates 22 distinct features to deliver an instant verdict.
            </p>
            <ul className="list-unstyled mt-4" style={{ color: "var(--text-muted)" }}>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>Instant analysis</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>No data stored</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: "var(--accent)" }}></i>22-feature ML model</li>
            </ul>
          </div>

          {/* Website URL */}
          <div className="col-lg-7 pn-fade pn-delay-2">
            <div className="pn-panel py-3 px-2">
              <form onSubmit={handleAnalyze}>
                <label className="pn-eyebrow d-block mb-2">Website URL</label>
                <input
                  type="text"
                  className="pn-input"
                  placeholder="https://www.example.com/"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="d-flex gap-2 mt-3 flex-wrap justify-content-center">
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

              {/* Danger or Safe Indicator */}
              {result && (
                <div className="pn-fade pn-delay-1">
                  <div className={`pn-result mt-4 ${result.safe ? "safe" : "unsafe"}`}>
                    <i className={`bi ${result.safe ? "bi-shield-check" : "bi-exclamation-triangle-fill"} icon`}></i>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-baseline">
                        <h5 className="mb-1" style={{ color: result.safe ? "var(--accent)" : "var(--danger)" }}>
                          {result.safe ? "Looks Legitimate" : "Potential Phishing Detected"}
                        </h5>
                        <small style={{ color: "var(--text-muted)" }}>Risk: {result.score}%</small>
                      </div>
                      <small style={{ color: "var(--text-muted)", wordBreak: "break-all", overflowWrap: "anywhere" }} className="d-block">
                        {result.url}
                      </small>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* URL Breakdown Section */}
      {result && (
        <section id="features" className="container py-5 mt-4 pn-fade pn-delay-1">
          <div className="text-center mb-5">
            <div className="pn-eyebrow">Breakdown</div>
            <h2 className="pn-section-title">Your URL Components</h2>
          </div>
          <div className="pn-panel" style={{ padding: "1.25rem" }}>
            <div className="row g-4">
              {Object.entries(result.components).map(([label, value]) => (
                <div className="col-md-4 col-sm-6" key={label}>
                  <div className="pn-stat text-center">
                    <div className="num" style={{ fontSize: '1.4rem', wordBreak: 'break-all', overflowWrap: 'anywhere'}}>
                      {value || "—"}
                    </div>
                    <div className="label">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {result && (
        <section id="features" className="container py-5 mt-4 pn-fade pn-delay-1">
          <div className="text-center mb-5">
            <div className="pn-eyebrow">22 Features</div>
            <h2 className="pn-section-title">Engineered for Analysis</h2>
          </div>
          {/* Stats-style panel */}
          <div className="pn-panel" style={{ padding: "1.25rem" }}>
            <div className="row g-4">
              {Object.entries(result.features).map(([label, value]) => (
                <div className="col-md-4 col-sm-6" key={label}>
                  <div className="pn-stat text-center">
                    <div className="num">
                      {value % 1 !== 0 ? value.toFixed(3) : value}
                    </div>
                    <div className="label">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PnFooter />
    </div>
  );
};

export default CheckUrl;
