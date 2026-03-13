# Razorpay Integration TODO

## Plan Steps (Approved)

**Completed: 0/7**

### 1. [x] Create API verify route (`src/app/api/verify-payment/route.js`)\n### 2. [x] Create success page (`src/app/success/page.js`)\n\n**Completed: 2/7**

### 3. [x] Update checkout page (`src/app/checkout/page.js`) - ✅ Razorpay integrated

### 4. [ ] Test integration

### 5. [ ] Minor CSS updates if needed

### 6. [ ] Update README

### 7. [ ] Complete! Run `npm run dev` and test checkout → card payment.

**Instructions:**

- Add to `.env.local`: `NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...` (from dashboard)
- Restart dev server after env changes.
- Test: cart → checkout → card → Razorpay popup → success.
