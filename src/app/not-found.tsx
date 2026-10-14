export default function NotFound() {
  return (
    <div style={{
      fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      color: '#000',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '48px' }}>
        <h1 style={{
          borderRight: '1px solid rgba(0, 0, 0, .3)',
          margin: '0 20px 0 0',
          padding: '0 23px 0 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
          display: 'inline-block',
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '28px',
          margin: 0,
          display: 'inline-block',
        }}>
          This page could not be found.
        </h2>
      </div>
    </div>
  );
}
