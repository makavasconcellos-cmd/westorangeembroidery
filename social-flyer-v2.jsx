export default function WestOrangeEmbroideryFlyer() {
  return (
    <div style={{
      width: '1080px',
      height: '1080px',
      background: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7c 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
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
        {/* Brand Name */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '20px',
            textTransform: 'uppercase',
            background: 'linear-gradient(to right, #ffa500, #ff8c00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            West Orange<br/>Embroidery
          </h1>
          <div style={{
            fontSize: '32px',
            fontWeight: '300',
            letterSpacing: '1px',
            lineHeight: '1.4',
            opacity: '0.95'
          }}>
            Your Production Partner for<br/>Custom Embroidered Apparel
          </div>
        </div>

        {/* Services */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '30px',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '15px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            What We Do
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {['Corporate Apparel', 'Team Uniforms', 'Promotional Products', 'Branded Merchandise'].map((service, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '8px',
                fontSize: '22px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div style={{
          background: 'rgba(255,140,0,0.2)',
          border: '3px solid #ff8c00',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '50px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 50px'
        }}>
          <p style={{ fontSize: '28px', lineHeight: '1.6', marginBottom: '15px' }}>
            <span style={{ fontWeight: '700', fontSize: '32px', color: '#ffa500' }}>
              B2B Production Shop
            </span>
          </p>
          <p style={{ fontSize: '24px', lineHeight: '1.6', marginBottom: '12px' }}>
            We partner with businesses, teams, and organizations
          </p>
          <p style={{ fontSize: '24px', lineHeight: '1.6', fontWeight: '600' }}>
            20-Piece Minimum | Fast Turnaround | Quality Work
          </p>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            fontSize: '28px',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Get Your Quote Today
          </h3>
          <div style={{ fontSize: '26px', lineHeight: '1.8' }}>
            <div style={{ color: '#ffa500', fontWeight: '700', marginBottom: '8px' }}>
              westorangeembroidery.com
            </div>
            <div style={{ color: '#ffa500', fontWeight: '700', marginBottom: '15px' }}>
              info@westorangeembroidery.com
            </div>
            <div style={{ fontSize: '24px', marginTop: '15px', opacity: '0.9' }}>
              📍 Winter Garden, FL | Serving Central Florida
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}