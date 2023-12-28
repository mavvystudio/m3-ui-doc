import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_design_components.svg').default,
    description: (
      <>M3-UI is easy to use, just install tailwind and you are good to go.</>
    ),
  },
  {
    title: 'Material 3 Design',
    Svg: require('@site/static/img/undraw_discoverable.svg').default,
    description: <>Uses the latest Material Design System.</>,
  },
  {
    title: 'Powered by Tailwind',
    Svg: require('@site/static/img/undraw_design_thinking.svg').default,
    description: <>Extend or customize your components by using TailwindCSS.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
