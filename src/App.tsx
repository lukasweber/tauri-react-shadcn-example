import { Button } from "@/components/ui/button";
import Layout from "./layout";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
        <Layout>
          <div className="p-4">
            <h1>Counter: {counter}</h1>
            <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
          </div>
        </Layout>
    </main>
  );
}

export default App;
