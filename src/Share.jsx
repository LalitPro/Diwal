import { useEffect, useState } from "react";
function Share() {
  const [showUrl, setShowUrl] = useState(false);
  useEffect(function () {
    setShowUrl(false);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [linktoShare, setLinktoShare] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
    console.log("inputValue", inputValue);
  }

  function showUrlBox() {
    console.log("inputValue", inputValue);
    const data = "https://subhdiwali.netlify.app/" + inputValue;
    console.log("data", data);
    if (inputValue == "") {
      console.log("showURlBOx", "returner");
      return;
    } else {
      setLinktoShare(data);
      console.log("setLinktoshare", setLinktoShare);
      console.log("linktoshare", linktoShare);
      setShowUrl(true);
    }
  }

  return (
    <div
      className="flex items-center justify-center w-screen h-screen text-center bg-center bg-cover"
      style={{ backgroundImage:'url("https://i2.pickpik.com/photos/945/440/873/sparkler-fireworks-colors-diwali-preview.jpg")' }}
    >
      <div className="relative z-10 flex flex-wrap items-center justify-center w-screen h-screen gap-20 ml-5 overflow-hidden text-2xl sm:text-5xl md:ml-20 sm:ml-10 sm:gap-40 md:gap-60">
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
      <div className="fixed z-50 flex flex-col items-center gap-2 text-3xl text-green-500 sm:text-5xl xl:text-7xl">
        <p
          className="z-50 inline"
          style={{ filter: "drop-shadow(5px 5px 5px greenyellow)" }}
        >
          जिसको भी आप Share करना चहाते हैं उसका नाम नीचे लिखें
        </p>
        <label className="text-red-500">
          जिसे बधाई देना है उसका नाम नीचे लिखें
        </label>
        <input
          type="text"
          className="block w-3/4 px-3 py-1 text-black border rounded-3xl"
          placeholder="यहाँ नाम लिखें"
          onInput={handleInputChange}
          required
        />
        <button
          onClick={showUrlBox}
          className="block px-5 py-2 m-5 text-white bg-red-400 border shadow-2xl rounded-3xl hover:text-red-400 hover:bg-white"
        >
          Submit
        </button>
        {showUrl && (
          <>
            <input
              type="text"
              className="block w-3/4 px-3 py-1 text-black bg-white border rounded-3xl"
              disabled
              onClick={navigator.clipboard.writeText(linktoShare)}
              value={linktoShare}
            />
            <label className="text-red-500">
              URL Copy हो चूका है जिसे भी भेजना है भेज दें
            </label>
          </>
        )}
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

export default Share;
