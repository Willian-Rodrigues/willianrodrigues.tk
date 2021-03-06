import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import { StacksIcons } from '../../../data/constants/stack-icons.constant';

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = useState<any>();
  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map(icon =>
      renderSimpleIcon({
        bgHex: '#212121',
        fallbackHex: '#707070',
        minContrastRatio: 2,
        icon,
        size: 80,
        aProps: {
          onClick: (e: any) => e.preventDefault()
        }
      })
    );
  }
  return <CircularProgress size={20} color="inherit" />;
};

const slugs = Object.values(StacksIcons).map(({ label }) =>
  label.toLocaleLowerCase()
);

const CloudIcons = () => {
  const icons: any = useIcons(slugs);
  return (
    <Cloud
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 1,
        activeCursor: 'default',
        tooltip: 'native',
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: '#0000'
      }}
    >
      {icons}
    </Cloud>
  );
};

export default CloudIcons;
