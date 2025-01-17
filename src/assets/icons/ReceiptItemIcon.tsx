type Props = {
  color?: string;
  size?: string;
};

export const ReceiptItemIcon = (props: Props) => {
  const { color = '#0CF', size = '24' } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 25 24'
    >
      <path
        fill={color}
        d='M7.336 2h-1c-3 0-4 1.79-4 4v15c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2h-11zm-1.03 12.01c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.03 3.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z'
      ></path>
      <path
        fill={color}
        d='M18.346 2v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08h-1.92V4.01c0-.28.23-.51.51-.51V2zm0 0c-1.11 0-2.01.9-2.01 2.01V11h3.42c1.58 0 2.58-1 2.58-2.58V6c0-1.1-.45-2.1-1.17-2.83A4.044 4.044 0 0018.346 2c.01 0 0 0 0 0z'
      ></path>
    </svg>
  );
};
