import Image from "next/image";
import styles from "../components/css/About.module.css";

export default function About() {
  return (
    <>
        <div 
        style={{ 
          backgroundImage: 'url(/assets/img/F.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
      <br />
      <div className={styles.container}>
        <div className={styles.profileImage}>
          <Image 
            src="/assets/img/cat1.png" 
            alt="Profile Picture"
            width={150}
            height={150}
            className={`img-fluid rounded-circle ${styles.imageAnimation}`}
          />
        </div>
        <h1 className={styles.title}>Sung Jinwoo</h1>
        <p className={styles.leadText}>
          Sung Jinwoo (성진우, Seong Jin-Wu) is the main protagonist of Solo Leveling. He is the strongest hunter in the world and the second Shadow Monarch, having inherited the position from his predecessor Ashborn.
        </p>

        <h2 className={styles.subtitle}>History</h2>
        <p className={styles.historyText}>
          Manhwa, or Korean manga, is known for its unique style. The color painting work emphasizes vertical length, particularly in intense fight scenes, which are often drawn vertically with considerable white space. While digital readings can be lengthy, book formats tend to resemble Japanese manga. Historical events, such as Ragnarok, are often referenced, focusing on current global trends and popular culture. Some stories feature graphic content with dark themes. New episodes are typically released weekly or less frequently.
        </p>

        <div className={styles.badgeContainer}>
          <span className={`badge ${styles.badge}`}>UI Design</span>
          <span className={`badge ${styles.badge}`}>UX Design</span>
          <span className={`badge ${styles.badge}`}>Prototyping</span>
          <span className={`badge ${styles.badge}`}>Branding</span>
          <span className={`badge ${styles.badge}`}>HTML/CSS</span>
          <span className={`badge ${styles.badge}`}>Wireframing</span>
          <span className={`badge ${styles.badge}`}>Information Architecture</span>
          <span className={`badge ${styles.badge}`}>User Research</span>
          <span className={`badge ${styles.badge}`}>User Interviews</span>
          <span className={`badge ${styles.badge}`}>Leadership</span>
          <span className={`badge ${styles.badge}`}>Sketch</span>
          <span className={`badge ${styles.badge}`}>Adobe Suite</span>
        </div>
      </div>
      </div>
      <br />

    </>
  );
}
