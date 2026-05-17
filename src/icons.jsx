// Icon set — inline SVGs. Simple, geometric, original.
const Icon = ({ name, size = 20, stroke = 1.8, className = "" }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", className };
  switch (name) {
    case "home": return <svg {...p}><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>;
    case "dashboard": return <svg {...p}><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>;
    case "gear": return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "file": return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>;
    case "flow": return <svg {...p}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/><path d="M12 14v1"/></svg>;
    case "chart": return <svg {...p}><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-6"/></svg>;
    case "megaphone": return <svg {...p}><path d="M3 11v2a4 4 0 0 0 4 4h1l4 3V4L8 7H7a4 4 0 0 0-4 4z"/><path d="M17 7a5 5 0 0 1 0 10"/></svg>;
    case "users": return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "building": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01"/></svg>;
    case "rocket": return <svg {...p}><path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2.2 0-3-.8-.8-2.2-.8-3 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-9.5A11 11 0 0 1 22 2a11 11 0 0 1-.5 8 22 22 0 0 1-9.5 5z"/><path d="M9 12H4s.5-2.7 2-4c1.7-1.4 5-2 5-2"/><path d="M12 15v5s2.7-.5 4-2c1.4-1.4 2-5 2-5"/></svg>;
    case "bulb": return <svg {...p}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 14a5 5 0 1 0-6 0c.7.5 1 1.3 1 2v2h4v-2c0-.7.3-1.5 1-2z"/></svg>;
    case "plus": return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case "arrow-right": return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "download": return <svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>;
    case "upload": return <svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>;
    case "search": return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
    case "wrench": return <svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z"/></svg>;
    case "truck": return <svg {...p}><rect x="1" y="6" width="14" height="10" rx="1"/><path d="M15 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
    case "shield": return <svg {...p}><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z"/></svg>;
    case "leaf": return <svg {...p}><path d="M11 20A7 7 0 0 1 4 13c0-3.9 3.1-8 7-8 3.9 0 10 3 10 10-3.5 0-7 2-10 5z"/><path d="M4 20s4-3 7-10"/></svg>;
    case "clock": return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "check": return <svg {...p}><path d="M5 12l5 5 10-11"/></svg>;
    case "x": return <svg {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "pdf": return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>;
    case "image": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>;
    case "link": return <svg {...p}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>;
    case "edit": return <svg {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
    case "target": return <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>;
    case "trend": return <svg {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>;
    case "bell": return <svg {...p}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>;
    case "menu": return <svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "calendar": return <svg {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
    case "folder": return <svg {...p}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>;
    default: return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

window.Icon = Icon;
