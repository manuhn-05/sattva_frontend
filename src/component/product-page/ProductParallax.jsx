import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { productCardData1, productCardData2, productCardData3 , productCardData4, productCardData5, productCardData6 } from "../../data/data";

const sections = [
    {
        id: 1,
        bg: "",
        content: (<ProductCard className={`flex items-center justify-between mx-auto w-[95%] lg:w-[75%] gap-[3%]`} {...productCardData1} />),
    },
    {
        id: 2,
        bg: "",
        content: (<ProductCard className={`flex flex-row-reverse items-center justify-between mx-auto w-[75%] gap-[3%]`} {...productCardData2} />),
    },
    {
        id: 3,
        bg: "",
        content: (<ProductCard className={`flex items-center justify-between mx-auto w-[75%] gap-[3%]`} {...productCardData3} />),
    },
    {
        id: 4,
        bg: "",
        content: (<ProductCard className={`flex flex-row-reverse items-center justify-between mx-auto w-[75%] gap-[3%]`} {...productCardData4} />),
    },
    {
        id: 5,
        bg: "",
        content: (<ProductCard className={`flex items-center justify-between mx-auto w-[75%] gap-[3%]`} {...productCardData5} />),
    },
    {
        id: 6,
        bg: "",
        content: (<ProductCard className={`flex flex-row-reverse items-center justify-between mx-auto w-[75%] gap-[3%]`} {...productCardData6} />),
    },
];


export default function ScrollSections() {
    const [index, setIndex] = useState(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            if (isScrolling.current) return;

            isScrolling.current = true;

            if (e.deltaY > 0) {
                setIndex((prev) => Math.min(prev + 1, sections.length - 1));
            } else {
                setIndex((prev) => Math.max(prev - 1, 0));
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 700);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="relative h-[calc(100vh-200px)] md:h-[calc(100vh-200px)] w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center text-white ${sections[index].bg}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    {sections[index].content}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
