import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/assets/vite.svg";
import { LinkButton } from "@atoms/buttons/LinkButton";

function App() {
  const [count, setCount] = useState(0);
  const [mitexto, setMitexto] = useState("jersson");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="flex items-center justify-center gap-6">
        <LinkButton to="https://vite.dev" external>
          <img
            src={viteLogo}
            className="h-44 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </LinkButton>
        <LinkButton to="https://react.dev" external>
          <img
            src={reactLogo}
            className="h-44 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </LinkButton>
      </div>
      <h1 className="font-heading text-6xl font-bold">Vite + React</h1>
      <div className="bg-primary-500 p-4 font-sans text-white">
        texto con estilos de{" "}
        <code className="rounded bg-white/10 px-2 py-1 font-sans">
          src/tailwind.config.js
        </code>
      </div>
      <div className="rounded-xl bg-white/5 px-8 py-6 shadow-2xl">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-primary-500 px-4 py-2"
        >
          count is {count} {mitexto}
        </button>
        <LinkButton to="/" variant="primary">
          Ir a Home
        </LinkButton>
        <p className="mt-4 text-sm">
          Edit{" "}
          <code className="rounded bg-white/10 px-2 py-1 font-sans">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="font-sans text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
