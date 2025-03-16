import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);


  const [buttonText, setButtonText] = useState("Copy");
  const [fade, setFade] = useState(false);


  
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharecter, setAllowCharacter] = useState(false);

  const [password, setPassword] = useState("");

  const passwordReffrence = useRef(null);

  const passwordCopyToClipBoard = useCallback(() => {
    passwordReffrence.current?.select();
    window.navigator.clipboard.writeText(password);

    setFade(true);

    setTimeout(() => {
      setButtonText("Copied");
      setFade(false);
    }, 300);

    setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setButtonText("Copy");
        setFade(false);
      }, 300);
    }, 2000);

  }, [password]);

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqustuvwxyz";

    if (allowNumber) strings += "0123456789";

    if (allowCharecter) strings += "~`!@#$%^&*()_+=-}{][?><.";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strings.length + 1);

      generatedPassword += strings.charAt(char);
    }

    setPassword(generatedPassword);
  }, [length, allowNumber, allowCharecter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumber, allowCharecter, passwordGenerator]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center text-lg mb-2">
            Password generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-4"
              placeholder="Password"
              readOnly
              ref={passwordReffrence}
            />
            <button
        onClick={passwordCopyToClipBoard}
        className="px-10 py-5 bg-blue-500 text-white rounded relative overflow-hidden"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {buttonText}
        </span>
      </button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: ({length})</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={allowNumber}
                id="numberInput"
                onChange={() => {
                  setAllowNumber((prev) => !prev);
                }}
              />
              <label>Allow Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={allowCharecter}
                id="numberInput"
                onChange={() => {
                  setAllowCharacter((prev) => !prev);
                }}
              />
              <label>Allow Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
