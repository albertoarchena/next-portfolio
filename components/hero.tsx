import React from 'react'
import  { Cursor, useTypewriter } from "react-simple-typewriter"
type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Alberto Moreno",
      "Web Developer",
      "Software Engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <p>
        {text}
        <Cursor cursorColor=" #ff0000"/>
      </p>
    </div>
  );
}