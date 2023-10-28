import { Cuenta } from './Cuenta';

export const Greetings = ({ name, age, email }) => {
  return (
    <div className='wrapper'>
      <p>
        Hola, señor(a) {name}, tienes {age} y{' '}
        {age >= 18 ? 'eres mayor de edad' : 'no eres mayor de edad'} ({email})
      </p>
      <Cuenta amount={Math.floor(Math.random() * (4000 - 1500 + 1) + 1500)} />
    </div>
  );
};
