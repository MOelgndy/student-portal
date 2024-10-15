type Props = {
  color?: string;
  size?: string;
};

export const PlusIcon = (props: Props) => {
  const { color = '#25C8C5', size = '26' } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 26 26'
    >
      <path
        fill={color}
        d='M24.143 15.357h-9.286v9.286a1.857 1.857 0 11-3.714 0v-9.286H1.857a1.857 1.857 0 110-3.714h9.286V2.357a1.857 1.857 0 113.714 0v9.286h9.286a1.857 1.857 0 110 3.714z'
      ></path>
    </svg>
  );
};
