import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../Card/Card';
import { Post } from '../../../../types';

export default {
  title: 'Layout/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    post: {
        id: "5",
        title: "Gigaclear: Revolutionizing Connectivity with Next-Generation Internet of Things (IoT)",
        topic: "Gigaclear",
        author: "Author 5",
        image: "https://www.martock.org.uk/theme-content/uploads/2022/08/gigaclear-martock.jpeg",
        summary: "Explore the transformative potential of Gigaclear in revolutionizing connectivity through the Internet of Things (IoT). Discover how Gigaclear's high-speed fiber-optic broadband networks enable seamless communication between interconnected devices, driving efficiency, innovation, and improved quality of life. Learn about Gigaclear's deployment strategies, the benefits it brings to rural communities, and its role in shaping the future of IoT applications.",
        dateCreated: new Date().toString(),
    } as Post,
};
