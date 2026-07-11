import Image from "next/image";
import Link from "next/link";

export default function MeetTeamBanner() {
  return (
    <section className="relative overflow-hidden">
      <style>{`
        .view-team-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          color: #14213D;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 0 24px 8px rgba(100, 120, 255, 0.5);
        }
        .view-team-btn:hover {
          background-color: #f0f0f5;
          transform: translateY(-3px);
        }
        .view-team-btn-desktop {
          font-size: 18px;
          padding: 18px 42px;
        }
        .view-team-btn-mobile {
          font-size: 15px;
          padding: 12px 28px;
          border-radius: 5px;
        }
      `}</style>

      {/* ── DESKTOP card ── */}
      <div
        className="hidden md:block relative overflow-hidden rounded-[40px]"
        style={{
          marginLeft: "160px",
          marginRight: "160px",
          background: "linear-gradient(to right, #14213D 46%, #22345C 100%)",
          minHeight: "200px",
        }}
      >
        {/* Dot mesh — right 55% */}
        <div className="absolute top-0 right-0 h-full" style={{ width: "40%" }}>
          <Image
            src="/team-mesh.png"
            alt=""
            fill
            className="object-cover object-left"
            style={{ opacity: 0.3 }}
            aria-hidden="true"
          />
          {/* Fade dots into the left gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #14213D 0%, transparent 35%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10" style={{ padding: "100px 56px" }}>
          <div className="flex flex-col gap-7" style={{ maxWidth: "650px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "600", color: "#ffffff", lineHeight: "1.25" }}>
              Meet the people building Catalyx
            </h2>
            <p style={{ fontSize: "20px", color: "#94a3b8", lineHeight: "1.7" }}>
              Bringing together technology, design and business expertise to simplify
              product digitization.
            </p>
            <div style={{ marginTop: "18px" }}>
              <Link
                href="/team"
                className="view-team-btn view-team-btn-desktop"
                style={{boxShadow: "0 6px 16px rgba(98,120,255,0.35), 0 12px 30px rgba(98,120,255,0.25)"}}
              >
                View Team →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE card ── */}
      <div
        className="md:hidden relative overflow-hidden rounded-2xl"
        style={{
          marginLeft: "16px",
          marginRight: "16px",
          background: "linear-gradient(to right, #14213D 46%, #22345C 100%)",
          minHeight: "280px",
        }}
      >
        {/* Dot mesh — right 55% */}
        <div className="absolute top-0 right-0 h-full" style={{ width: "55%" }}>
          <Image
            src="/team-mesh.png"
            alt=""
            fill
            className="object-cover object-left"
            style={{ opacity: 0.5 }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #14213D 0%, transparent 35%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10" style={{ padding: "36px 28px" }}>
          <div className="flex flex-col gap-4">
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", lineHeight: "1.3" }}>
              Meet the people building Catalyx
            </h2>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.7" }}>
              Bringing together technology, design and business expertise to simplify
              product digitization.
            </p>
            <div style={{ marginTop: "10px" }}>
              <Link
                href="/team"
                className="view-team-btn view-team-btn-mobile"
                style={{boxShadow: "0 6px 16px rgba(98,120,255,0.35), 0 12px 30px rgba(98,120,255,0.25)"}}
              >
                View Team →
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
