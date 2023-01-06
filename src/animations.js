export function setInitialOpacities() {
  const targets = document.querySelectorAll(".initial-opacity-0");
  if (targets) {
    targets.forEach((t) => {
      t.classList.add("opacity-0");
    });
  }
}

export function animateOnScroll(targetClass, animationClass) {
  const targets = document.querySelectorAll(`.${targetClass}`);
  const observer = new IntersectionObserver((targets) => {
    targets.forEach((t) => {
      if (t.isIntersecting) {
        t.target.classList.add(animationClass);
      } else {
        t.target.classList.remove(animationClass);
      }
    });
  });
  if (targets) {
    targets.forEach((t) => {
      t.classList.add("opacity-0");
      observer.observe(t);
    });
  }
}
