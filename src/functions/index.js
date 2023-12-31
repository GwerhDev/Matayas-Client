const defaultValue = { 
  style: {
      transform: '',
      display: '',
      opacity: '', 
      filter: '', 
      scale: '', 
      overflowY: '',
      transitionDuration: '',
      transformOrigin: '',
      transformStyle: '',
      transitionTimingFunction: '',
      transformBox: '',
      transitionDelay: '',
      transitionProperty: '',
  },
  contains() {
    return;
  }
};

export const $d = (e) => {
  const element = document.querySelector(e);
  if (element) {
    return element;
  }
  return defaultValue;
};

export const $gId = (e) => {
  const element = document.getElementById(e);
  if (element) {
    return element;
  }
  return defaultValue;
};

export const $display = (e) => {
  const element = $d(e);
  if (element.style.display === "flex") return element.style.display = "none";
  return element.style.display = "flex";
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
}

export const formattedPrice = (price) => price.toLocaleString('es', {
  useGrouping: true,
});
