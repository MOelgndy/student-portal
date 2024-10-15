type Props = {
  color?: string;
  size?: string;
};

export const SolidTickIcon = (props: Props) => {
  const { color = '#0070DF', size = '24' } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
    >
      <mask
        id='mask0_1180_38123'
        style={{ maskType: 'luminance' }}
        width='24'
        height='24'
        x='0'
        y='0'
        maskUnits='userSpaceOnUse'
      >
        <path
          fill='#fff'
          stroke='#fff'
          strokeLinejoin='round'
          strokeWidth='4'
          d='M12 22a9.971 9.971 0 007.071-2.929A9.972 9.972 0 0022 12a9.971 9.971 0 00-2.929-7.071A9.97 9.97 0 0012 2a9.97 9.97 0 00-7.071 2.929A9.97 9.97 0 002 12a9.97 9.97 0 002.929 7.071A9.971 9.971 0 0012 22z'
        ></path>
        <path
          stroke='#000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
          d='M8 12l3 3 6-6'
        ></path>
      </mask>
      <g mask='url(#mask0_1180_38123)'>
        <path
          fill={color}
          d='M0 0h24v24H0V0z'
        ></path>
      </g>
    </svg>
  );
};
