export default function WestOrangeEmbroideryFlyer() {
  return (
    <div style={{
      width: '1080px',
      height: '1080px',
      background: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7c 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img
            src="Logo.png"
            alt="West Orange Embroidery"
            style={{ maxWidth: '600px', height: 'auto', marginBottom: '20px' }}
          />
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '32px',
          fontWeight: '300',
          letterSpacing: '1px',
          marginBottom: '50px',
          textAlign: 'center',
          lineHeight: '1.4'
        }}>
          Your Production Partner for<br/>Custom Embroidered Apparel
        </div>

        {/* Services */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '25px',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '15px'
          }}>
            What We Do
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {['Corporate Apparel', 'Team Uniforms', 'Promotional Products', 'Branded Merchandise'].map((service, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '20px',
                borderRadius: '8px',
                fontSize: '20px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div style={{
          background: 'rgba(255,140,0,0.2)',
          border: '2px solid #ff8c00',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '10px' }}>
            <span style={{ fontWeight: '700', fontSize: '26px', color: '#ffa500' }}>
              B2B Production Shop
            </span>
          </p>
          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '10px' }}>
            We partner with businesses, teams, and organizations
          </p>
          <p style={{ fontSize: '22px', lineHeight: '1.6' }}>
            20-Piece Minimum | Fast Turnaround | Quality Work
          </p>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            fontSize: '24px',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Get Your Quote Today
          </h3>
          <div style={{ fontSize: '22px', lineHeight: '1.8' }}>
            <a href="https://westorangeembroidery.com" style={{ color: '#ffa500', textDecoration: 'none', fontWeight: '600' }}>
              westorangeembroidery.com
            </a><br/>
            <a href="mailto:info@westorangeembroidery.com" style={{ color: '#ffa500', textDecoration: 'none', fontWeight: '600' }}>
              info@westorangeembroidery.com
            </a>
            <div style={{ fontSize: '20px', marginTop: '10px', opacity: '0.9' }}>
              📍 Winter Garden, FL | Serving Central Florida
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}