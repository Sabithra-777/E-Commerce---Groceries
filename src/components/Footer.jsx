import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const footerStyles = {
    footer: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      marginTop: '60px',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '50px',
      padding: '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '35px 30px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
    },
    sectionHover: {
      transform: 'translateY(-8px)',
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    brandSection: {
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '40px 30px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
    },
    brandName: {
      fontSize: '32px',
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: '10px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    brandTagline: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '30px',
      fontStyle: 'italic',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      marginBottom: '25px',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      borderBottom: '2px solid #3498db',
      paddingBottom: '10px',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '18px 20px',
      background: 'rgba(52, 152, 219, 0.1)',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(52, 152, 219, 0.2)',
    },
    contactItemHover: {
      background: 'rgba(52, 152, 219, 0.2)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)',
    },
    contactIcon: {
      fontSize: '24px',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #3498db, #2980b9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)',
    },
    contactText: {
      fontSize: '16px',
      color: '#ffffff',
      fontWeight: '600',
    },
    contactSubtext: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.7)',
      marginTop: '4px',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px',
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#ffffff',
      border: '2px solid rgba(255, 255, 255, 0.2)',
    },
    socialIconHover: {
      transform: 'scale(1.15) rotate(5deg)',
      background: 'rgba(52, 152, 219, 0.3)',
      boxShadow: '0 8px 25px rgba(52, 152, 219, 0.4)',
    },
    appButtons: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
    },
    appButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '15px 25px',
      background: 'linear-gradient(45deg, #3498db, #2980b9)',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#ffffff',
      border: '2px solid rgba(255, 255, 255, 0.2)',
    },
    appButtonHover: {
      transform: 'translateY(-3px)',
      background: 'linear-gradient(45deg, #2980b9, #3498db)',
      boxShadow: '0 10px 30px rgba(52, 152, 219, 0.4)',
    },
    bottomBar: {
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '25px 40px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    copyright: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.8)',
      margin: 0,
      fontWeight: '500',
    },
  };

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/freshcart',
      instagram: 'https://instagram.com/freshcart',
      twitter: 'https://twitter.com/freshcart',
      youtube: 'https://youtube.com/freshcart'
    };
    window.open(urls[platform], '_blank');
  };

  const handleContactClick = (type, value) => {
    if (type === 'phone') window.open(`tel:${value}`, '_self');
    else if (type === 'whatsapp') window.open(`https://wa.me/${value.replace(/\s/g, '')}`, '_blank');
    else if (type === 'email') window.open(`mailto:${value}`, '_self');
  };

  const handleAppDownload = (store) => {
    const urls = {
      playstore: 'https://play.google.com/store/apps/details?id=com.freshcart',
      appstore: 'https://apps.apple.com/app/freshcart/id123456789'
    };
    window.open(urls[store], '_blank');
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        {/* Brand Section */}
        <div style={footerStyles.brandSection}>
          <h2 style={footerStyles.brandName}>🛒 FreshCart</h2>
          <p style={footerStyles.brandTagline}>"Your Premium Grocery Experience"</p>
          
          <div style={footerStyles.socialIcons}>
            {[
              { icon: '📘', platform: 'facebook' },
              { icon: '📷', platform: 'instagram' },
              { icon: '🐦', platform: 'twitter' },
              { icon: '📺', platform: 'youtube' }
            ].map(({ icon, platform }) => (
              <div 
                key={platform}
                style={{
                  ...footerStyles.socialIcon,
                  ...(hoveredItem === platform ? footerStyles.socialIconHover : {})
                }}
                onMouseEnter={() => setHoveredItem(platform)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleSocialClick(platform)}
              >
                {icon}
              </div>
            ))}
          </div>
          
          <div style={footerStyles.appButtons}>
            <div 
              style={{
                ...footerStyles.appButton,
                ...(hoveredItem === 'playstore' ? footerStyles.appButtonHover : {})
              }}
              onMouseEnter={() => setHoveredItem('playstore')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleAppDownload('playstore')}
            >
              <span>📱</span> Google Play
            </div>
            <div 
              style={{
                ...footerStyles.appButton,
                ...(hoveredItem === 'appstore' ? footerStyles.appButtonHover : {})
              }}
              onMouseEnter={() => setHoveredItem('appstore')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleAppDownload('appstore')}
            >
              <span>🍎</span> App Store
            </div>
          </div>
        </div>

        {/* Contact Section - THE MUST HAVE */}
        <div 
          style={{
            ...footerStyles.section,
            ...(hoveredItem === 'contact' ? footerStyles.sectionHover : {})
          }}
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h3 style={footerStyles.title}>📞 Contact Us</h3>
          
          <div style={footerStyles.contactInfo}>
            {[
              { 
                icon: '📞', 
                text: '1800 890 1222', 
                subtext: '24/7 Customer Support', 
                type: 'phone', 
                value: '18008901222' 
              },
              { 
                icon: '💬', 
                text: 'WhatsApp Support', 
                subtext: '+91 70003 70003', 
                type: 'whatsapp', 
                value: '917000370003' 
              },
              { 
                icon: '✉️', 
                text: 'support@freshcart.com', 
                subtext: 'Email Support & Queries', 
                type: 'email', 
                value: 'support@freshcart.com' 
              },
              { 
                icon: '📍', 
                text: 'Visit Our Store', 
                subtext: 'Mumbai, Delhi, Bangalore', 
                type: 'location', 
                value: '' 
              }
            ].map((contact, index) => (
              <div 
                key={index}
                style={{
                  ...footerStyles.contactItem,
                  ...(hoveredItem === `contact-${index}` ? footerStyles.contactItemHover : {})
                }}
                onMouseEnter={() => setHoveredItem(`contact-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => contact.type !== 'location' && handleContactClick(contact.type, contact.value)}
              >
                <div style={footerStyles.contactIcon}>{contact.icon}</div>
                <div>
                  <div style={footerStyles.contactText}>{contact.text}</div>
                  <div style={footerStyles.contactSubtext}>{contact.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={footerStyles.bottomBar}>
        <p style={footerStyles.copyright}>
          © 2024 FreshCart. All rights reserved. | Professional Groceries Ecommerce Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;