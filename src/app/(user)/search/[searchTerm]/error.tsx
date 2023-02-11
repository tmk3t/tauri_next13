"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again（Reset Error Boundary）</button>
    </div>
    // これを渡すとHeadなども別になる
    // <html>
    //   <head></head>
    //   <body>
    //     <h2>Something went wrong!</h2>
    //     <button onClick={() => reset()}>Try again</button>
    //   </body>
    // </html>
  );
}
