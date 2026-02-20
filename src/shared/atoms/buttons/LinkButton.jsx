import { cn } from "@utils/cn";
import { Link } from "react-router-dom";

/**
 * Componente que renderiza un enlace como un botón.
 * @param {string} to - ruta del enlace (obligatorio)
 * @param {boolean} external - si es un enlace externo o no
 * @param {string} variant - variedad del botón (primary secondary) si no none esta por defecto
 * @param {string} className - clase css adicional
 * @param {*} children - contenido del botón
 * @param {*} ...props - propiedades adicionales del enlace para que tenga incluso onclick y sea funcional en donde se use
 * @returns {JSX.Element} - retorna una etiqueta <a> si el link abre otra página externa y retorna un link si se navega dentro de la misma web
 */

function LinkButton({ to, external, variant = "none", className, children, ...props }) {

    if (!to) {
        console.warn("LinkButton requiere la prop 'to'");
        return null;
    }

    const baseStyles = "btnLink";

    const variants = {
        none: "",
        primary: "btnLink-primary",
        secondary: "btnLink-secondary",

    };

    const { href, target, rel, ...rest } = props;

    if(external) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" className={ cn(baseStyles, variants[variant], className) } {...rest}>
                {children}
            </a>
        );
    } else {
        return (
            <Link to={to} className={cn(baseStyles, variants[variant], className)} {...rest}>
                {children}
            </Link>
        );
    }
}

export { LinkButton };
