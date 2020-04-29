import React, { useState, useEffect } from "react";
import axios from "axios";

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [outText, setOutText] = useState("");

  useEffect(() => {
    if (inputText !== "") {
      axios
        .get(
          `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200428T021732Z.a47b9c7034e7647c.a40b1a8a1d0d372b1e84c9f666ebc5cf19a0fc65&text=${inputText}&lang=ar`
        )
        .then(({ data }) => {
          setOutText(data.text[0]);
        })
        .catch((err) => {
          if (axios.isCancel(err)) console.log("request has been cancelled");
          else if (err.response && err.response.status === 400)
            setOutText("غير متوفر حاليا");
          else setOutText("حدثت مشكلة");
        });
    } else {
      setOutText("");
    }
  }, [inputText]);
  return (
    <div className="container text-center pt-5">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{outText}</p>
    </div>
  );
};

export default Translate;
