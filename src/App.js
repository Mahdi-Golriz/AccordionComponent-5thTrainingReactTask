import { useState } from "react";

export default function App() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          title={faq.title}
          key={faq.title}
          num={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(curOpen === num ? null : num);
    // setIsOpen(!isOpen);
  }

  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={() => handleToggle(num)}
    >
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <h3 className="title">{title}</h3>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && (
        <div className="content-box">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
