import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <style>{`
        .contact-wrapper {
          padding: 0 20px 60px;
        }
        @media (min-width: 768px) {
          .contact-wrapper {
            padding: 0 120px 80px;
          }
        }
        .contact-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .contact-card {
            flex-direction: row;
            align-items: stretch;
          }
        }
        .contact-info-col {
          width: 100%;
          order: 2;
        }
        .contact-form-col {
          width: 100%;
          order: 1;
          padding: 32px 24px;
        }
        @media (min-width: 1024px) {
          .contact-info-col {
            width: 500px;
            flex-shrink: 0;
            order: 1;
          }
          .contact-form-col {
            flex: 1;
            order: 2;
            padding: 40px 48px;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-info-col">
            <ContactInfo />
          </div>
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
