# Implementation Plan - Henna_by_ruffy Updates

This plan outlines the changes requested by the client to improve booking accessibility, update pricing and classes, and introduce the "Henna Content Experience" application flow.

## User Review Required

> [!IMPORTANT]
> **WhatsApp Integration for Forms**: Since the site is static, all forms (Contact, Booking, and the new Experience application) redirect to WhatsApp with pre-filled messages. For the "Henna Content Experience" image upload, the user will be prompted to attach the image manually once they are redirected to WhatsApp.

> [!NOTE]
> **Booking Visibility**: We are adding a prominent "Book Appointment" button to the navigation header to address the feedback that clients find it difficult to find where to book.

## Proposed Changes

---

### 1. Global UI Updates

#### [MODIFY] [styles.css](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/styles.css)
- Add styles for the new header CTA button.
- Add styles for the Early Bird discount badge/banner in the Education section.
- Add styles for the "Henna Content Experience" hero and form.
- Remove styles related to `.whatsapp-fab`.

#### [MODIFY] [site.js](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/site.js)
- **Update Services**:
    - Split/Update the Henna service into:
        - `Henna Design (Normal)`: Starting from ₦10,000.
        - `Bridal Henna`: Starting from ₦40,000.
- **Header Update**: Add a "Book Appointment" button next to the nav toggle (or inside the nav for mobile).
- **Contact Form Fix**: Update `setupForms` to generate a WhatsApp message for the contact form instead of just showing a placeholder.
- **New Feature Logic**: Add `setupExperienceForm()` to handle the logic for the new application form.

---

### 2. Navigation & Accessibility

#### [MODIFY] [index.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/index.html)
#### [MODIFY] [booking.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/booking.html)
#### [MODIFY] [about.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/about.html)
#### [MODIFY] [contact.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/contact.html)
#### [MODIFY] [education.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/education.html)
#### [MODIFY] [gallery.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/gallery.html)
#### [MODIFY] [services.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/services.html)
- Remove the `.whatsapp-fab` element from the bottom of all pages.

---

### 3. Feature Updates

#### [MODIFY] [education.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/education.html)
- Add "Duration: 3 Weeks" to Basic and Standard classes.
- Add "Duration: 1 Month" to Premium class.
- Add a prominent 10% Early Bird Discount notice (valid for the next 2 months).

#### [MODIFY] [index.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/index.html)
- Add a new section or a prominent banner in the Hero/Features area promoting "The Henna Content Experience" (May 2nd & 3rd).

#### [NEW] [experience.html](file:///c:/Users/Abdul%20Mannan/OneDrive/Documents/GitHub/Henna_by_ruffy/experience.html)
- Create a dedicated page for "The Henna Content Experience".
- Include the descriptive text provided by the client.
- Implement the application form with all fields:
    - Personal Details (Name, Phone, Social Handle).
    - Availability confirmation (May 2-3).
    - Media Consent & Brand Collaboration checkboxes.
    - Design Area selection.
    - Note about image upload via WhatsApp.

---

## Verification Plan

### Automated Tests
- None (Static site).

### Manual Verification
1. **Visual Check**: Ensure the "Book Now" button is prominent in the header on both desktop and mobile.
2. **Form Testing**:
    - Submit the Contact Form and verify it redirects to WhatsApp with the correct message.
    - Submit the Booking Form and verify service/pricing updates are reflected.
    - Submit the Experience Application and verify all fields are included in the WhatsApp message.
3. **Link Check**: Verify the new "Experience" page is accessible from the home page and nav.
4. **Content Check**: Ensure education class durations and discounts are correctly displayed.
