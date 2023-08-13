import Navigation from '../../components/Navigation/Navigation';

const Main = () => {
  return (
    <>
      {/* iskelti headeri i layout */}
      <header>
        <div className="logo">LOGO</div>
        <Navigation />
      </header>
      <main>
        <section className="hero">
          <h2>"Worry-Free Repair Warranty Solutions"</h2>
        </section>
      </main>
    </>
  );
};

export default Main;
