import { IconButton, IconButtonProps as MuiIconButtonProps, SvgIconProps, Tooltip } from '@mui/material';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon } from 'src/icons';

interface CopyButtonProps {
  text: string;
  IconButtonProps?: MuiIconButtonProps;
  IconProps?: SvgIconProps;
  tooltipTitle: string;
  tooltipCopiedTitle: string;
}

export default function CopyButton2(props: CopyButtonProps) {
  const { text, IconButtonProps, IconProps, tooltipTitle, tooltipCopiedTitle } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Tooltip title={copied ? tooltipCopiedTitle : tooltipTitle} placement="top">
        <IconButton onMouseLeave={() => setTimeout(() => setCopied(false), 500)} {...IconButtonProps}>
          <CopyIcon {...IconProps} />
        </IconButton>
      </Tooltip>
    </CopyToClipboard>
  );
}

CopyButton2.defaultProps = {
  IconButtonProps: {
    color: 'inherit',
  },
  IconProps: {
    fontSize: 'small',
  },
  tooltipTitle: 'Copy',
  tooltipCopiedTitle: 'Copied',
};
