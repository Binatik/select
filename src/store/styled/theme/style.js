import { breakpoints } from "./breakpoints";

export const fontStyle = {
  links: `
    font-size: 1.7rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1.3rem;
    },
  `,

  title: `
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.1rem;
  },
  `,

  paragraph: `
  font-size: 1rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 0.8rem;
  },
  `,

  span: `
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 0.7rem;
  },
  `,
};
