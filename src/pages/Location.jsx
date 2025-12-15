import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Using Google Geocoding API
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBvOkBwgGlbUiuS-oZo4kqp0h5gjjYMjzU`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
              const address = data.results[0].formatted_address;
              setCurrentLocation(address);
              localStorage.setItem('userLocation', address);
              alert(`Location set: ${address}`);
            }
          } catch (error) {
            console.error('Error getting address:', error);
            setCurrentLocation(`Lat: ${latitude}, Lng: ${longitude}`);
          }
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enter manually.');
          setIsLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setIsLoading(false);
    }
  };

  const handleSearchLocation = async () => {
    if (!searchLocation.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchLocation)}&key=AIzaSyBvOkBwgGlbUiuS-oZo4kqp0h5gjjYMjzU`
      );
      const data = await response.json();
      if (data.results && data.results[0]) {
        const address = data.results[0].formatted_address;
        setCurrentLocation(address);
        localStorage.setItem('userLocation', address);
        alert(`Location set: ${address}`);
      } else {
        alert('Location not found. Please try a different search.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
      alert('Error searching location. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div style={{ padding: "40px 60px", minHeight: "calc(100vh - 90px)" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Select Your Location
      </h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        Choose your delivery location for faster service
      </p>
      
      {currentLocation && (
        <div style={{ 
          padding: "15px", 
          backgroundColor: "#e8f5e8", 
          border: "1px solid #4caf50", 
          borderRadius: "8px", 
          marginBottom: "20px",
          maxWidth: "500px"
        }}>
          <strong>Current Location:</strong> {currentLocation}
        </div>
      )}
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        <button 
          onClick={getCurrentLocation}
          disabled={isLoading}
          style={{ 
            padding: "15px", 
            backgroundColor: isLoading ? "#ccc" : "#4caf50", 
            color: "white",
            border: "none", 
            borderRadius: "8px", 
            cursor: isLoading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "500"
          }}
        >
          <i className="fas fa-location-arrow"></i> 
          {isLoading ? 'Getting Location...' : 'Use Current Location'}
        </button>
        
        <div style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text" 
            placeholder="Enter your area, city..." 
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearchLocation()}
            style={{ 
              flex: 1,
              padding: "15px", 
              border: "1px solid #ddd", 
              borderRadius: "8px", 
              fontSize: "16px" 
            }}
          />
          <button
            onClick={handleSearchLocation}
            disabled={isLoading || !searchLocation.trim()}
            style={{
              padding: "15px 20px",
              backgroundColor: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: "12px", 
            backgroundColor: "#6c757d", 
            color: "white",
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Location;