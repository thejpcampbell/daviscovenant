// Footer creed — on every session (spec §5.5), rendered exactly as given.
export default function Creed({ style }) {
  return (
    <div className="creed" style={{ borderTop: '0.5px solid var(--border)', paddingTop: '20px', marginTop: '28px', ...style }}>
      Battle-born and blood-bought.
      <br />
      Riding by faith, fighting by grace.
      <br />
      Every mile has meaning.
    </div>
  );
}
