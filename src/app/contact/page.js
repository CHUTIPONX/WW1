import Image from "next/image";
import styles from "../components/css/Contact.module.css";

export default function Contact() {
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
    <div className={styles.fullHeight}>
      <div className={`${styles.container} container`}>
        <div className="row align-items-center">
          <div className={`col-md-6 d-flex justify-content-center ${styles.profileImage}`}>
            <Image 
              src="/assets/img/cat2.png" 
              alt="Profile Picture"
              width={400}
              height={400}
              className={`img-fluid rounded-circle ${styles.imageAnimation}`}
            />
          </div>
          <div className={`col-md-6 ${styles.infoSection}`}>
            <h1 className={styles.name}>Cat</h1>
            <h2 className={styles.title}>Junior UI/UX Developer</h2>
            <p className={styles.description}>
              Exploring design and user experience with a creative mindset.
            </p>
            <ul className={styles.contactDetails}>  
              <li><i className="bi bi-calendar"></i> 31 December, 1992</li>
              <li><i className="bi bi-telephone"></i> +66 065 604 0783</li>
              <li><i className="bi bi-envelope"></i> Bas@donald.com</li>
              <li><i className="bi bi-geo-alt"></i> Chiangmai Technical College, Los Angeles</li>
            </ul>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" aria-label="Facebook" className={styles.icon}><i className="bi bi-facebook"></i></a>
              <a href="https://x.com/" aria-label="Twitter" className={styles.icon}><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="LinkedIn" className={styles.icon}><i className="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/?hl=en" aria-label="Instagram" className={styles.icon}><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
