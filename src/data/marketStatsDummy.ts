export type MarketStatCardProps = {
  iconName: string;
  title: string;
  value: string;
  description: string;
};

export const marketStatsDummy: MarketStatCardProps[] = [
  {
    iconName: 'RiHomeLine',
    title: 'Home Values',
    value: '$1.2M',
    description:
      'Average sales price, <span class="text-green-600 font-medium">↑ 5.2%</span> YOY',
  },
  {
    iconName: 'RiTimerLine',
    title: 'Days on Market',
    value: '28',
    description: 'Average time listed, High demand',
  },
  {
    iconName: 'RiSpeedLine',
    title: 'Market Velocity',
    value: '15 Sold',
    description: 'Properties closed this month in area',
  },
];
