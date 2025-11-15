import { site } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} {site.business.name}
        </p>
        <p className="text-xs opacity-70 mt-2">
          {site.business.location}
        </p>
      </div>
    </footer>
  );
}
