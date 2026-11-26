
// Displays a logo or project thumbnail from src/assets/logos/.
// Supported formats: png, jpg, jpeg, svg, webp.

const found = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findAsset(file) {
  const key = Object.keys(found).find(
    (path) => path.split("/").pop().startsWith(file + ".")
  );
  return key ? found[key] : null;
}

export default function LogoSlot({
  logo,
  size = "md",
  kind = "logo",
  className = "",
}) {
  const src = findAsset(logo.file);
  const isThumbnail = kind === "thumbnail";

  const content = src ? (
    <img
      src={src}
      alt={logo.alt}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <span className="logo-placeholder">
      <span aria-hidden="true">＋</span>
      <span>
        {logo.name} {isThumbnail ? "thumbnail" : "logo"}
        <small>add {logo.file}.png to src/assets/logos</small>
      </span>
    </span>
  );

  return (
    <div
      className={[
        "logo-slot",
        `logo-${size}`,
        `asset-${kind}`,
        src ? "has-logo" : "is-empty",
        className,
      ].filter(Boolean).join(" ")}
    >
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
