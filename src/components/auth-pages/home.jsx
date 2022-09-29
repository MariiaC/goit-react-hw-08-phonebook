import s from './home.module.css';


function Home() {
  return (
    <div className={s.container}>
      <header className={s.header}>Welcome
</header>
      <section className={s.section}>
        <p>
          Phone Book 
        </p>
      </section>
    </div>
  );
};

export default Home;