interface Props {
  href: string;
  src: string;
  className: string;
  alt: string;
  target?: string;
}
export function ExternalLink({
  href,
  src,
  className,
  alt,
  target = "_blank",
}: Props) {
  return (
    <a href={href} target={target}>
      <img src={src} className={className} alt={alt} />
    </a>
  );
}
