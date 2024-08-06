import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 rounded-xl">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-4 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer flex-grow"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-white">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-white">Include Characters</label>
          </div>
          <button
            onClick={passwordGenerator}
            className="mt-4 w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
