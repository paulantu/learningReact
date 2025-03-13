import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor:color }}
      >
        <div className="fixed flex flex-wrap justify-center top-15 rounded-3xl inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <h1 className="flex justify-center font-bold text-3xl text-white bg-amber-800 rounded-xl p-4">
              Background changer
            </h1>
          </div>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-15 rounded-3xl inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <Button
              onClick={() => setColor("#FF0000")}
              title="Red"
              colorName="bg-red-500 text-white"
            />
            <Button
              onClick={() => setColor("#0000FF")}
              title="Blue"
              colorName="bg-blue-500 text-white"
            />
            <Button
              onClick={() => setColor("#008000")}
              title="Green"
              colorName="bg-green-500 text-white"
            />
            <Button
              onClick={() => setColor("#800080")}
              title="Purple"
              colorName="bg-purple-500 text-white"
            />
            <Button
              onClick={() => setColor("#FFA500")}
              title="Orange"
              colorName="bg-orange-500 text-white"
            />
            <Button onClick={() => setColor("#FFBF00")} title="Amber" colorName="bg-amber-500 text-white" />
            <Button onClick={() => setColor("#928E85")} title="Stone" colorName="bg-stone-500 text-white" />
            <Button onClick={() => setColor("#FFC0CB")} title="Pink" colorName="bg-pink-500 text-black" />
            <Button onClick={() => setColor("#FFFFFF")} title="White" colorName="bg-white text-black" />
            <Button onClick={() => setColor("#FFFF00")} title="Yellow" colorName="bg-yellow-500 text-black" />
            <Button onClick={() => setColor("#00FF00")} title="Lime" colorName="bg-lime-500 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
