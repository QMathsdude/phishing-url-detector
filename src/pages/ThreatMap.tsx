import { useNavigate } from "react-router-dom";
import PnNavbar from "@/components/PnNavbar";
import PnFooter from "@/components/PnFooter";

const KASPERSKY_MAP_URL = "https://cybermap.kaspersky.com/en/widget/dynamic/dark";

const ThreatMap = () => {
  const navigate = useNavigate();

  return (
    <div className="app-bg">
      <PnNavbar />

      <section className="container py-5 mt-2 text-center">
        <div className="pn-overline" style={{ textAlign: "center" }}>
          Live intelligence
        </div>
        <h1 className="pn-hero-title pn-hero-title--light mt-3" style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.25rem)" }}>
          Cyberthreat Live Map
        </h1>
        <p className="pn-hero-sub pn-lead-muted mx-auto mt-3" style={{ maxWidth: "36rem" }}>
          Real-time visualization of global cyber threats powered by Kaspersky.
        </p>

        <div className="pn-map-shell mt-4 mt-md-5 mx-auto" style={{ maxWidth: "1120px" }}>
          <iframe
            title="Kaspersky Cyberthreat Live Map"
            width="640"
            height="640"
            src={KASPERSKY_MAP_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="d-flex justify-content-center mt-4 mb-2">
          <button type="button" className="btn btn-pn-primary px-4" onClick={() => navigate("/")}>
            <i className="bi bi-arrow-left me-2" />
            Return Home
          </button>
        </div>

        <p className="small pn-lead-muted mb-0">
          Map ©{" "}
          <a
            href={KASPERSKY_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--pn-brand)", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Kaspersky
          </a>
          . Embedded for demonstration.
        </p>
      </section>

      <PnFooter />
    </div>
  );
};

export default ThreatMap;
