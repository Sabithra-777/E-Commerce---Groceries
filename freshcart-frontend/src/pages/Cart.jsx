import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { cartStyles } from "./Cart.styles";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();



  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const [selectedPayment, setSelectedPayment] = useState('');
  const [showUPIForm, setShowUPIForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' });

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
    if (method === 'UPI') {
      setShowUPIForm(true);
      setShowCardForm(false);
    } else if (method === 'Card') {
      setShowCardForm(true);
      setShowUPIForm(false);
    } else {
      setShowUPIForm(false);
      setShowCardForm(false);
    }
  };

  const handleFinalPayment = () => {
    if (selectedPayment === 'UPI' && !upiId) {
      alert('Please enter UPI ID');
      return;
    }
    if (selectedPayment === 'Card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill all card details');
      return;
    }
    
    if (selectedPayment === 'COD') {
      alert(`Order confirmed! You will pay ₹${getTotalPrice()} on delivery. Expected delivery: Tomorrow`);
    } else {
      alert(`Payment of ₹${getTotalPrice()} via ${selectedPayment} successful! Order confirmed.`);
    }
    
    clearCart();
    navigate('/');
  };

  if (showPayment) {
    return (
      <div style={cartStyles.container}>
        <h2 style={cartStyles.title}>Payment Options</h2>
        <div style={cartStyles.paymentSection}>
          <div style={cartStyles.orderSummary}>
            <h3>Order Summary</h3>
            <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p style={cartStyles.totalPrice}>Total: ₹{getTotalPrice()}</p>
          </div>
          
          <div style={cartStyles.paymentMethods}>
            <button 
              style={{
                ...cartStyles.paymentBtn,
                backgroundColor: selectedPayment === 'UPI' ? '#e3f2fd' : '#ffffff',
                borderColor: selectedPayment === 'UPI' ? '#2196f3' : '#e0e0e0'
              }}
              onClick={() => handlePaymentSelect('UPI')}
            >
              <i className="fab fa-google-pay"></i> Pay with UPI
            </button>
            
            {showUPIForm && (
              <div style={cartStyles.paymentForm}>
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., user@paytm)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  style={cartStyles.formInput}
                />
              </div>
            )}
            
            <button 
              style={{
                ...cartStyles.paymentBtn,
                backgroundColor: selectedPayment === 'Card' ? '#e3f2fd' : '#ffffff',
                borderColor: selectedPayment === 'Card' ? '#2196f3' : '#e0e0e0'
              }}
              onClick={() => handlePaymentSelect('Card')}
            >
              <i className="fas fa-credit-card"></i> Pay with Card
            </button>
            
            {showCardForm && (
              <div style={cartStyles.paymentForm}>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  style={cartStyles.formInput}
                />
                <div style={cartStyles.cardRow}>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    style={{...cartStyles.formInput, width: '48%'}}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    style={{...cartStyles.formInput, width: '48%'}}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  style={cartStyles.formInput}
                />
              </div>
            )}
            
            <button 
              style={{
                ...cartStyles.paymentBtn,
                backgroundColor: selectedPayment === 'COD' ? '#e3f2fd' : '#ffffff',
                borderColor: selectedPayment === 'COD' ? '#2196f3' : '#e0e0e0'
              }}
              onClick={() => handlePaymentSelect('COD')}
            >
              <i className="fas fa-money-bill-wave"></i> Cash on Delivery
            </button>
          </div>
          
          {selectedPayment && (
            <button style={cartStyles.finalPayBtn} onClick={handleFinalPayment}>
              <i className="fas fa-lock"></i> 
              {selectedPayment === 'COD' ? `Confirm Order ₹${getTotalPrice()}` : `Pay ₹${getTotalPrice()}`}
            </button>
          )}
          
          <button style={cartStyles.backBtn} onClick={() => setShowPayment(false)}>
            ← Back to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={cartStyles.container}>
      <h2 style={cartStyles.title}>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</h2>

      {cart.length === 0 ? (
        <div style={cartStyles.emptyCart}>
          <p style={cartStyles.emptyText}>Your cart is empty</p>
          <button style={cartStyles.shopBtn} onClick={() => navigate('/')}>
            🛒 Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div style={cartStyles.cartItems}>
            {cart.map((item) => (
              <div key={item._id} style={cartStyles.cartItem}>
                <img src={item.image} alt={item.name} style={cartStyles.itemImage} />
                <div style={cartStyles.itemDetails}>
                  <h4 style={cartStyles.itemName}>{item.name}</h4>
                  <p style={cartStyles.itemPrice}>₹{item.price} each</p>
                </div>
                
                <div style={cartStyles.quantityControls}>
                  <button 
                    style={cartStyles.quantityBtn}
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span style={cartStyles.quantity}>{item.quantity}</span>
                  <button 
                    style={cartStyles.quantityBtn}
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div style={cartStyles.itemTotal}>
                  ₹{item.price * item.quantity}
                </div>
                
                <button
                  style={cartStyles.removeBtn}
                  onClick={() => removeFromCart(item._id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          
          <div style={cartStyles.cartSummary}>
            <div style={cartStyles.summaryRow}>
              <span>Subtotal:</span>
              <span>₹{getTotalPrice()}</span>
            </div>
            <div style={cartStyles.summaryRow}>
              <span>Delivery:</span>
              <span style={cartStyles.freeDelivery}>FREE</span>
            </div>
            <div style={cartStyles.totalRow}>
              <span>Total:</span>
              <span>₹{getTotalPrice()}</span>
            </div>
            
            <button style={cartStyles.checkoutBtn} onClick={handleCheckout}>
              💳 Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;