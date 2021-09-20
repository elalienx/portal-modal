export default function HeroModal() {
  // Methods
  function onAlert() {
    alert("Im the hero modal!!!");
  }

  return (
    <div className="hero-modal">
      <h2>This is an excuse to create another modal</h2>
      <button onClick={onAlert}>Click me</button>
    </div>
  );
}
