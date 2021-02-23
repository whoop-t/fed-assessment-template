import Head from 'next/head';
import styles from '../styles/About.module.scss';
import { values, press } from '../config/data';
import ImageCarousel from '../components/ImageCarousel';

const About = () => {
  return (
    <main>
      <Head>
        <title>BallerTV - About Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className={styles.navbar}>
        <img className={styles.navbar__logo} src='/BallerTV-Logo.svg' alt='BallerTV Logo' />
      </nav>
      <header className={styles.hero}>
        <h1 className={styles.hero__header}>WE BUILD WINNING TEAMS</h1>
        <p className={styles.hero__text}>They’re helping us build the widest sports network in the world.</p>
      </header>
      <section className={styles.desc}>
        <h2 className={styles.desc__header}>OUR VISION</h2>
        <p className={styles.desc__text}>
          BallerTV was founded in 2016 by Cramster co-founders Rob Angarita and Aaron Hawkey to provide live video coverage of amateur
          sports while creating sports media job opportunities in local communities. As of 2018, BallerTV is now a coast-to-coast operation
          with a network of thousands of broadcasters across the country. We’re on track to broadcast our 100,000th game this year — and
          we’re just getting started.
        </p>
      </section>
      <section className={styles.press}>
        <div className={styles.press__blackbg}></div>
        <div className={styles.press__content}>
          <p className={styles.press__text}>BallerTV and its founders have appeared in:</p>
          <ImageCarousel images={press} chunkSize={3} />
        </div>
      </section>
      <section className={styles.desc}>
        <h2 className={styles.desc__header}>OUR TEAM</h2>
        <p className={styles.desc__text}>
          Our founders started BallerTV in 2016 with a scrappy 6-man development team — we’re now at 20 full-time office staff and roughly
          2,000 broadcasting operations staff coast-to-coast, and growing every day. From software engineers, to sales staff to operations
          managers, BallerTV is constantly innovating broadcasting and logistics solutions to build the world’s widest sports network.
          <br />
          <br />
          We assemble fearless teams, trained to dominate operations challenges and deliver top-notch content to our subscribers.
        </p>
      </section>
      <section className={styles.branding}>
        <div className={styles.branding__orangebg}></div>
        <div className={styles.branding__content}>
          <p className={styles.branding__text}>Want to joing the team at HQ?</p>
          <a href='#' className={styles.branding__link}>
            View our HQ career opportunities
          </a>
        </div>
      </section>
      <section className={styles.values}>
        <h2 className={styles.values__header}>OUR VALUES</h2>
        {/* Map over values data in config folder */}
        {values.map((value, i) => {
          return (
            <div className={styles.values__value}>
              <img src={value.iconPath} alt={value.alt} className={styles.values__icon} />
              <h3 className={styles.values__title}>{value.title}</h3>
              <p className={styles.values__text}>{value.text}</p>
            </div>
          );
        })}
      </section>
      <section className={styles.join}>
        {/* Use second wrapped for stacked backgrounds */}
        <div className={styles.join__bg}>
          <h2 className={styles.join__header}>JOIN THE TEAM</h2>
          <div className={styles.join__card}>
            <p className={styles.join__text}>Want to join our HQ in Pasadena, California?</p>
            <a href='#' className={styles.join__link}>
              Browse our Full Time Employment Listings
              <img src='/icons/double-arrow.svg' alt='double arrow' className={styles.join__img} />
            </a>
          </div>
          <div className={`${styles.join__card} ${styles.join__card__clipped}`}>
            <p className={styles.join__text}>
              Want to become a broadcaster? Becoming a broadcaster is always a great way to get a start as part of the BallerTV Team!{' '}
            </p>
            <a href='#' className={styles.join__link}>
              Find an event near you and apply today
              <img src='/icons/double-arrow.svg' alt='double arrow' className={styles.join__img} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
