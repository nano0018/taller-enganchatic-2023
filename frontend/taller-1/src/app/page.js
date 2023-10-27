import styles from './page.module.css';

const Greetings = ({ name, age, email }) => {
  return (
    <p>
      Hola, señor(a) {name}, tienes {age} y{' '}
      {age >= 18 ? 'eres mayor de edad' : 'no eres mayor de edad'} ({email})
    </p>
  );
};

export default function Home() {
  const nameArray = [
    'Daniel',
    'Juan',
    'Pedro',
    'Maria',
    'Jose',
    'Luis',
    'Ana',
    'Sofia',
    'Camila',
    'Santiago',
    'Sebastian',
    'Mateo',
    'Nicolas',
    'Samuel',
    'Alejandro',
    'Diego',
    'Valentina',
    'Luciana',
    'Valeria',
  ];
  const emailProvider = [
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'yahoo.com',
    'icloud.com',
  ];
  const userList = [];
  for (let index = 0; index < nameArray.length; index++) {
    userList[index] = {
      name: nameArray[index],
      age: Math.floor(Math.random() * (40 - 15 + 1) + 15),
      email:
        nameArray[index].toLowerCase() +
        Math.floor(Math.random() * (99 - 10 + 1) + 10) +
        '@' +
        emailProvider[Math.floor(Math.random() * (4 - 0 + 1) + 0)],
    };
  }

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
