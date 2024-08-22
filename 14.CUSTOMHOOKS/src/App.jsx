import { useState } from "react";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { open, change } = useToggle();

  return (
    <div>
      {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>kutu</div>}
      <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
    </div>

  )
}

export default App