import React from "react";
import { card } from "./elements";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framerMotion";

export const CardFacts = () => {
  return (
    <div className="facts__card">
      {card.map((obj, id) => {
        return (
          <motion.div
            className="card__item"
            key={id}
            variants={fadeIn("left", "tween", id * 0.5, 0.5)}
            initial={"hidden"}
            animate={"show"}
          >
            <div className="card__top">
              <p className="item__title">{obj.text}</p>
              <p className="item__gramm">{obj.gramm}</p>
            </div>
            <div className="card__bottom">
              <p className="item__gramm2">{obj.gramm2}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
