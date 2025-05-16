import type { FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <div style={{ padding: '1.5rem', fontFamily: 'Arial' }}>
      <h2>🛍️ Order from Bodega</h2>
      <form
        action="https://formspree.io/f/YOUR_ID_HERE"
        method="POST"
      >
        <label>Your Name:</label><br />
        <input type="text" name="name" required /><br /><br />

        <label>What You Want:</label><br />
        <textarea name="order" required></textarea><br /><br />

        <label>Delivery Address:</label><br />
        <input type="text" name="address" required /><br /><br />

        <label>Payment Option:</label><br />
        <select name="payment">
          <option value="cashapp">$BodegaPlug</option>
          <option value="btc">BTC: 3Fz...abc</option>
        </select><br /><br />

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};
