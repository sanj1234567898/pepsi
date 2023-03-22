import React from "react";
import { asideLink } from "@/components/elements";

export const Aside = () => {
  return (
    <aside className="aside">
      <ul className="aside__links">
        {asideLink.map((item, id) => (
          <li key={id}>
            <a href={item.link} target={"_blank"}>
              <img className="aside__link" src={item.logo} alt={item.text} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
