import styles from './page.module.css';
import "./styles/cuenta.styles.css"
import { Greetings } from './components/Greetings';
import userList from './utils/userlist';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}> React! </h1>
      {userList.map((user, index) => (
        <Greetings
          key={index}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}
    </main>
  );
}
