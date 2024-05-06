import styles from "./HomePage.module.css";
import TranslateInput from "../../components/translation-components/translate-input";
import TranslateOutput from "../../components/translation-components/translate-output";
import SearchHistory from "../../components/translation-components/search-history";

function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.translationContainer}>
        <div className={styles.translateInputContainer}>
          <TranslateInput />
        </div>
        <div className={styles.translateOutputContainer}>
          <TranslateOutput />
        </div>
      </div>
      <SearchHistory isLoggedIn={true} />
    </div>
  );
}

export default HomePage;
