import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4.5c0 8.284 6.716 15 15 15l2-3.5-4.5-2-1.5 1.5c-2.2-1-4-2.8-5-5l1.5-1.5-2-4.5-3.5 2z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 17.4 4.5 19.5l2.1-2.1c-1-1.2-1.6-2.7-1.6-4.4 0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5c-1.7 0-3.2-.6-4.4-1.6z" />
      <path d="M9.2 9.7c.2-.4.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.4.6 1.5.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.2 1.7 2 1.1 1 2 1.2 2.3 1.4.3.1.5.1.6-.1l.5-.6c.2-.2.4-.2.6-.1l1.3.6c.2.1.4.2.4.4 0 .2 0 1-.4 1.4-.4.4-1.2.8-2.1.5-1.9-.5-3.8-1.8-5.2-3.4-1.3-1.5-1.8-2.7-1.9-3.1-.2-.5-.5-1.4.2-2.3z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5 12 12.5l7.5-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="16.7" cy="7.3" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M13.5 20.6v-6.4h2l.3-2.5h-2.3V10c0-.7.2-1.2 1.2-1.2h1.3V6.6c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9v2.5h1.9v6.4" />
    </svg>
  );
}
