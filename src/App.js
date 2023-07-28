import "./App.css";
import { useState } from "react";
import ItemList from "./components/ItemList";
const data = [
  {
    id: 1,
    title: "Who Am I ?",
    content:
      "I am a Frontend Engineer having 3 years of workex currently working in sapient I like to develop systems through which I can impact  large amount of users. Also I like the challenges to scale it up for sustaining the load without impacting the user experience.",
  },
  {
    id: 2,
    title: "My Tech Stack?",
    content:
      "I have experience in working on html,css,javascript,nodejs,react,nextjs",
  },
  {
    id: 3,
    title: "What is React",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
  },
  {
    id: 4,
    title: "What is Nextjs",
    content:
      "Next.js is a flexible React framework that gives you building blocks to create fast web applications.But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.",
  },
];

export default function App() {
  const [list, setList] = useState(data);

  return (
    <div className="App">
      <ItemList list={list} />
    </div>
  );
}
