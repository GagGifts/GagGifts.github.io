import { keyframes } from "styled-components";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeOutDown = keyframes`
	from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
	
  }
`;

export const loadingCircle = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const loadingText = keyframes`
    to {
        transform: rotate(-360deg);
    }
`;
