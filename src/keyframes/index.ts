export const zoomOutKeyframes = {
  from: {
    transform: "scale(0)"
  },
  to: {
    transform: "scale(1)"
  }
};

export const toBackgroundSecondaryKeyframes = {
  from: {
    backgroundColor: "transparent"
  },
  to: {
    backgroundColor: "var(--secondary)"
  }
};

export const slideDown = {
  from: {
    transform: "translateY(-25px)",
    opacity: 0
  },
  to: {
    transform: "translateY(0)",
    opacity: 1
  }
};
