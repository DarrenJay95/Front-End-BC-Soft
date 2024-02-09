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

// import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// interface LinkProps extends RouterLinkProps {
//   src?: string;
//   className?: string;
//   alt?: string;
// }

// const ExternalLink: React.FC<LinkProps> = ({ href, src, className, alt, ...rest }) => {
//   if (src) {
//     return (
//       <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
//         <img src={src} alt={alt} />
//       </a>
//     );
//   }
//   return (
//     <RouterLink to={href} {...rest} className={className}>
//       {rest.children}
//     </RouterLink>
//   );
// };

// export default ExternalLink;
