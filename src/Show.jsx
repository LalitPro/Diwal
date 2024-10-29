import React from "react";
function Show() {
   const emojis = [
    "😊", "🔥", "🌟", "☀️", "⚡️", "🍰", "🎂", "🎇", 
    "😀", "🎈", "😮", "😲", "🤭", "😎", "😉"
  ];
  const path = window.location.pathname;
  const naam = path.slice(1).toUpperCase();
  return (
    <div
      className="flex items-center justify-center w-screen h-screen text-center"
    >
      <div className="bg-transparent relative z-10 flex flex-wrap items-center justify-center w-screen h-screen gap-20 ml-5 overflow-hidden text-2xl sm:text-5xl md:ml-20 sm:ml-10 sm:gap-40 md:gap-60">
        <h3 className="animate-ping">😊</h3>
        <h3 className="animate-ping">🔥</h3>
        <h3 className="animate-ping">🌟</h3>
        <h3 className="animate-ping">☀</h3>
        <h3 className="animate-ping">⚡</h3>
        <h3 className="animate-ping">🍰</h3>
        <h3 className="animate-ping">🎂</h3>
        <h3 className="animate-ping">🎇</h3>
        <h3 className="animate-ping">😀</h3>
        <h3 className="animate-ping">🎈</h3>
        <h3 className="animate-ping">😮</h3>
        <h3 className=" animate-ping">😲</h3>
        <h3 className="animate-ping">🤭</h3>
        <h3 className=" animate-ping">😎</h3>
        <h3 className=" animate-ping">😉</h3>
      </div>{" "}
      <div className="fixed z-50 text-3xl text-green-500 sm:text-5xl xl:text-7xl">
        <p
          className="z-50 inline"
          style={{ filter: "drop-shadow(5px 5px 5px greenyellow)" }}
        >
          आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएँ....
        </p>
        <h1
          className="z-50 mt-5 text-5xl font-semibold text-red-500 text-pretty sm:text-7xl xl:text-9xl animate-ping"
          style={{ filter: "drop-shadow(5px 5px 5px white)" }}
        >
          {naam}
        </h1>
      </div>
      <h1
        className="fixed bottom-0 right-0 m-3 text-3xl text-white sm:text-4xl md:text-5xl"
        style={{ filter: "drop-shadow(5px 5px 5px orange)" }}
      >
        Made by Lalit Yadav
      </h1>
    </div>
  );
}

export default Show;
