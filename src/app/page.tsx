"use client";
import { motion } from "framer-motion";
import { useFunc } from "./hooks/useFunc";

export default function MPage() {
  const { text, click, flexName, inlineFlexName, setClick } = useFunc();
  return (
    <div className={`${inlineFlexName}`}>
      {text.map((item) => (
        <motion.div
          onClick={() => setClick(!click)}
          animate={{ x: click ? 200 : 0 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          key={item.id}
          className={`${flexName}`}
        >
          <div className="flex flex-col gap-5">
            {item.text}
            <div className="flex gap-3">
              <div className={`${flexName}`}>Framework</div>
              <div className={`${flexName}`}>Library</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
