import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-peasy.svg').default,
    description: (
      <>
        Secret scanning doesn't have to be hard.
      </>
    ),
  },
  {
    title: 'Tons of Features',
    Svg: require('@site/static/img/make-me-coffee.svg').default,
    description: (
      <>
        Maybe it can't make you coffee, but the goal is to be able
        to scan for any secret, anywhere.
      </>
    ),
  },
  {
    title: 'Powered by Racket',
    Svg: require('@site/static/img/racket-logo.svg').default,
    description: (
      <>
        We love Racket, and welcome all Racketeers to make
        contributions to bogu.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
