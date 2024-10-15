type Props = {
  color?: string;
  size?: string;
};

export const ChartIcon = (props: Props) => {
  const { color = '#FD8100', size = '34' } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 34 34'
    >
      <path
        fill={color}
        d='M31.966 31.167H3.633a1.07 1.07 0 01-1.063-1.063c0-.58.482-1.062 1.063-1.062h28.333c.581 0 1.063.481 1.063 1.062a1.07 1.07 0 01-1.063 1.063z'
      ></path>
      <path
        fill={color}
        d='M14.613 5.667v25.5h6.375v-25.5c0-1.559-.637-2.834-2.55-2.834h-1.275c-1.912 0-2.55 1.275-2.55 2.834zM5.05 14.167v17h5.667v-17c0-1.559-.566-2.834-2.266-2.834H7.317c-1.7 0-2.266 1.275-2.266 2.834zM24.883 21.25v9.917h5.666V21.25c0-1.558-.566-2.833-2.266-2.833h-1.134c-1.7 0-2.266 1.275-2.266 2.833z'
      ></path>
    </svg>
  );
};
