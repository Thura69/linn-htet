import { motion } from "framer-motion";
// import styles from './style.module.scss';
import styles from "./style.module.scss";
import {
  ArrowDownCircle,
  ArrowDownToDot,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// !w-full  md:w-[300px]

export default function LinkButton({
  isActive,
  toggleMenu,
  label,
  direction ,
}: {
  isActive: boolean;
  toggleMenu: any;
  label: string;
  direction: 'dot'|'down'| 'right' | 'none';
}) {
  return (
    <div className={cn(styles.button,'border')}>
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
          {direction === "down" && <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />}
          {direction === "right" && <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />}
          <PerspectiveText label={label} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={cn(styles.perspectiveText,'text-xs  md:text-lg')}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
