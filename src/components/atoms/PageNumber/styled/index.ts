import styled from 'styled-components';

interface ImageProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Image = styled.span<ImageProps>`
  width: 20px;
  height: 40px;
  background: url(/images/image_map.webp) no-repeat;
  background-position: ${(props) => (props.isActive ? '-53px 0' : '-74px 0')};
  background-size: 167px;
`;
