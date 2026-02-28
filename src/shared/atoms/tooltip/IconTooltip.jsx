import { useState } from "react";
import { cn } from "@utils/cn";
import { Link } from "react-router-dom";
import { Download } from "@atoms/icons/LucideIcon";

/**
 * Componente que renderiza un enlace con un icono y un tooltip.
 * @param {string} to - ruta del enlace (obligatorio)
 * @param {string} type - tipo de enlace (local, mail, external, download) si no external esta por defecto
 * @param {string} color - color del tooltip (opcional)
 * @param {JSX.Element} icon - icono que se renderiza en el enlace (opcional)
 * @param {string} text - texto del tooltip (opcional)
 * @param {string} position - posicion del tooltip (top, bottom, left, right) si no none esta por defecto
 * @param {string} className - clase css adicional
 * @param {*} children - contenido adicional del enlace
 * @param {*} ...props - propiedades adicionales del enlace para que tenga incluido onclick y sea funcional en donde se use
 * @returns {JSX.Element} - retorna una etiqueta <a> si el link abre otra pagina externa o abre correo o descarga y retorna un link si se navega dentro de la misma web ya
 */
function IconTooltip({
  to,
  type = "external",
  color = "4A7378",
  icon = Download,
  text = "tooltip",
  position = "top",
  className,
  children,
  ...props
}) {
  if (!to) {
    console.warn("IconTooltip requiere la prop 'to'");
    return null;
  }

  const [isHover, setIsHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const { href, target, rel, ...rest } = props;

  const Icon = icon;

  async function handleCopyEmail(event, email) {
    event.preventDefault();
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1200);
    } catch {
      setIsCopied(false);
    }
  }

  if (type === "local") {
    return (
      <Link
        to={to}
        className={cn("btnSimple", className)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...rest}
      >
        <Icon stroke={isHover === true ? color : "currentColor"} />
        <div
          className={cn("tooltip", "tooltip-" + position, "text-white")}
          style={{
            background: color,
            transform:
              isHover === true
                ? "scale(1) translateY(0) translateX(0)"
                : `scale(0) ${position === "top" ? "translateY(100%)" : "translateY(0)"}  ${position === "bottom" ? "translateY(-100%)" : "translateY(0)"}  ${position === "left" ? "translateX(100%)" : "translateX(0)"}  ${position === "right" ? "translateX(-100%)" : "translateX(0)"}`,
            opacity: isHover ? 1 : 0,
            pointerEvents: isHover ? "auto" : "none",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          {text}
        </div>
        {children}
      </Link>
    );
  } else if (type === "mail") {
    const mailTo = to.startsWith("mailto:") ? to : `mailto:${to}`;
    const mailAddress = to.replace(/^mailto:/, "");

    return (
      <div
        className={cn("btnSimple", className)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...rest}
      >
        <button
          type="button"
          className="inline-flex items-center"
          onClick={() => {
            window.location.href = mailTo;
          }}
        >
          <Icon stroke={isHover === true ? color : "currentColor"} />
        </button>
        <div
          className={cn(
            "tooltip",
            "tooltip-" + position,
            "text-white",
            "gap-2",
          )}
          style={{
            background: color,
            transform:
              isHover === true
                ? "scale(1) translateY(0) translateX(0)"
                : `scale(0) ${position === "top" ? "translateY(100%)" : "translateY(0)"}  ${position === "bottom" ? "translateY(-100%)" : "translateY(0)"}  ${position === "left" ? "translateX(100%)" : "translateX(0)"}  ${position === "right" ? "translateX(-100%)" : "translateX(0)"}`,
            opacity: isHover ? 1 : 0,
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <button
            type="button"
            className="rounded-md border border-white/60 px-2 py-1 text-xs font-semibold hover:cursor-copy hover:bg-white hover:text-black"
            onClick={(event) => handleCopyEmail(event, mailAddress)}
          >
            {isCopied ? "Copiado" : "Copear"}
          </button>
          <a
            href={mailTo}
            className="rounded-md border border-white/60 px-2 py-1 text-xs font-semibold"
          >
            Enviar
          </a>
        </div>
        {children}
      </div>
    );
  } else if (type === "external") {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("btnSimple", className)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...rest}
      >
        <Icon stroke={isHover === true ? color : "currentColor"} />
        <div
          className={cn("tooltip", "tooltip-" + position, "text-white")}
          style={{
            background: color,
            transform:
              isHover === true
                ? "scale(1) translateY(0) translateX(0)"
                : `scale(0) ${position === "top" ? "translateY(100%)" : "translateY(0)"}  ${position === "bottom" ? "translateY(-100%)" : "translateY(0)"}  ${position === "left" ? "translateX(100%)" : "translateX(0)"}  ${position === "right" ? "translateX(-100%)" : "translateX(0)"}`,
            opacity: isHover ? 1 : 0,
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          {text}
        </div>
        {children}
      </a>
    );
  } else if (type === "download") {
    return (
      <a
        href={to}
        className={cn("btnSimple", className)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        download={"Jersson Arley Osma Cifuentes cv 2026.docx"}
        {...rest}
      >
        <Icon stroke={isHover === true ? color : "currentColor"} />
        <div
          className={cn("tooltip", "tooltip-" + position, "text-white")}
          style={{
            background: color,
            transform:
              isHover === true
                ? "scale(1) translateY(0) translateX(0)"
                : `scale(0) ${position === "top" ? "translateY(100%)" : "translateY(0)"}  ${position === "bottom" ? "translateY(-100%)" : "translateY(0)"}  ${position === "left" ? "translateX(100%)" : "translateX(0)"}  ${position === "right" ? "translateX(-100%)" : "translateX(0)"}`,
            opacity: isHover ? 1 : 0,
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          {text}
        </div>
        {children}
      </a>
    );
  } else {
    return null;
  }
}

export { IconTooltip };
