import { contactStyles } from "./ContactSection.styles";

const ContactSection = () => {
  return (
    <div style={contactStyles.section}>
      <h3 style={contactStyles.title}>Contact Us</h3>
      
      <div style={contactStyles.contactInfo}>
        <div style={contactStyles.contactItem}>
          <span style={contactStyles.icon}>📞</span>
          <div>
            <p style={contactStyles.contactText}>Call us: 1800 890 1222</p>
            <p style={contactStyles.contactTime}>8:00 AM to 8:00 PM, 365 days</p>
          </div>
        </div>
        
        <div style={contactStyles.contactItem}>
          <span style={contactStyles.icon}>💬</span>
          <p style={contactStyles.contactText}>WhatsApp: 70003 70003</p>
        </div>
      </div>
      
      <div style={contactStyles.appSection}>
        <h4 style={contactStyles.appTitle}>Download App</h4>
        <div style={contactStyles.appButtons}>
          <div style={contactStyles.appButton}>
            <span style={contactStyles.appIcon}>📱</span>
            Google Play
          </div>
          <div style={contactStyles.appButton}>
            <span style={contactStyles.appIcon}>🍎</span>
            App Store
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;