import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/assets/vite.svg'
import { ButtonBasic } from "@atoms/buttons/ButtonBasic";

function App() {
  const [count, setCount] = useState(0)
  const [mitexto, setMitexto] = useState("jersson");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-8">
      <div className="flex items-center justify-center gap-6">
        <a href="https://vite.dev" target="_blank" className="inline-block">
          <img
            src={viteLogo}
            className="h-44 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block">
          <img
            src={reactLogo}
            className="h-44 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold font-heading">Vite + React</h1>
      <div className="bg-primary-500 text-white p-4 font-sans">
        texto con estilos de <code className="rounded bg-white/10 px-2 py-1 font-sans">src/tailwind.config.js</code>
      </div>
      <div className="rounded-xl bg-white/5 px-8 py-6 shadow-2xl">
        <ButtonBasic onClick={() => setCount((count) => count + 1)} variant="primary" size="lg">
          count is {count} {mitexto}
        </ButtonBasic>
        <p className="mt-4 text-sm">
          Edit <code className="rounded bg-white/10 px-2 py-1 font-sans">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm font-sans">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
