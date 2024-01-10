import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Alloy Embedded',
    Svg: require('@site/static/img/embedded.svg').default,
    description: (
      <>
        Learn how Alloy Embedded can help solve your most advanced business integration requirements. 
      </>
    ),
    label: 'Explore Docs',
    URL: 'docs/embedded/introduction',
  },
  {
    title: 'Alloy Unified API',
    Svg: require('@site/static/img/unifiedapi.svg').default,
    description: (
      <>
        Alloy Unified API can help save you both time and money while streamlining your development processes.
      </>
    ),
    label: 'Explore Docs',
    URL: 'docs/unifiedapi/introduction',
  },
];

function Feature({Svg, title, description, label, URL}) {
  return (
    <div className={clsx('nice-card col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <a className='nice-button' href={URL}>{label}</a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="intro-container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className='popular-apps'>
          <h3>Popular Integrations</h3>
          <ul>
            <li><img src='img/apps/shopify.svg'/></li>
            <li><img src='img/apps/bigc.svg'/></li>
            <li><img src='img/apps/netsuite.svg'/></li>
            <li><img src='img/apps/brightpearl.svg'/></li>
            <li><img src='img/apps/hubspot.svg'/></li>
            <li><img src='img/apps/klavyio.svg'/></li>
            <li><img src='img/apps/quickbooks.svg'/></li>
            <li><img src='img/apps/woo.svg'/></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
