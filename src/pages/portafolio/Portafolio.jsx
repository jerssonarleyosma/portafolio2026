import { useState } from 'react'
import {LinkButton} from '@atoms/buttons/LinkButton'
import { GitHub, Linkeding, Mail, Download, Send, Code, Eye, Filter, Triangle } from '../../shared/atoms/icons/LucideIcon'


function Portafolio() {
  
  return (
    <div className="grid min-h-screen w-full bg-gradient grid-cols-1 gap-4 p-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-5 lg:px-12">
      <div className="rounded-xl bg-primary-600 shadow-md shadow-secondary-500 p-4 md:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
        presentacion
      </div>

      <div className="rounded-xl bg-secondary-500 shadow-lg shadow-secondary-500 p-4 md:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-6">
        fomulario de contacto
      </div>

      <div className="relative rounded-xl bg-primary-600 shadow-md shadow-secondary-500 p-4 clip-notch-tr md:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-4">
        Proyectos
      </div>

      <div className="rounded-xl bg-primary-600 shadow-md shadow-secondary-500 p-4 md:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-6">
        certificaciones
      </div>
    </div>
  )
}

export {Portafolio}
