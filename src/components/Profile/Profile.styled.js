import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
`;
export const Img = styled.img`
  border: 3px solid #e9eef3;
  border-radius: 50%;

  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Name = styled.p`
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 10px;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
  color: #dbe1e7;
`;
export const Location = styled.p`
  margin-bottom: 30px;
  color: #dbe1e7;
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-right: 1px solid #dddddd;
  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
//     .team__item {
//   background-color: var(--primary-white-color);
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
//     0px 2px 1px rgba(0, 0, 0, 0.2);
//   border-radius: 0px 0px 4px 4px;
// }
// .team__description {
//   padding-top: 30px;
//   padding-bottom: 30px;
//   text-align: center;
//   line-height: 1.18;
// }
// .team__subtitle {
//   margin-bottom: 10px;
//   color: var(--title-text-color);
//   font-weight: 500;
//   font-size: 16px;
//   letter-spacing: 0.03em;
// }
// .team__text {
//   color: var(--primary-text-color);
//   letter-spacing: 0.03em;
//   margin-bottom: 16px;
// }

// .social__list {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// }
// .social__item {
//   width: 44px;
//   height: 44px;
// }
// .social__link {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   color: var(--icon-color);
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }
// .social__list:not(:last-child) {
//   margin-right: 10px;
// }
// .social__icon {
//   width: 20px;
//   height: 20px;
//   fill: currentColor;
// }
// .social__link:focus,
// .social__link:hover {
//   background-color: var(--accent-color);
//   color: var(--primary-white-color);
// }
