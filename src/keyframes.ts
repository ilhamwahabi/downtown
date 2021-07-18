import { CSSProperties } from "aphrodite";

interface IKeyframe {
  from: CSSProperties,
  to: CSSProperties
}

export const zoomOutKeyframes: IKeyframe = {
  from: {
    transform: "scale(0)"
  },
  to: {
    transform: "scale(1)"
  }
};

export const toBackgroundSecondaryKeyframes: IKeyframe = {
  from: {
    backgroundColor: "transparent"
  },
  to: {
    backgroundColor: "var(--secondary)"
  }
};

export const slideDown: IKeyframe = {
  from: {
    transform: "translateY(-25px)",
    opacity: 0
  },
  to: {
    transform: "translateY(0)",
    opacity: 1
  }
};
