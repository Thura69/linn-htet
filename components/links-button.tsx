import { motion } from "framer-motion";
// import styles from './style.module.scss';
import styles from "./style.module.scss";
import {
  ArrowDownCircle,
  ArrowDownToDot,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";

export default function LinkButton({
  isActive,
  toggleMenu,
  label,
  direction,
}: {
  isActive: boolean;
  toggleMenu: any;
  label: string;
  direction: 'dot'|'down'| 'right';
}) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          {direction === "dot" && (
            <div className="w-[10px] h-[10px] bg-textSecondary  rounded-full"></div>
          )}
          {direction === "down" && <ArrowDownCircle />}
          {direction === "right" && <ArrowRightCircle />}
          <PerspectiveText label={label} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
