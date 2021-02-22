import Head from 'next/head';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <main>
      <Head>
        <title>BallerTV | About Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
        <p className={styles.press__text}>BallerTV and its founders have appeared in:</p>
        {/** Carousel goes here */}
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
    </main>
  );
};

export default About;
