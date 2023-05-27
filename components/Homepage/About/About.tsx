import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { metadata } from "app/layout";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Us</h2>
      <div className="mt-10">
        <strong>
          A community for present & future Latina software engineers created to
          connect, elevate and empower the next generation of tech leaders.
        </strong>
      </div>
      <div className={styles.description}>
        <p>
          Less than 15% of engineers are women; 2% are Latina. We want that to
          change! {metadata.description}
        </p>
      </div>
      <ButtonLink
        text="Join us on Discord"
        url="https://discord.com/invite/xzHDhxsQAQ"
        external={true}
        icon={faDiscord}
      />
    </section>
  );
}
