import styled from 'styled-components';

interface AnchorTextProps {
  size: 'small' | 'medium' | 'large';
  variant: 'normal' | 'link' | 'gray';
}

const variants = {
  normal: '#000',
  link: '#1a0dab',
  gray: '#5f6368',
};

export const AnchorText = styled.a<AnchorTextProps>`
  color: ${(props) => variants[props.variant]};
  font-family: Arial;
  font-size: ${(props) => (props.size === 'small' ? '14px' : '20px')};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
