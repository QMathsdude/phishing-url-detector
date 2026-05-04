const PnFooter = () => (
  <footer className="pn-footer">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <div className="d-flex align-items-center gap-2">
        <span className="pn-brand-mark" style={{ width: 28, height: 28, fontSize: "0.85rem" }}>
          P
        </span>
        <span className="pn-brand-name pn-brand-name--footer">PhishNet.AI</span>
      </div>
      <small className="text-center text-md-end" style={{ color: "var(--pn-text-muted)" }}>
        © {new Date().getFullYear()} PhishNet.AI — Phishing Domain Prediction. Built with Machine Learning.
      </small>
    </div>
  </footer>
);

export default PnFooter;
