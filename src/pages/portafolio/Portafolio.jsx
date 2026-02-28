import { IconTooltip } from "@atoms/tooltip/IconTooltip";
import { GitHub, Linkeding, Mail, Download } from "@atoms/icons/LucideIcon";

function Portafolio() {
  return (
    <div className="bg-gradient grid min-h-screen w-full grid-cols-3 grid-rows-5 gap-4 px-8 py-16">
      <article className="bg-primary-600 shadow-secondary-500 col-start-1 col-end-2 row-start-1 row-end-3 flex flex-wrap items-center justify-center gap-4 rounded-xl p-4 shadow-md">
        <h1 className="typo-title border-accent-a text-secondary-500 border-b-4">
          Fronted Developer
        </h1>
        <figure className="border-accent-a relative h-28 w-28 overflow-hidden rounded-full border-10 [border-style:outset] bg-white">
          <img
            src="/assets/jersson.jpg"
            alt="imagen de perfil de jersson"
            className="absolute -top-6 left-0 w-24"
          />
        </figure>
        <h2 className="typo-subtitle text-secondary-500">Jersson Osma</h2>
        <p className="typo-text text-secondary-500">
          Frontend enfocado en Desarrollo herramientas web internas que
          optimizan procesos operativos.
        </p>
        <div className="flex w-full flex-wrap justify-center gap-2">
          <IconTooltip
            to="https://github.com/jerssonarleyosma"
            type="external"
            color="black"
            icon={GitHub}
            text="GitHub"
            position="top"
          />

          <IconTooltip
            to="https://www.linkedin.com/in/jersson-osma-3236bb2a9/"
            type="external"
            color="#0e76a8"
            icon={Linkeding}
            text="linkedin"
            position="top"
          />

          <IconTooltip
            to="jerssonarleyosma@gmail.com"
            type="mail"
            color="red"
            icon={Mail}
            text="jerssonarleyosma@gmail.com"
            position="top"
          />

          <IconTooltip
            to="/assets/Jersson_Osma_CV_Frontend_2026.docx"
            type="download"
            color="#07a630"
            icon={Download}
            text="CV"
            position="top"
          />
        </div>
      </article>

      <div className="bg-secondary-500 shadow-secondary-500 col-start-1 col-end-2 row-start-3 row-end-6 rounded-xl p-4 shadow-lg">
        fomulario de contacto
      </div>

      <div className="bg-primary-600 shadow-secondary-500 clip-notch-tr col-start-2 col-end-4 row-start-1 row-end-4 rounded-xl p-4 shadow-md">
        Proyectos
      </div>

      <div className="bg-primary-600 shadow-secondary-500 col-start-2 col-end-4 row-start-4 row-end-6 rounded-xl p-4 shadow-md">
        certificaciones
      </div>
    </div>
  );
}

export { Portafolio };
