import { PiFlowerTulipBold } from 'react-icons/pi';
import IconGradient from './IconGradient';

export default function Logo({ addClass }: { addClass?: string }) {
  return (
    <span className={addClass}>
      <IconGradient id="logo" />
      <PiFlowerTulipBold style={{ fill: 'url(#logo)' }} />
    </span>
  );
}
