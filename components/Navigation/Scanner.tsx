import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

const Scanner = () => {
    const [result, setResult] = useState("No result");
  let handleScan = (data: any) => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = () => {
    // alert(err);
  };

    return (
        <div>
            <div>
                <QrReader
                onResult={handleScan}
                constraints={{ facingMode: "environment" }}
                />
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Scanner;
