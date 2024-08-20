import styles from "../components/css/Service.module.css";

export default function Service() {
  return (
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
    <div className={styles.pageContainer}>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h1>Services</h1>
          <p>Discover the range of services we offer to help you achieve your goals.</p>
        </div>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <i className={`fas fa-shield-alt ${styles.icon}`}></i>
            <h2>Shadow Sovereignty</h2>
            <p>Harness the power of shadows to command and control a vast army of loyal followers.</p>
          </div>
          <div className={styles.serviceItem}>
            <i className={`fas fa-sword ${styles.icon}`}></i>
            <h2>Advanced Combat</h2>
            <p>Master various forms of combat and sword techniques to defeat any opponent.</p>
          </div>
          <div className={styles.serviceItem}>
            <i className={`fas fa-dungeon ${styles.icon}`}></i>
            <h2>Dungeon Exploration</h2>
            <p>Navigate and conquer dangerous dungeons filled with challenges and rewards.</p>
          </div>
          <div className={styles.serviceItem}>
            <i className={`fas fa-magic ${styles.icon}`}></i>
            <h2>Skill Enhancement</h2>
            <p>Enhance and upgrade personal skills through rigorous training and experience.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
