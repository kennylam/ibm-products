//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { ArrowRight, Cloud } from '@carbon/icons-react';
import { AspectRatio, Column, Grid } from '@carbon/react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ExpressiveCard } from '.';
import mdx from './ExpressiveCard.mdx';
import { action } from '@storybook/addon-actions';
import { usePrefix } from '../../global/js/hooks/usePrefix';

export default {
  title: getStoryTitle(ExpressiveCard.displayName),
  component: ExpressiveCard,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    columnSize: {
      control: {
        type: 'select',
      },
      options: [4, 8, 12, 16],
    },
    mediaRatio: {
      control: {
        type: 'select',
      },
      options: ['16x9', '9x16', '2x1', '1x2', '4x3', '3x4', '1x1'],
    },
  },
  decorators: [
    (Story) => {
      const carbonPrefix = usePrefix();
      return (
        <div className={`${carbonPrefix}--grid card-story`}>{Story()}</div>
      );
    },
  ],
};

const defaultProps = {
  label: 'Label',
  title: 'Title',
  columnSize: 4,
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  primaryButtonText: 'Primary',
};

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <Grid>
      <Column lg={columnSize}>
        <ExpressiveCard {...args}>{children}</ExpressiveCard>
      </Column>
    </Grid>
  );
};

const MediaTemplate = (opts) => {
  const { children, columnSize, mediaRatio = '1x1', ...args } = opts;
  return (
    <Grid>
      <Column lg={columnSize}>
        <ExpressiveCard
          media={<AspectRatio ratio={mediaRatio}>{mediaRatio}</AspectRatio>}
          {...args}
        >
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
    mediaRatio: null,
  },
});

export const LabelOnly = prepareStory(Template, {
  args: {
    ...defaultProps,
    title: '',
    mediaRatio: null,
  },
});

export const WithCaption = prepareStory(Template, {
  args: {
    ...defaultProps,
    caption: 'Description or long caption',
    label: '',
    mediaRatio: null,
  },
});

export const WithMedia = prepareStory(MediaTemplate, {
  args: {
    ...defaultProps,
  },
});

export const WithActionIcon = prepareStory(Template, {
  args: {
    ...defaultProps,
    actionIcons: [
      {
        id: '1',
        icon: (props) => <ArrowRight size={24} {...props} />,
        onClick: action('on click'),
        iconDescription: 'Next',
      },
    ],
    primaryButtonText: '',
    mediaRatio: null,
  },
});

export const WithActionIconHref = prepareStory(Template, {
  args: {
    ...defaultProps,
    actionIcons: [
      {
        id: '1',
        icon: (props) => <ArrowRight size={24} {...props} />,
        href: '#',
        iconDescription: 'Next',
      },
    ],
    primaryButtonText: '',
    mediaRatio: null,
  },
});

export const WithPictogram = prepareStory(Template, {
  args: {
    ...defaultProps,
    pictogram: (props) => <Cloud size={32} {...props} />,
    mediaRatio: null,
  },
});

export const WithSecondaryAction = prepareStory(Template, {
  args: {
    ...defaultProps,
    secondaryButtonText: 'Secondary',
    secondaryButtonKind: 'ghost',
    columnSize: 8,
    mediaRatio: null,
  },
});

export const Clickable = prepareStory(Template, {
  args: {
    ...defaultProps,
    onClick: action('on click'),
    onKeyDown: action('on keydown'),
    primaryButtonText: '',
    mediaRatio: null,
  },
});

export const WithButtonHref = prepareStory(Template, {
  args: {
    ...defaultProps,
    primaryButtonHref: '#',
    secondaryButtonHref: '#',
    secondaryButtonText: 'Secondary',
    secondaryButtonKind: 'ghost',
  },
});
