// Shows a logo if you've added the file, otherwise a friendly dashed placeholder.
// Add files to src/assets/logos/ named project-logo.* and terentia-logo.*
// If the logo entry in data.js has an `href`, the whole slot becomes a link.
// (.logo-link in index.css makes the anchor fill the slot.)
const found = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findLogo(file) {
  const key = Object.keys(found).find((p) => p.split("/").pop().startsWith(file + "."));
  return key ? found[key] : null;
}

export default function LogoSlot({ logo, size = "md", className = "" }) {
  const src = findLogo(logo.file);

  const content = src ? (
    <img src={src} alt={logo.alt} />
  ) : (
    <span className="logo-placeholder">
      <span aria-hidden="true">＋</span>
      <span>
        {logo.name} logo
        <small>add {logo.file}.png to src/assets/logos</small>
      </span>
    </span>
  );

  return (
    <div className={`logo-slot logo-${size} ${src ? "has-logo" : "is-empty"} ${className}`}>
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${logo.name} (opens in a new tab)`}
          className="logo-link"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
