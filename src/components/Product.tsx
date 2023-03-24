import React from "react";
import { CardFacts } from "./CardFacts";
import { motion } from "framer-motion";
import { fadeIn, textVariant, textVariant2 } from "../utils/framerMotion";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__wraper">
        <div className="product__text">
          <motion.h1
            className="text__title"
            variants={textVariant(0.2)}
            initial={"hidden"}
            animate={"show"}
          >
            Pepsi Classic
          </motion.h1>
          <motion.p
            className="text__desc"
            variants={textVariant(0.4)}
            initial={"hidden"}
            animate={"show"}
          >
            Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar,
            Phosphoric Acid, Caffeine, Citric Acid, Natural Flavour
          </motion.p>
        </div>

        <div className="product__facts">
          <motion.h3
            className="facts__title"
            variants={textVariant(0.5)}
            initial={"hidden"}
            animate={"show"}
          >
            NUTRITIONAL FACTS
          </motion.h3>

          <CardFacts />

          <motion.p
            className="facts__desc"
            variants={textVariant(0.6)}
            initial={"hidden"}
            animate={"show"}
          >
            Rich in energy, our drinks will revitalize your body and get you
            ready for the day's activities
          </motion.p>
        </div>

        <motion.button
          className="btn"
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial={"hidden"}
          animate={"show"}
        >
          BUY NOW
        </motion.button>
      </div>

      <motion.div
        className="product__img"
        variants={textVariant2(1)}
        initial={"hidden"}
        animate={"show"}
      >
        <img src="/images/pepsi-front.png" alt="pepsi" />
      </motion.div>
    </div>
  );
};
