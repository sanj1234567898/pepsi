import React from "react";
import { asideLink } from "@/components/elements";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framerMotion";

export const Aside = () => {
  return (
    <aside className="aside">
      <ul className="aside__links">
        {asideLink.map((item, id) => (
          <motion.li
            key={id}
            variants={fadeIn("down", "spring", id * 0.3, 0.2)}
            initial={"hidden"}
            animate={"show"}
          >
            <a href={item.link} target={"_blank"}>
              <img className="aside__link" src={item.logo} alt={item.text} />
            </a>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};
