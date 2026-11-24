// Shows a logo if you've added the file, otherwise a friendly dashed placeholder.
// Add files to src/assets/logos/ named project-logo.* and terentia-logo.*
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
  return (
    <div className={`logo-slot logo-${size} ${src ? "has-logo" : "is-empty"} ${className}`}>
      {src ? (
        <img src={src} alt={logo.alt} />
      ) : (
        <span className="logo-placeholder">
          <span aria-hidden="true">＋</span>
          <span>
            {logo.name} logo
            <small>add {logo.file}.png to src/assets/logos</small>
          </span>
        </span>
      )}
    </div>
  );
}
