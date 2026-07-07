// ─── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Team ──────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

// ─── About Page ────────────────────────────────────────────────────────────────

export interface BeforeCommerceStep {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface DifferenceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}

// ─── Contact ───────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}
