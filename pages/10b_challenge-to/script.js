import gsap from "gsap";

const showToast = (i = "one") => {
  gsap.to(`.toast.${i}`, {
    opacity: 1,
    y: -120,
    scale: 1,
    duration: 0.6,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(`.toast.${i}`, {
        opacity: 0,
        y: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power4.in",
        delay: 2,
        onComplete: i === "one" ? () => showToast("two") : null,
      });
    },
  });
};

showToast();
