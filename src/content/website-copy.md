# SLiQWriterS — Master Website Copy Deck
> **Document Role:** Technical Writer & Brand Copy Deck  
> **Target File:** `website-copy.md`  
> **Source Directory:** `c:\xampp\htdocs\sliqwriters\` (Public Website Copy; Excludes `/admin/`)  
> **Version:** 2.0 (Comprehensive Public Master Copy)  
> **Status:** Production Reference  

---

## Table of Contents
1. [Brand Architecture & Core Positioning](#1-brand-architecture--core-positioning)
2. [Global Sitewide Elements & Navigation](#2-global-sitewide-elements--navigation)
   - 2.1 [Header, Contact Strip & Navigation Menu](#21-header-contact-strip--navigation-menu)
   - 2.2 [Global Footer & Newsletter Capture](#22-global-footer--newsletter-capture)
   - 2.3 [Shared Sitewide Component: Core Process](#23-shared-sitewide-component-core-process)
   - 2.4 [Shared Sitewide Component: What Makes Us Different](#24-shared-sitewide-component-what-makes-us-different)
   - 2.5 [Shared Sitewide Component: Who We Are / Authority Stats](#25-shared-sitewide-component-who-we-are--authority-stats)
   - 2.6 [Shared Sitewide Component: More About Us / The Gap & History](#26-shared-sitewide-component-more-about-us--the-gap--history)
   - 2.7 [Shared Sitewide Component: Sitewide Client Testimonials](#27-shared-sitewide-component-sitewide-client-testimonials)
   - 2.8 [Shared Sitewide Component: Reusable Sidebar & Sticky Widgets](#28-shared-sitewide-component-reusable-sidebar--sticky-widgets)
   - 2.9 [Shared Sitewide Component: Feature Snippets](#29-shared-sitewide-component-feature-snippets)
3. [Homepage (`index.php`)](#3-homepage-indexphp)
4. [About Us Page (`about.php`)](#4-about-us-page-aboutphp)
5. [Founder Profile: Deh Chukwuka (`founder.php`)](#5-founder-profile-deh-chukwuka-founderphp)
6. [Services Overview (`services.php` & Legacy `service-old.php`)](#6-services-overview-servicesphp--legacy-service-oldphp)
7. [Flagship Service: Growthwright™ (`growthwright.php`)](#7-flagship-service-growthwright-growthwrightphp)
8. [Flagship Service: Voicewright™ (`voicewright.php`)](#8-flagship-service-voicewright-voicewrightphp)
9. [Copywriting Service Page (`copywriting.php`)](#9-copywriting-service-page-copywritingphp)
10. [LinkedIn Growth Service Page (`linkedin-growth.php`)](#10-linkedin-growth-service-page-linkedin-growthphp)
11. [Content Marketing Service Page (`marketing.php`)](#11-content-marketing-service-page-marketingphp)
12. [Elite Personal Branding Page (`branding.php`)](#12-elite-personal-branding-page-brandingphp)
13. [Coaching & Mentorship Page (`mentorship.php`)](#13-coaching--mentorship-page-mentorshipphp)
14. [Case Studies Library & Detail Pages (`case-studies.php` & `case-study.php`)](#14-case-studies-library--detail-pages-case-studiesphp--case-studyphp)
    - 14.1 [Case Studies Library Hub (`case-studies.php`)](#141-case-studies-library-hub-case-studiesphp)
    - 14.2 [Case Study 1: Denie Geertzen — TAT Agency (Voicewright)](#142-case-study-1-denie-geertzen--tat-agency-voicewright)
    - 14.3 [Case Study 2: Christina Voll — Rise Remotely (Voicewright)](#143-case-study-2-christina-voll--rise-remotely-voicewright)
    - 14.4 [Case Study 3: Majrooh Abubakar — RemoteGrowthLab (Voicewright)](#144-case-study-3-majrooh-abubakar--remotegrowthlab-voicewright)
    - 14.5 [Case Study 4: Socotra Nights (Growthwright)](#145-case-study-4-socotra-nights-growthwright)
    - 14.6 [Case Study 5: Super (Growthwright)](#146-case-study-5-super-growthwright)
    - 14.7 [Case Study 6: BrighterFuture (Growthwright)](#147-case-study-6-brighterfuture-growthwright)
    - 14.8 [Case Study 7: Rockdidit (Growthwright)](#148-case-study-7-rockdidit-growthwright)
    - 14.9 [Case Study 8: Syndy AI (Growthwright)](#149-case-study-8-syndy-ai-growthwright)
15. [Pricing & Service Packages (`pricing.php`)](#15-pricing--service-packages-pricingphp)
16. [Frequently Asked Questions (`faq.php`)](#16-frequently-asked-questions-faqphp)
17. [Contact Us & Consultation Inquiries (`contact.php`)](#17-contact-us--consultation-inquiries-contactphp)
18. [Order Confirmation & Checkout (`order-details.php`)](#18-order-confirmation--checkout-order-detailsphp)
19. [Blog & Knowledge Hub (`blog.php` & `blog-details.php`)](#19-blog--knowledge-hub-blogphp--blog-detailsphp)

---

## 1. Brand Architecture & Core Positioning

### 1.1 Brand Identity & Corporate Profile
* **Brand Name:** SLiQWriterS
* **Legal Entity:** SLiQWriterS Limited (RC - 9200424)
* **Founder & Chief Strategist:** Deh Chukwuka (SLiQ) — Marketing Copywriter, Growth Strategist, and Entrepreneur
* **Core Philosophy:** Copywriting and strategic positioning are the foundational drivers of business revenue. Words are not decorative elements; they represent the heart and soul of business performance.
* **Global Footprint:** Serving clients across Nigeria, the United Kingdom, the United States, Europe, Canada, and Australia (Operating hubs in Lagos, London, and New York).

### 1.2 Core Slogans, Taglines & Brand Hooks
* **Primary Brand Slogan:** *"We make businesses impossible to ignore."*
* **Core Growth Mantra:** *"Focused on Growth. Focused on Visibility. Focused on Sales."*
* **Results Stance:** *"Real thinking. Meaningful results."*
* **Conversion Anchor:** *"The gap between good and impossible to ignore closes in one conversation."*
* **Copywriting Thesis:** *"Every word on your website, landing page, sales page, and email sequence is either making you money or costing you money."*

### 1.3 Key Proof Metrics
* **9+ Years of Agency Operations:** In business continuously since 2017; Founder operating in elite freelance copywriting since 2011/2012.
* **$3M+ in Client Revenue Generated:** Measured directly from client campaigns, VSLs, funnels, and organic lead engines.
* **510+ Brands Served:** Spanning B2B performance marketing, SaaS, fintech, Web3, real estate, professional services, and high-end hospitality.
* **100% Client Satisfaction:** Backed by multi-year client retentions and documented case studies.
* **Founder Community:** 32,000+ organic LinkedIn followers built solely through strategic authority content.

---

## 2. Global Sitewide Elements & Navigation

### 2.1 Header, Contact Strip & Navigation Menu
**Source Files:** `includes/header.php`, `index.php`

#### Top Information Strip (Desktop):
* **WhatsApp Direct:** `+2348133720549`  
  * *Label:* "WhatsApp Us"  
  * *Target URL:* `https://wa.me/+2348133720549?text=Hello%20Sliqwriters%20I%20want%20to%20order%20a%20service`
* **Direct Email:** `hello@sliqwriters.com`  
  * *Label:* "Contact Us"
* **Operating Hours:** "Remotely, 24/7"  
  * *Label:* "Working Time"

#### Desktop Navigation Bar:
* **Logo Brand:** SLiQWriterS (`assets/img/logo-dark.jpg`)
* **Menu Links:**
  1. `Home` -> `index`
  2. `Growthwright™ (Marketing)` -> `growthwright`
  3. `Copywriting` -> `copywriting`
  4. `Voicewright™ (LinkedIn Growth)` -> `voicewright`
  5. `Blog` -> `blog`
  6. `Academy` -> `https://sliqwritersacademy.carrd.co`
  7. `About Us` -> `about`
* **Primary Header CTA Button:**  
  * *Text:* `Contact Us`  
  * *Link:* `https://calendly.com/dehchukwuka/30-mins-chat-with-deh`

#### Mobile Menu Drawer:
* **Mobile Brand Logo:** SLiQWriterS
* **Mobile Menu Links:**
  1. `Home` (`index`)
  2. `Growthwright™ (Marketing)` (`growthwright`)
  3. `Copywriting` (`copywriting`)
  4. `Voicewright™ (LinkedIn Growth)` (`voicewright`)
  5. `Blog` (`blog`)
  6. `Academy` (`https://sliqwritersacademy.carrd.co`)
  7. `About Us` (`about`)

---

### 2.2 Global Footer & Newsletter Capture
**Source Files:** `includes/footer.php`, `includes/voicewright-footer.php`

#### Primary Footer Newsletter & Top Banner:
* **Newsletter Headline:** "Get the thinking before you get the pitch."
* **Newsletter Subtitle:** "Marketing, business, and writing insights. Sent occasionally."
* **Form Inputs & Buttons:**
  * Field 1: `Email Address` (Placeholder, Required, Email)
  * Field 2: `Name` (Placeholder, Required, Text)
  * Submit Button: `Subscribe`

#### Strategy Call Section:
* **Callout Headline:** "The gap between good and impossible to ignore closes in one conversation."
* **Callout Body Copy:** "30 minutes. No pitch. We'll tell you honestly whether Growthwright or Voicewright is the right fit or if neither is, yet."
* **Action CTAs:**
  * Primary Button: `Book Your Free Strategy Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
  * Secondary Button: `Chat With Us` (`https://wa.me/2348133720549`)
* **Urgent Notice Box:**
  * Heading: *"Too urgent for a call?"*
  * Body: "Email us directly: hello@sliqwriters.com"

#### Footer Widget Columns:
* **Column 1: About SLiQWriterS**
  * *Widget Title:* "About SLiQWriterS"
  * *Text:* "SLiQWriterS is a market and business growth agency built and led by Deh Chukwuka, a marketing copywriter and entrepreneur who's been turning words into revenue for the past 13 years.  
    9+ years. $3M+ in client revenue generated. 510+ brands served. 100% client satisfaction."
  * *Location Badge:* "Nigeria, UK, USA (Global Clientele)"
  * *Email Contact:* `hello@sliqwriters.com`
  * *Phone Contact:* `+(234)-813-372-0549`
* **Column 2: Quick Links**
  * *Widget Title:* "Quick Links"
  * *Links:*
    * `Home` (`index`)
    * `About Us` (`about`)
    * `Services` (`services`)
    * `Blog` (`blog`)
    * `Contact Us` (`contact`)
    * `FAQ` (`faq`)
* **Column 3: Services**
  * *Widget Title:* "Services"
  * *Links:*
    * `Growthwright© (Marketing)` (`growthwright`)
    * `Copywriting` (`copywriting`)
    * `Voicewright© (Linkedin Growth)` (`voicewright`)
* **Column 4: We Always Deliver**
  * *Widget Title:* "We Always Deliver"
  * *Body Text:* "510+ brands served. 9+ years of experience. $3M+ in client revenue generated. 100% client satisfaction."

#### Copyright & Attribution:
* **Copyright Notice:** `Copyright © [Current Year] SLiQWriterS. All Rights Reserved.`
* **Developer Attribution:** `Developed by Techifice` (`https://www.techifice.com?utm_source=sliqwriters`)

#### Voicewright & Growthwright Landing Page Footer (`includes/voicewright-footer.php`):
* **Wordmark & Subtitle:**
  * For Case Library: `SLiQWriterS — MARKETING & BUSINESS GROWTH`
  * For Growthwright: `Growthwright™ — BY SLiQWriterS`
  * For Voicewright: `VOICEWRIGHT™ — BY SLiQWriterS`
* **Service Descriptor:**
  * *Voicewright:* "VOICEWRIGHT™ is a LinkedIn ghostwriting service of SLiQWriterS... a results-first marketing and business growth agency. We make businesses and the people leading them impossible to ignore."
  * *Growthwright:* "Growthwright™ is a marketing service of SLiQWriterS... a results-first marketing & business growth agency. We make businesses impossible to ignore."
* **Footer Locations:** "Lagos · London · New York"
* **Footer Navigation Links:**
  * `hello@sliqwriters.com ↗`
  * `See the full case studies` / `Explore all case studies` (`case-studies`)
  * `© [Current Year] SLiQWriterS. All rights reserved.`
  * `Back to SLiQWriterS ↗` (`index`)

---

### 2.3 Shared Sitewide Component: Core Process
**Source File:** `includes/our-process.php`

* **Section Headline:** "How We Work"
* **Section Subheadline:** "Working with SLiQWriterS is straightforward because we've done this enough times to remove every point of friction."
* **Process Steps:**
  1. "You tell us what you're building toward. We want the actual goals behind it."
  2. "Book a 30-minute strategy call (we tell you honestly if this is a fit)"
  3. "We map the approach... Growthwright or Voicewright, scoped to what you actually need."
  4. "We get to work, while you stay in the loop. ALWAYS.."
  5. "We deliver, you grow... and we don't stop refining until you become impossible to ignore."

---

### 2.4 Shared Sitewide Component: What Makes Us Different
**Source File:** `includes/why-choose-us.php`

* **Section Title:** "What Makes Us Different"
* **Section Subtitle:** "What Makes Us Different From Every Other Agency You've Considered."
* **Differentiator 01:**
  * *Title:* "We Know This Market"
  * *Description:* "Thirteen years inside the Nigerian & Global market. We understand different business cultures, and what it actually takes to build trust with audiences that have seen every trick. We don't guess strategies. We build them from the ground up specifically for your business."
* **Differentiator 02:**
  * *Title:* "Practitioners Not Theorists"
  * *Description:* "We run an agency and a content operation simultaneously. Meaning, every strategy we recommend, we've tested on real campaigns with lots of money on the line. After 210+ businesses worked with? It's hard to see something we haven't dealt with already."
* **Differentiator 03:**
  * *Title:* "Results Over Vanity"
  * *Description:* "We don't celebrate followers, reach, or impressions unless they connect to business outcomes. Every engagement is built around what you need your marketing to produce: inquiries, conversions, revenue. We measure what matters."
* **Differentiator 04:**
  * *Title:* "Copy-First Thinking"
  * *Description:* "We are writers before we are anything else. Meaning? Every strategy, every campaign, every social post starts with the question 'what do we need this to say and who do we need to say it to?' Words are not an afterthought. They're the foundation."
* **Differentiator 05:**
  * *Title:* "Selective by Design"
  * *Description:* "At SLiQWriterS Agency, we don't work with everyone. We work with businesses that value strategy, trust professional judgment, and are investing in real growth. That selectivity also means every client gets our full attention. Every single time!"
* **Differentiator 06:**
  * *Title:* "Local Roots. Global Standard."
  * *Description:* "Nigerian by origin. World-class by standard. Our work competes with the best copywriting & marketing agencies globally. Why? Because we hold ourselves to that benchmark every single day. Your business deserves nothing less."

---

### 2.5 Shared Sitewide Component: Who We Are / Authority Stats
**Source File:** `includes/who-we-are.php`

* **Eyebrow Label:** "WHO WE ARE"
* **Section Headline:** "Nine years. Built by someone who's been in it the whole time."
* **Body Copy:** "SLiQWriterS is a market and business growth agency built and led by Deh Chukwuka. A marketing copywriter and entrepreneur who's been turning words into revenue for the past 13 years."
* **Authority Metrics Grid:**
  * `9+` Years in Business
  * `$3M+` Client Revenue Generated
  * `510+` Brands Served
  * `100%` Client Satisfaction
* **CTA Button:** `More About Deh` (`about`)
* **Caption Under Image:** "Built and led by Deh Chukwuka, a marketing copywriter and entrepreneur with 13 years of experience turning words into revenue."

---

### 2.6 Shared Sitewide Component: More About Us / The Gap & History
**Source File:** `includes/more-about-us.php`

* **Eyebrow Label:** "MORE ABOUT US"
* **Section Headline:** "Turning words into revenue for 9+ years."
* **Body Narrative:**
  * "Every business has two realities: what it actually delivers, and what people think it delivers."
  * "When those two things don't match, you lose. Not because your product isn't good enough, but because the market doesn't understand why they should care."
  * "That gap — between good and unforgettable — is exactly where we work. Every word we write, every strategy we build, every piece of content we produce for you exists for one reason: to close that gap for your business permanently."
* **Interactive Tabs:**
  * **Tab 1: Our Vision**
    * *Title:* "Our Vision"
    * *Paragraph 1:* "Our vision is simple: to be the agency that African and global businesses trust when the words and strategy have to be right."
    * *Paragraph 2:* "Not the noisiest agency... the most effective one. The one that makes businesses impossible to ignore, regardless of the market they're in."
    * *Checklist:*
      * "Establish unbreakable relationship with your customers"
      * "Scale your business to be the best in your industry"
  * **Tab 2: Our History**
    * *Title:* "9+ years in business"
    * *Body:* "Established in 2017, we started as a 1-man agency and have gone on to become one of the biggest copywriting and marketing agencies around with a team of 20+ and a global reach."
  * **Tab 3: License & Legal Standing**
    * *Title:* "We are a registered company"
    * *Body:* "SLiQWriterS Agency is a registered business under the name SLiQWriterS Limited, with registration number RC - 9200424."

---

### 2.7 Shared Sitewide Component: Sitewide Client Testimonials
**Source File:** `includes/testimonials.php`

* **Section Eyebrow:** "Results Speak" / "Testimonials"
* **Main Headline:** "Customer Feedbacks" / "Testimonials"
* **Section Subheadline:** "Take a look at what some of our top clients say about us" / "See how our happy clients rate our professional services"
* **Client Reviews:**
  1. **Mikko Rissanen** — *CEO Coachlancer, VR scientist*
     * *"SLiQWriterS is one of the oldest collaborators of Coachlancer. Their writing is versatile and never leaves the audience cold!"*
  2. **Joshua Theophilus** — *CEO TheAgencyTeam & Coach*
     * *"Deh is a resourceful content strategist and among a few top freelance mentor you will find in Africa of recent. Working with him has always been a pleasure and I can't recommend him enough."*
  3. **Emmanuel Nduka** — *Author, Ghostwriter & Writing Coach*
     * *"SLiQWriterS has proven itself to be one of the best content creation agencies in Nigeria. Their turn-around time is as fast as they come. I highly recommend them to all."*
  4. **Emeka Nobis** — *Author & Thought Leader*
     * *"Deh Chukwuka knows his onions. What else can I say? I recommend him."*
  5. **Paul Olowojoba** — *Founder, Brandnerds*
     * *"Deh Chukwuka (SLiQ) is a prolific writer with an amazing and unique writing style. He has provided several services to my clients and they all love his work. He is really that good."*

---

### 2.8 Shared Sitewide Component: Reusable Sidebar & Sticky Widgets
**Source File:** `includes/sidebar.php`

* **Widget 1: All Services Menu**
  * *Title:* "All Services"
  * *List of Links:*
    * `Growthwright™ (Marketing)` -> `growthwright`
    * `Voicewright™ (LinkedIn Growth)` -> `voicewright`
    * `Copywriting` -> `copywriting`
* **Widget 2: Need Any Help? (Emergency Help Banner)**
  * *Title:* "Need Any Help ?"
  * *Description:* "Feel free to reach us via the following channels. We are always ready to assist you and your business."
  * *Direct Email:* `info@sliqwiters.com`
  * *Direct Phone:* `+(234)8133720549`
  * *WhatsApp Channel:* `Chat with us` (`https://wa.me/2348133720549`)
  * *Consultation CTA Button:* `Book Free Consultation` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)

---

### 2.9 Shared Sitewide Component: Feature Snippets
**Source File:** `includes/snippets.php`

* **Card 1: Growthwright™ (Done-For-You Marketing)**
  * *Target URL:* `growthwright.php`
  * *Heading:* `Growthwright™`
  * *Subheading:* `(Done-For-You Marketing)`
  * *Body:* "A complete marketing system - strategy, content creation, distribution and paid advertising that builds the right audience and converts them into customers. You focus on running your business. We handle making it impossible to ignore."
* **Card 2: Voicewright™ (LinkedIn Ghostwriting & Management)**
  * *Target URL:* `voicewright.php`
  * *Heading:* `Voicewright™`
  * *Subheading:* `(LinkedIn Ghostwriting & Management)`
  * *Body:* "Your brand speaks every day whether you post or not. We make sure it says the right things consistently, strategically, and in a voice that builds trust and attracts the clients you actually want. Think of it as having a growth partner."

---

## 3. Homepage (`index.php`)

### 3.1 Metadata & Headers
* **Page Title:** `SLiQWriterS - copywriting, marketing, linkedin growth & coaching`
* **Meta Description:** `SLiQWriterS is a freelance writing, creative and branding agency, dedicated to offering you the very best of digital services.`
* **Meta Author:** `Olawuni Emmanuel Kayode - OK Emmanuel, Techifice`
* **Meta Keywords:** `freelancing, writer, copywriting, posts, articles, branding, coaching`

### 3.2 Hero Slider Sequences (`includes/hero.php`)
* **Slide 1:**
  * *Subtitle:* "Copywriting and Marketing Agency. Since 2017"
  * *H1 Title Line 1:* "Focused on Growth"
  * *H1 Title Line 2:* "Focused on Visibility"
  * *H1 Highlight:* "Focused on Sales"
  * *CTAs:* `Our Services` (`services`) | `Contact Us` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Slide 2:**
  * *Subtitle:* "Welcome To"
  * *H1 Title Line 1:* "SLiQWriterS Copywriting"
  * *H1 Title Line 2:* "& Marketing Agency"
  * *Hero Paragraph:* "We make businesses impossible to ignore"
  * *CTAs:* `Our Services` (`services`) | `Contact Us` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Slide 3:**
  * *Subtitle:* "Welcome To"
  * *H1 Title Line 1:* "Nigeria's Leading Copywriting"
  * *H1 Title Line 2:* "& Marketing Agency"
  * *Hero Paragraph:* "We make businesses impossible to ignore"
  * *CTAs:* `Our Services` (`services`) | `Contact Us` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Slide 4:**
  * *Subtitle:* "Ready To Grow Your Business?"
  * *H1 Title Line 1:* "The Best Copywriters"
  * *H1 Title Line 2:* "& Marketers In Africa"
  * *Hero Paragraph:* "Get access to elite copywriters and marketers."
  * *CTAs:* `Our Services` (`services`) | `Contact Us` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)

### 3.3 Core Problem Statement Section
* **H2 Headline:** "Most businesses have a marketing problem they've misdiagnosed."
* **Paragraph 1:** "You think you need more content. More posts. More ads. More followers."
* **Paragraph 2:** "What you actually need is the right words, in the right places, speaking to the right people... Consistently enough to build the kind of trust that turns audiences into customers."
* **Paragraph 3:** "And that's what SLiQWriterS Agency does. This is our 9th year of doing it for top businesses, in real markets, with real results."

### 3.4 Page Layout & Order of Inclusions
1. Header & Navigation (`includes/header.php`)
2. Hero Slider (`includes/hero.php`)
3. Marketing Problem Callout (Direct text)
4. Feature Cards / Snippets (`includes/snippets.php`)
5. How We Work (`includes/our-process.php`)
6. Who We Are / 9-Year Proof (`includes/who-we-are.php`)
7. What Makes Us Different (`includes/why-choose-us.php`)
8. More About Us / The Gap (`includes/more-about-us.php`)
9. Testimonials Carousel (`includes/testimonials.php`)
10. Footer & Conversion Section (`includes/footer.php`)

---

## 4. About Us Page (`about.php`)

### 4.1 Page Header & Breadcrumb
* **Breadcrumb Title:** `About Us`
* **Navigation Path:** `Home` -> `About Us`

### 4.2 Main Story & Founding Narrative
* **Eyebrow / Sub-title:** `Who We Are`
* **Main H2 Headline:** "The Best Copywriting & Marketing Agency In Nigeria? YES. In Africa? YES. In the world? Well – Our Results Suggest So!"
* **Opening Salutation:** "Hey, Neighbor. Welcome. I'm Deh Chukwuka, Founder and Copywriter here at SLiQWriterS Agency."
* **Paragraph 1:** "I know you're here because you want us to help with your brands marketing, copywriting and LinkedIn needs... I appreciate this greatly."
* **Paragraph 2:** "While my team and I are ready to help you achieve your goals and make you absolutely impossible to ignore... Here's a brief story of how we started."
* **Paragraph 3:** "You see, I started SLiQWriterS 9 years ago. I had been freelancing on Fiverr, Upwork & the rest for 4 years (yes, I've been freelancing since 2012)."
* **Paragraph 4:** "While working with individuals and brands, I realised that a lot of people had no idea how to genuinely grow their businesses."
* **Paragraph 5:** "They were always looking for cheap labour to help take care of 'this and that' in their brand – it wasn't sustainable."
* **Paragraph 6:** "As a top-rated freelancer on multiple platforms, I thought of ways to help these brands grow without them having to work with a lot of people."
* **Paragraph 7:** "That was when it hit me. SLiQWriterS was born to help businesses cater for all needs that involved GROWTH, VISIBILITY AND SALES."
* **Paragraph 8:** "Contrary to what I thought then, launching a functional business was no joke (I'm sure you understand this too)."
* **Paragraph 9:** "I spent the first 6 months strategizing, building and creating – I literally didn't sleep well for weeks."
* **Paragraph 10:** "Finally, clients started coming. They had specific demands which I met and exceeded."
* **Paragraph 11:** "Fast-forward to today, what began as a one-person operation has grown into a team of over 15 individuals... 200+ projects have been handled with clients smiling ear to ear, on completion."
* **Paragraph 12:** "We've served businesses in over 30 countries worldwide and we know you'd definitely add to that number soon."
* **Paragraph 13:** "At SLiQWriterS, we provide real, lasting, sustainable results with our services... From Marketing to Copywriting, LinkedIn growth and mentorship."
* **Closing Statement:** "Whatever your business needs, we're ready to make you the star of your industry. Once again, welcome to SLiQWriterS Agency. You're in good hands."

### 4.3 Action Bar & Embedded Components
* **Buttons:** `Book a Free Discovery Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`) | `Chat with us` (`https://wa.me/2348133720549`)
* **Included Modular Sections:**
  * `includes/more-about-us.php`
  * `includes/why-choose-us.php`
  * `includes/testimonials.php`
  * `includes/footer.php`

---

## 5. Founder Profile: Deh Chukwuka (`founder.php`)

### 5.1 Page Header & Breadcrumb
* **Breadcrumb Title:** `The Founder`
* **Navigation Path:** `Home` -> `Founder`

### 5.2 Profile Card Header & Social Links
* **Full Name & Pseudonym:** `Deh Chukwuka (SLiQ)`
* **Professional Title:** `Writer, Coach & Content Creator`
* **Direct Phone:** `(+234)-813-372-0549`
* **Social Profiles:**
  * Facebook: `https://www.facebook.com/iamokemmanuel`
  * Twitter / X: `https://x.com/TheOKEmmanuel`
  * LinkedIn: `https://www.linkedin.com/in/olawuni-emmanuel-kayode`

### 5.3 Comprehensive Biography
* **Section Heading:** `Biography`
* **Paragraph 1:** "Meet Deh Chukwuka (SLiQ), the founder of SLiQWriterS. With a passion for writing and helping boost engagement and sales for clients, Deh became a freelance writer back in 2011. His exploits in the freelance industry spans across all major freelancing platform where he has attained the status of a top ranking seller in all."
* **Paragraph 2:** "A staunch researcher, and meticulous copywriter, Deh Chukwuka has proven himself to be one of Africa's best copywriters, having written for numerous brands. He has generated over $1 million in sales for clients through his unique copywriting skill."
* **Paragraph 3:** "Deh Chukwuka founded SLiQWriterS in 2017, with the intention of serving both sides of the writing industry:"
  * *For Clients:* "They would have access to unique written pieces; blogs, articles, ad copies, email sequences, etc. They would be given the opportunity to access highly vetted in-demand writers across all genres."
  * *For Writers:* "They would be given the opportunity to offer specialized writing in genres they thrive best in."
* **Paragraph 4:** "With over 20 professional writers across all genres, Deh Chukwuka makes sure every writer is on top of their game at all times."
* **Paragraph 5:** "Due to his unique copywriting skills and highly successful freelancing career, Deh Chukwuka offers coaching services to interested newbies and intermediates looking to scale."
* **Personal Touch:** "If he's not writing or coaching, Deh Chukwuka spends his hours watching The Simpsons. You can find him on LinkedIn (www.linkedin.com/in/dehchukwuka) with his clan talking about coconuts and peanuts."

### 5.4 Team & Career Accomplishment Counters
* **Metric 1:** `2.2k+` Project Completed
* **Metric 2:** `20k+` Happy Clients
* **Metric 3:** `98%` Delivery Rate

### 5.5 In-Page CTA Banner
* **Subtitle:** "We are 24/7 here to answer your questions"
* **Headline:** "You need our help?"
* **Button:** `Get In Touch` (`contact`)

---

## 6. Services Overview (`services.php` & Legacy `service-old.php`)

### 6.1 Services Hub (`services.php`)
* **Page Title:** `Services`
* **Breadcrumb Title:** `Services`
* **Section Eyebrow:** `How we can help you`
* **Section Title:** `Our Services`
* **Section Introduction:** "We focus on driving results, enhancing engagement, and ensuring sustainable growth through each service."

#### Active Service Cards:
1. **Marketing:**
   * *Card Title:* `Marketing` (`marketing`)
   * *Description:* "Develop targeted marketing strategies that drive results. We help businesses connect with the right audience and increase conversions."
   * *Button:* `Read More`
2. **Copywriting:**
   * *Card Title:* `Copywriting` (`copywriting`)
   * *Description:* "Engage your audience with compelling content that speaks to their needs. We create persuasive copy that converts, from blogs to product descriptions."
   * *Button:* `Read More`
3. **LinkedIn Growth:**
   * *Card Title:* `LinkedIn Growth` (`linkedin-growth`)
   * *Description:* "Leverage LinkedIn to expand your professional network and generate valuable leads. We help you maximize your LinkedIn presence for business growth."
   * *Button:* `Read More`
4. **Academy:**
   * *Card Title:* `Academy` (`https://sliqwritersacademy.carrd.co`)
   * *Description:* "Level up your copywriting and marketing skills with our courses, masterclasses, and hands-on training for individuals and teams."
   * *Button:* `Explore Academy`

---

### 6.2 Legacy Service Copy (`service-old.php`)
* **Main Title:** `Content Writing`
* **Lead Paragraph:** "Blogging and writing unique articles is very important to brands all over the world. With the right articles, you'll not only be able to share your industry expertise and skillset to your audience, you'll also be able to rank very high on Google (think SEO)."
* **Value Proposition:** "SLiQWriterS offers you the opportunity to get unique engaging articles and blog posts at very affordable prices."
* **Checklist — What Our Content Does For You:**
  * Engage your audience
  * Display your industrial expertise
  * Rank your brand higher on Google (SEO)
  * Boost your brand's visibility and create awareness
  * Generate qualified inbound leads

---

## 7. Flagship Service: Growthwright™ (`growthwright.php`)
**Source Documentation:** `growthwright.php`, `docs/GROWTHWRIGHT.md`

### 7.1 SEO & Meta Information
* **Page Title:** `Growthwright™ by SLiQWriterS — The Content & Marketing System for SaaS and B2B Companies`
* **Meta Description:** `Growthwright™ is a done-for-you content and marketing system built around your product, your buyer, and your funnel.`
* **Canonical URL:** `https://sliqwriters.com/growthwright`

### 7.2 Hero Section
* **Eyebrow:** `Introducing Growthwright™...`
* **Audience Qualifier:** `For SaaS and B2B teams with a good product and a marketing problem.`
* **Main Headline:** "Your brand deserves more than just 'content'. It deserves a system that turns strangers into loyal customers."
* **Subheadline:** "Growthwright™ is a done-for-you content and marketing system built around your product, your buyer, and your funnel. We work with growth-minded businesses to build the strategy, messaging, content, acquisition and conversion infrastructure required to turn your marketing into a connected growth system."
* **Primary CTA:** `Book Your Free Strategy Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Microcopy Below Button:** "Limited to 3 clients per quarter. No commitment required on the call."
* **Secondary Action:** `Explore Case Studies ↗` (`#case-studies`)

### 7.3 Social Proof Strip
* **Proof Statement:** "Trusted by 510+ brands across the UK, the US, Europe and Africa. Over $3,000,000 in client revenue generated. 9 years in the game."

### 7.4 The Core Marketing Problem
* **Section Eyebrow:** `THE PROBLEM`
* **Headline:** "You know your content & marketing isn't working. You simply don't know what to fix and how to turn it into a functioning system."
* **Body Text:**
  * "Most SaaS and B2B companies treat marketing like an activity (something they have to do every now and then)."
  * "So they post today. Run ads tomorrow. Hope a demo books on Friday. And disappear for 2 weeks."
  * "The result? Content that doesn't compound. A pipeline that depends on founder hustle instead of a working system. A product good enough to win but completely undersold by marketing that isn't."
  * "If you genuinely want to grow your business right now, you sure heck don't need more marketers (whether you have a marketing team or not)..."
  * "What you need is a system that connects strategy, messaging, content and distribution into one machine that generates steady business recognition and demand on its own."
  * "That system is Growthwright™."

### 7.5 Comparison Matrix: Traditional Marketing vs. Growthwright™
| Traditional Content & Agency Retainers | Growthwright™ Marketing System |
| :--- | :--- |
| **Activity-based:** Paid to post 3x a week, regardless of outcome | **System-based:** Built around a documented strategy mapped to your funnel |
| **Content without context:** Generic posts that sound like everyone else | **Voice & positioning first:** Unmistakable point of view that separates you |
| **Random acts of marketing:** Blog posts disconnected from emails disconnected from ads | **Integrated pipeline:** Every asset points toward conversion and revenue |
| **Vanity metrics:** Reports full of impressions, likes, and reach | **Business outcomes:** Pipeline, qualified inbound leads, and booked demos |
| **Dependency:** Stop paying the retainer, marketing disappears completely | **Installed engine:** A permanent, repeatable system your team can own |

### 7.6 The 90-Day System Installation: Three Phases
* **Phase 1: Strategy & Messaging (Month 1)**
  * *Theme:* "Before we build anything, we understand everything."
  * *Core Components:*
    1. **Full Marketing Audit:** Diagnosing exactly where growth is leaking.
    2. **Deep Buyer Research:** Your real buyer, their triggers, their objections, their language.
    3. **Brand Messaging:** The words that move a technical or business buyer to act.
    4. **Positioning:** Your place in the market, and why you're the only logical choice.
    5. **Content Strategy:** Pillars, angles, and content architecture mapped to your funnel.
    6. **Funnel Mapping:** How content moves a stranger to a booked demo to a closed deal.
  * *Deliverable:* **Your Marketing Clarity Report + Brand Messaging Bible**
* **Phase 2: Content Engine (Month 2)**
  * *Theme:* "Now we build the engine. Every asset, every system, every piece of copy, every single resource/material necessary to make your business impossible to ignore."
  * *Core Components:*
    1. **Content Creation:** Platform-specific content, written and ready to publish.
    2. **Distribution Strategy:** Where it goes, how it compounds over time.
    3. **Lead Magnet:** A high-value asset that turns readers into pipeline on autopilot.
    4. **Email Sequence:** A nurture flow that builds trust and sells without pressure.
    5. **Landing Page Copy:** Conversion-focused copy for your primary offer.
    6. **Authority Content:** Long-form content that makes you the reference point in your category.
  * *Deliverable:* **90-Day Content Strategy, Content Calendar + All Core Copy Assets**
* **Phase 3: Demand Generation (Month 3)**
  * *Theme:* "Now we drive revenue. This is what the whole system was built for."
  * *Core Components:*
    1. **Demand Generation Campaign:** A complete launch campaign around your primary offer.
    2. **Launch Support:** We're in the trenches with you during execution.
    3. **Performance Review:** What worked, what didn't, and exactly why.
    4. **Optimisation:** Refined based on real market feedback.
    5. **Team Handover / Transition Plan:** How to run the system with your team, or transition to our management retainer.
  * *Deliverable:* **Live Campaign, Performance Data + Post-90-Day Growth Roadmap**

### 7.7 What's Included: The Full Deliverable Inventory
* Marketing Audit & Competitor Review
* Buyer Persona & Audience Deep-Dive
* Complete Brand Messaging & Positioning Framework
* Funnel Architecture & Conversion Strategy
* 90-Day Content Strategy & Editorial Calendar
* 1 High-Converting Lead Magnet (concept to copy)
* 5-to-7-Part Email Nurture Sequence
* Core Offer Landing Page Copy (redesign or net new)
* 24 Ready-to-Publish Short-Form Content Pieces (LinkedIn / X)
* 3 Authority Long-Form Content Assets
* 1 Coordinated Demand Generation Campaign
* Weekly Strategy Calls & Async Slack/Loom Support
* 90-Day Performance Review & Handoff Playbook

### 7.8 Qualification Criteria: Who This Is For vs. Who It Is Not For
#### Who This Is For:
* You run a B2B or SaaS company doing consistent revenue with a proven product (service) and a complex or technical offer.
* Your marketing feels disconnected from your product (you have good demos but forgettable content).
* You're a founder or CEO (business owner) who knows content matters but has never had real strategy behind it.
* You're repeatedly spending on marketing with no clear line to how your clients are coming and you're tired of guessing.
* You want a marketing function that runs without you being the one holding it together.
* You have an internal marketing team that needs strategic direction and execution support.
* You are preparing for a launch, expansion or growth phase.

#### Who This Is NOT For:
* You don't have a clear product or offer yet.
* You're looking for the cheapest option in the market.
* You want to micromanage the creative process.
* You're not ready to move in 48 hours on feedback and approvals.
* You expect results without doing the foundational work with us in Month 1.

### 7.9 Founder Section: Deh & Growthwright
* **Headline:** "Built by someone who's been in the trenches since 2013."
* **Lead Copy:** "My name is Deh Chukwuka. I'm a growth, marketing strategist, and the founder of SLiQWriterS."
* **Body:** "I've spent 13 years writing copy and building marketing systems for over 500 brands across Nigeria, the UK, the US, and beyond... generating $3M+ in measurable client revenue, not from impressions, but from content built to convert. Growthwright™ is the most complete expression of everything I've learned in 13 years, packaged into a system any serious SaaS or B2B business can install and own."
* **Crosslink to Voicewright:** "Building your personal brand instead of your company's pipeline? That's Voicewright — our done-for-you LinkedIn ghostwriting and authority system for founders. Many of our clients run both: Growthwright™ for the business, Voicewright for the founder behind it."
* **Button:** `Book a Free Strategy Call with Deh ↗`

### 7.10 Growthwright™ Frequently Asked Questions
1. **How is this different from hiring a content agency on a monthly retainer?**  
   *Answer:* "A retainer keeps content flowing. Growthwright™ builds the system that makes content work. Most agencies skip the strategy, the messaging, and the funnel work... then wonder why content isn't converting. We start there. Everything else comes after."
2. **Do I need an in-house marketing team already?**  
   *Answer:* "No. Growthwright™ is designed to be delivered as a complete, ready-to-run system. If you have a team, we build something they can take over. If it's just you, we build something lean and executable. It's all custom-made."
3. **What do you need from me during the 90 days?**  
   *Answer:* "Your time, your honesty, mostly and your speed. We send a comprehensive intake form before we start, and we need 48-hour turnarounds on reviews and approvals. The faster you move, the faster the system gets built."
4. **What if my product is technical or niche?**  
   *Answer:* "Even better. Technical and niche products are where clear messaging and strong positioning create the biggest competitive advantage. Personally, that's what we love most! We've worked across SaaS, fintech, and professional services... the framework holds regardless of complexity."
5. **Can I upgrade to the monthly retainer after the 90 days?**  
   *Answer:* "Yes... many clients do. Growthwright™ Management keeps the system running and growing. We'll discuss it in Month 3, once you can see exactly what's been built."
6. **Is this available globally?**  
   *Answer:* "Yes. We work with founders and teams in the US, UK, EU, and beyond, run remotely via Notion, Google Workspace, Loom, and scheduled calls."
7. **What if I've never invested in marketing at this level before?**  
   *Answer:* "Then this is the right place to start neighbour. You're not buying content, you're buying a system. One well-built marketing engine outperforms years of inconsistent posting. The ROI compounds for years."

### 7.11 Scarcity & Final Strategy Call Close
* **Headline:** "3 spots. Every quarter. That's it."
* **Body:** "Growthwright™ is not a volume product. We limit intake to 3 clients per quarter so every engagement gets the full weight of our strategy and execution. If this resonates, don't wait... the next quarter fills faster than you'd expect."
* **Primary Button:** `Book Your Free Strategy Call ↗` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Note:** "(No commitment. 30 minutes. We'll tell you honestly if this is the right fit.)"
* **Secondary Link:** `Send a DM on LinkedIn ↗` (`https://www.linkedin.com/in/dehchukwuka/`)
* **Microcopy:** "(Message Deh directly with the word GROWTH and let's start the conversation.) Or email us directly: hello@sliqwriters.com"

---

## 8. Flagship Service: Voicewright™ (`voicewright.php`)
**Source Documentation:** `voicewright.php`, `includes/voicewright-*`

### 8.1 SEO & Meta Information
* **Page Title:** `Voicewright by SLiQWriterS | LinkedIn Ghostwriting for Founders & CEOs`
* **Meta Description:** `Voicewright is how founders turn what they know into a reputation people trust. We extract your thinking, sharpen your voice, and show up on LinkedIn for you... every single week.`
* **Canonical URL:** `https://sliqwriters.com/voicewright`

### 8.2 Hero Section & Core Hook
* **Eyebrow:** `Introducing Voicewright™...`
* **Audience Identifier:** `For founders, CEOs, and Executives ready to own their industry.`
* **Main Headline:** "You built the business. Let's make sure the market knows who built it."
* **Subheadline:** "Voicewright™ is the done-for-you LinkedIn ghostwriting and personal brand authority system for founders and CEOs who refuse to sound like everyone else. We extract your thinking, sharpen your voice, and show up on LinkedIn for you... every single week."
* **Primary CTA:** `Book Your Free Discovery Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* **Microcopy:** "30 minutes. No pitch. Just a conversation about where your voice needs to go."
* **Social Proof Strip:** "510+ brands served across the US, UK, and Africa. $3M+ in client revenue generated. 32,000+ LinkedIn community built from scratch."

### 8.3 The Problem: The Invisible Founder
* **Section Eyebrow:** `THE REALITY`
* **Headline:** "Your competitors aren't smarter than you. They're just louder where it matters."
* **Body Copy:**
  * "You run a real business. You have real clients, real results, and opinions formed by years of solving problems."
  * "Yet on LinkedIn — where your next investor, your biggest client, and your best hires spend their mornings — you're practically invisible."
  * "Or worse: you're posting generic platitudes that make you sound like every 22-year-old 'growth hacker' with a ChatGPT account."
  * "The cost of that silence isn't vanity. It's revenue. When decision-makers look for someone in your industry, they hire the person they already feel they know and trust."
  * "Voicewright™ closes that gap permanently."

### 8.4 The 5-Move Framework (`includes/voicewright-timeline.php`)
* **Move 01: Extract**
  * *Headline:* "Extract"
  * *Body:* "Before we write a single word, we get everything out of your head that belongs in front of your audience. This includes your story, your opinions, your wins, your failures, those golden nuggets you share in meetings that you've never said publicly. A structured 60–90 minute session brings this to light."
* **Move 02: Position**
  * *Headline:* "Position"
  * *Body:* "Knowing everything about you isn't the same as knowing what you should be known for. We take what we extracted and shape it into a clear point of view: the specific ground you're going to own in your industry, so every post is building the same reputation instead of twelve different ones."
* **Move 03: Develop the Voice**
  * *Headline:* "Develop the Voice"
  * *Body:* "This is where it stops sounding like 'content' and starts sounding like you. We map your writing DNA (sentence rhythm, vocabulary, the way you make an argument) so what lands in your inbox reads like you on your sharpest day, not a ghostwriter doing an impression of you."
* **Move 04: Create**
  * *Headline:* "Create"
  * *Body:* "Every week (or once a month), your content arrives written, formatted, and ready. Every post follows the same structure: a hook that earns attention in the first line + a body built on experience + story + insight + point of view, and a close that moves people to act. Nothing generic makes it through this!"
* **Move 05: Distribute**
  * *Headline:* "Distribute"
  * *Body:* "Content that never gets seen doesn't build a reputation. We build the posting rhythm and calendar around your actual goals (meaning no vanity metrics entertained). This is done so your presence compounds instead of just accumulating. Every month, we review what resonated, what drove real conversations + leads, and what to double down on next."

### 8.5 Client Testimonials & Social Proof (`includes/voicewright-testimonials.php`)
* **Quote 1 (Denie Geertzen — CEO, TAT Agency, Netherlands):**  
  *"Before SLiQWriterS, my LinkedIn was dead quiet. I'd post once a month if I was lucky, usually something boring about Google Ads updates. In 90 days with SLiQWriterS, we added 9,000 followers, our inbound inquiries went from zero to six a week, and I was ranked among the top voices in my industry. The best part? It sounds completely like me."*
* **Quote 2 (Christina Voll — Founder, Rise Remotely, Remote Work & Marketing):**  
  *"I'm a marketer myself, so my bar for copy is ridiculously high. SLiQWriterS cleared it with room to spare. They gave my LinkedIn an unmistakable point of view. Within two months, I had signed three new clients directly from my content, and qualified leads were reaching out every single week without me doing any outbound messaging."*
* **Quote 3 (Majrooh Abubakar — CEO, RemoteGrowthLab, Australia):**  
  *"In fintech, credibility is everything. Nobody trusts a financial brand with an executive who can't articulate a clear perspective. SLiQWriterS took my scattered thoughts and turned them into authoritative, compelling posts. In 60 days, our profile views jumped 70%, and I received an invitation to speak at an international finance conference."*
* **Quote 4 (Anonymous — CEO, Professional Services Firm, United Kingdom):**  
  *"I've tried writing my own LinkedIn content. I've tried other ghostwriters. Nothing compared to working with SLiQWriterS. They understand business, not just writing. They understand what a post needs to do at every point in time. My LinkedIn is now one of my top three sources of inbound leads."*
* **Quote 5 (CEO, Real Estate Investment Firm, Nigeria):**  
  *"What I appreciated most was that they never let my content become generic. Every time I received a post to review I did so with a smile because it had my opinions and my experiences. This is our 2nd year working together and I won't change a damn thing."*
* **Quote 6 (Founder, SaaS Company, USA):**  
  *"Deh is the only ghostwriter I've worked with who pushes back. He'll tell you when an idea is weak, when your positioning is off, or when a post is meaningless. Believe it or not, I've learned a thing or two from how he handles his team and I apply it directly to my business."*
* **Quote 7 (CEO, B2B Agency, Canada):**  
  *"The ROI on LinkedIn ghostwriting with SLiQWriterS is not even close. One client from LinkedIn paid for the entire year's retainer. Everything else is pure return. We still don't know how they pulled such a client towards us but we are grateful."*

### 8.6 Pricing Philosophy & Engagement Terms
* **Note on Pricing:**  
  "We don't publish fixed rates because we don't offer fixed packages. Every client gets a strategy built around their specific goals, industry, and market. The investment reflects the level of thinking, strategy, and execution that goes into every engagement. Book a call and we'll be direct about what it costs and why it's worth it."
* **Minimum Engagement:**  
  "3 months (90 days). LinkedIn compounds. Real results don't show up overnight. We won't take on clients who want to test it for 30 days (yes, you'll get amazing results in 30 days but that's not enough time for you to see what REAL results look like)."

### 8.7 Founder Authority Section: Deh Chukwuka
* **Eyebrow:** `ABOUT DEH & SLiQWriterS`
* **Headline:** "Not a content mill. Not a junior writer. A 13-year veteran who's done this at the highest level."
* **Lead:** "A 13-year veteran who's done this at the highest level."
* **Body:** "My name is Deh Chukwuka. I'm growth & marketing strategist and founder of SLiQWriterS... a results-first marketing and business growth agency serving founders and businesses across Africa, the UK, the US, and Europe. I've been writing copy and building content systems since 2013. I've worked with 500+ brands, generated $3M+ in measurable client revenue, and built a LinkedIn following of 32,000+ people by doing exactly what I do for my clients... showing up consistently with content that actually means something. I've lived on LinkedIn since 2020 (even though I joined 2014). When you work with SLiQWriterS for LinkedIn ghostwriting, you're not getting a content agency. You're getting a marketing brain that happens to write in your voice."
* **Crosslink to Growthwright:** "More interested in building marketing systems for your business/company? That's Growthwright — our done-for-you content & marketing system for businesses. Many of our clients run both: Growthwright for the business, Voicewright™ for the founder behind it."
* **CTA Button:** `Book a Free Discovery Call with Deh`

### 8.8 Voicewright™ Frequently Asked Questions
1. **Will it actually sound like me?**  
   *Answer:* "Yes and this is the one thing we take most seriously. The discovery session we run at onboarding is specifically designed to extract your voice: the way you phrase things, the opinions you hold, the stories you tell, the language you use. We capture all of it. Clients regularly tell us their audience had no idea someone else was writing their content."
2. **How involved do I need to be?**  
   *Answer:* "Minimally but meaningfully. We handle all the writing, strategy, and execution. What we need from you is a thorough onboarding discovery session, weekly approval of your content batch (usually 20–30 minutes), and occasional sharing of ideas, opinions, or experiences we can build posts around. The more you give us, the richer the content."
3. **What if I don't like a post?**  
   *Answer:* "Every post comes with two rounds of revisions. If something doesn't feel right: the voice, the angle, the framing we fix it. Over time, the back-and-forth reduces as we get deeper into your voice and thinking."
4. **How long before I see results?**  
   *Answer:* "Most clients start seeing increased profile views, connection requests from relevant people, and early engagement within the first 30 days. Meaningful business results: inbound leads, speaking invitations, partnership conversations typically emerge between months 2 and 4, as the content compounds and your audience grows. This is why we require a 3-month minimum."
5. **Do you write for any industry?**  
   *Answer:* "Yes, though we specialize in four industries: Tech and SaaS, Financial Services and Fintech, Professional Services, and Real Estate. These are the sectors we know deeply and depth of industry knowledge is what separates great ghostwriting from generic content."
6. **Can I post the content myself or do you handle scheduling/posting?**  
   *Answer:* "Yes, you can post yourself. And yes, we can post for you if you're more comfortable with that. We handle every single thing."
7. **What if I want to add more services later, like Growthwright™ for my business?**  
   *Answer:* "Many of our ghostwriting clients eventually want the full content marketing system built behind their LinkedIn. We make that transition seamless. Your ghostwriting strategy and voice work feed directly into Growthwright. So nothing is wasted and everything compounds."

### 8.9 Final Urgency CTA
* **Headline:** "Your competitors are already on LinkedIn."
* **Subhead:** "The question is no longer whether you should show up. It's if you're showing up better and stronger."
* **Body:** "Every week you're not showing up on LinkedIn is a week your ideal clients are finding someone else. Reading someone else's content and building trust with someone else's brand. That stops today. Book a free 30-minute discovery call. We'll talk about your business, your LinkedIn goals, and whether this is the right fit. No pressure whatsoever. Just a direct conversation with someone who's spent 13 years building brands that are impossible to ignore."
* **Buttons:** `Book Your Free Discovery Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`) | `Send a DM on LinkedIn` (`https://www.linkedin.com/in/dehchukwuka/`)
* **Microcopy:** "(Message Deh with the word LINKEDIN and let's start talking.) Or reach us directly: hello@sliqwriters.com"

---

## 9. Copywriting Service Page (`copywriting.php`)
**Source Documentation:** `copywriting.php`, `docs/services-updates/copywriting-update.md`

### 9.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Nigeria's Leading Copywriting & Content Marketing Agency`
* **Navigation Path:** `Home` -> `Copywriting`

### 9.2 Main Headline & Core Narrative
* **H1 Title:** "Grab Attention. Retain Attention. Sell Like Crazy!!!"
* **Body Text:**
  * "Every business communicates with its customers. Through its website, its emails, its ads, its content."
  * "The quality of that communication; how clear it is, how relevant it feels, how much trust it builds... directly determines how many people choose you over your competitor."
  * "**Simply put, copywriting is the heart and soul of your business.**"
  * "With over **12 years in copywriting**, **SLiQWriterS Agency** writes the words that make businesses perform."
  * "We write **website copy** that turns visitors into inquiries. **Email sequences** that turn subscribers into buyers. **Ad copy** that stops the scroll and starts the sale."
  * "Content that builds authority so gradually and thoroughly that when your ideal client is ready... your name is already in their head."
  * "**This has nothing to do with beautiful writing, neighbor.** It is about **strategic communication that produces measurable business outcomes.**"
  * "The two often overlap. But **outcomes always come first.**"

### 9.3 Deliverables Accordion: What's Included
1. **Website Copywriting:**
   * "If your website doesn't work, you're losing **60% of your business daily.** We write homepage, about, services, and landing pages that convert first-time visitors into qualified inquiries."
2. **Email Copywriting:**
   * "Welcome sequences, promotional campaigns, nurture flows, and newsletters that get opened, read, and acted on by your customers."
3. **Sales Pages & Landing Pages:**
   * "We will help you craft high-converting single pages for your product launches, services, events, and lead generation. **Never will your customers be confused about your offers anymore.**"
4. **Ad Copywriting:**
   * "Facebook, Instagram, Google, and LinkedIn ad copy that stops the right person at the right moment. **You'll never regret running ads ever again.**"
5. **Brand Messaging & Voice Guide:**
   * "Think core positioning, tagline, key messages, and tone documentation so your brand sounds consistent everywhere."
6. **Content Strategy & Blog Writing:**
   * "You want to be the number one name in your industry? We will provide you with **SEO-optimized articles** and long-form content that builds authority and generates organic leads over time."
7. **Monthly Newsletter:**
   * "Consistent email communication that keeps your audience warm, your brand top-of-mind, and your list converting."

### 9.4 CTAs
* `Book Free Copywriting Consultation` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* `Chat with us` (`https://wa.me/2348133720549`)

---

## 10. LinkedIn Growth Service Page (`linkedin-growth.php`)
**Source Documentation:** `linkedin-growth.php`, `docs/services-updates/linkedin-update.md`

### 10.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Nigeria's Leading LinkedIn Growth & Personal Branding Agency`
* **Navigation Path:** `Home` -> `LinkedIn Growth`

### 10.2 Main Headline & Core Narrative
* **H1 Title:** "Turn Your LinkedIn into a Money-Making, Lead-Generating Platform within 90 Days"
* **Body Text:**
  * "The world has officially gone into the relationship-driven business culture, people don't just buy from companies anymore."
  * "They buy from people they trust."
  * "And LinkedIn is where that trust is built at scale by... Founders (business owners), executives, and brands that understand visibility is not vanity. In any shape or form."
  * "**Visibility is strategy and trust.**"
  * "Having personally built a **30,000-strong LinkedIn community** as well as over **500,000 communities for our clients**..."
  * "We know what the algorithm rewards, what the professional audience responds to, and what it takes to go from invisible presence to recognized authority *(all without manufactured content or performative posting)*."
  * "You already know that a founder with a strong LinkedIn presence is doing sales and marketing work for their business every time they post something."
  * "At **SLiQWriterS Agency**, We build that presence systematically, so the right people find you, trust you, and reach out."
  * "If your LinkedIn is stagnant *(or non-existent)*:"
    * – **No leads**
    * – **No clients/sales**
    * – **No authority**
  * "**We should talk.**"

### 10.3 Deliverables Accordion: What's Included
1. **Profile Optimization:**
   * "We will help you completely rebuild your headline, about section, featured section, and experience... So your profile converts visitors into conversations."
2. **Personal Brand Strategy:**
   * "Think niche definition, content pillars, audience targeting, and a documented strategy that makes every post you make intentional and cumulative. Leading to better sales, leads and authority."
3. **Content Creation & Ghostwriting:**
   * "You will get posts written in your voice, from your experience, reflecting your genuine perspective every single time. All to help you build authority and stack opportunities as you please. *(Zero AI use for writing these)*."
4. **LinkedIn Page Management (Growth & Engagement Strategy):**
   * "We will professionally manage your profile with focus on audience growth, engagement, and networking strategies that build the right connections for you."
5. **Company Page Strategy:**
   * "Building your brand's LinkedIn company page into an active, credible presence that supports your personal brand and attracts inbound interest."
6. **Monthly Performance Review:**
   * "Growth metrics, content performance analysis, and strategic recommendations for the month ahead."

### 10.4 CTAs
* `Book Free LinkedIn Consultation` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* `Chat with us` (`https://wa.me/2348133720549`)

---

## 11. Content Marketing Service Page (`marketing.php`)
**Source Documentation:** `marketing.php`, `docs/services-updates/marketing-update.md`

### 11.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Nigeria's Leading Marketing Agency`
* **Navigation Path:** `Home` -> `Marketing`

### 11.2 Main Headline & Core Narrative
* **H1 Title:** "Be In The Faces Of Your Ideal Audience Everyday. Make More Sales."
* **Body Text:**
  * "Most brands create content without a strategy."
  * "They decide what to publish based on what feels relevant, chase likes without understanding what the likes are supposed to produce, and conclude after six months of activity that social media marketing doesn't work."
  * "You might offer the best product or service in the world and still not make any money. Why?"
  * "**No marketing. Poor marketing. Weak marketing.**"
  * "**Marketing is the heart of your business.** Without it, no one will know you. No one will buy anything you sell. **Period.**"
  * "Now the major difference between businesses making millions monthly and those begging for sales?"
  * "## **STRATEGY.**"
  * "Knowing who you're speaking to, what they need to feel before they buy from you, and how to build the content that creates that feeling consistently."
  * "At **SLiQWriterS Agency**, we build marketing systems that move your business to be the go-to option in your industry."
  * "Think about what this means for your business: Anytime someone needs a service/product... The first name they think of is you, instead of 50+ others offering what you offer. **How about that?**"

### 11.3 Deliverables Accordion: What's Included
1. **Social Media Strategy:**
   * "We will help you with audience definition, content pillars, platform selection, and a calendar built around business outcomes not arbitrary posting schedules."
2. **Content Creation & Copywriting:**
   * "SLiQWriterS Agency will provide you with on-brand captions, carousel copy, video scripts, and stories... All written to engage, educate, and convert your specific audience."
3. **Community Management:**
   * "Timely, on-brand responses to comments and DMs. Building genuine community rather than broadcasting into silence."
4. **Paid Social Management:**
   * "Whether you want Facebook, Instagram, and LinkedIn ad campaigns we will help you develop the strategy, targeting, copy, creative direction, and ongoing optimization. *(Ad spend separate.)*"
5. **Influencer & Creator Partnerships:**
   * "Strategic identification, vetting, and management of creator collaborations that reach your target audience authentically."
6. **Monthly Reporting:**
   * "Every month you'll receive performance reviews that connect your marketing activity to actual business outcomes. **We are not all about vanity metrics.**"

### 11.4 CTAs
* `Book Free Marketing Consultation` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* `Chat with us` (`https://wa.me/2348133720549`)

---

## 12. Elite Personal Branding Page (`branding.php`)

### 12.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Elite Branding Agency`
* **Navigation Path:** `Home` -> `Branding`

### 12.2 Main Headline & Philosophy
* **H1 Title:** "Stand Out, Attract the Right People. Be More Visible!"
* **Opening Hook:** "The first thing you notice about a brand you're just seeing for the first time is its branding. It's what makes you trust them and immediately want to do business with them."
* **Core Principle:** "Think of it this way, branding is the soul of your business. Without proper branding, no one will recognize your business and no one will trust your business. That is definitely not an outcome you want, is it?"
* **Agency Promise:** "At SLiQWriterS, we handle all your business branding, making sure you stand out, you're trusted, and you're wanted (for good, obviously). No matter what your branding needs are, SLiQWriterS is determined to help you succeed!"

### 12.3 Core Branding Pillars
1. **Strategy:**
   * "Some people think branding is all about logos and colors, are you one of them? Like I said, branding is the soul of your business. It includes your brand messaging, storytelling, brand engagement, awareness... At SLiQWriterS, we take extra care and time to understand everything about your brand and its story. We use this to create comprehensive resources and information that makes your business memorable."
2. **Brand Identity Designs:**
   * "Argh! Yes... The logos, flyers, brochures and other collaterals. Even though they are often overlooked, these remain a key aspect of your business. As a new business, SLiQWriterS will help you create unique logos, brochures and necessary designs to cement your identity in the hearts of your audience."
3. **Web Development:**
   * "No brand is complete without a functional website. We are ready to build and design your website from scratch or revamp the one you have already to match your latest branding goals."

### 12.4 What to Expect
* **Header:** "What to Expect — Memorable Branding That Keeps Your Audience Hooked, Happy, Hungry for More"
* **1. Unique Branding:** "Our brand identity designs are unique at all times. You can rest assured, it's yours forever."
* **2. Loyal Hungry Audience:** "Nothing beats an audience (customer base) that trusts you completely. We will ensure your brand messaging & engagement is consistent & of the highest quality."
* **3. More Leads:** "You will constantly get hot leads (people ready to do business with you immediately)."
* **4. A State-of-the-Art Website:** "If you requested web development or web design, you can rest assured what you'll get is top-notch. We always go for fast, user-friendly, easy-to-convert websites."
* **5. Free Business Consultation:** "If you're unsure about a few things concerning your brand, we can help put you on course to greatness. All you need is to gain clarity on a call with Mr. Deh Chukwuka."

### 12.5 CTAs
* `Book Free Call` (`https://calendly.com/dehchukwuka/30-mins-chat-with-deh`)
* `Chat with us` (`https://wa.me/2348133720549`)

---

## 13. Coaching & Mentorship Page (`mentorship.php`)

### 13.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Direct Coaching/Mentorship with Deh Chukwuka`
* **Navigation Path:** `Home` -> `Coaching/Mentorship`

### 13.2 Main Headline & Offer Breakdown
* **H1 Title:** "Become Better Skilled. Get More Clients. 10× Your Earnings."
* **Program 1: Mini Coaching Program**
  * *Headline:* `Mini Coaching Program`
  * *Body:* "Looking for a quick short-term coaching opportunity? The best 7 days of your career is about to start."
  * *CTA Link:* `Learn More` (`https://www.coachli.co/dehchukwuka/products/details?slug=mini-coaching-mentorship&productId=156`)
* **Program 2: 1-on-1 Coaching with Deh Chukwuka**
  * *Headline:* `1-1 Coaching`
  * *Body:* "200+ Copywriters, Business Owners & Freelancers trained to scale their business, land international clients, and build lucrative freelancing operations."
  * *Direct Mentorship Link:* `https://coachli.co/dehchukwuka`

---

## 14. Case Studies Library & Detail Pages (`case-studies.php` & `case-study.php`)

### 14.1 Case Studies Library Hub (`case-studies.php`)
* **Meta Title:** `Case Studies | SLiQWriterS`
* **Meta Description:** `Explore client results by service, industry and relevance. Discover the work behind stronger brands, trusted voices and business growth.`
* **Hero Eyebrow:** `The work. The impact.`
* **Hero Headline:** "Real businesses. Meaningful results."
* **Hero Subhead:** "A closer look at the brands and people we've helped become impossible to ignore."
* **Filter Labels:** `All industries`, `All services`, `All topics`
* **Filter Actions:** `Filter stories →`, `Reset`
* **Empty State Copy:** "No stories match these filters yet. Try another combination or explore the full library." -> `View all case studies →`

### 14.2 Case Study 1: Denie Geertzen — TAT Agency (Voicewright)
* **Slug / Route:** `case-study?slug=denie-tat-agency-linkedin`
* **Title:** "From invisible on LinkedIn to six qualified leads a week."
* **Client & Role:** Denie Geertzen (CEO) · TAT Agency
* **Service Category:** Voicewright · B2B Performance Marketing
* **Geography & Timeframe:** Netherlands · 90 days
* **Summary Excerpt:** An established Google Ads agency, but a LinkedIn presence that undersold its expertise. In 3 months: 9K new followers, 6 qualified leads a week and a Top 100 industry ranking.

#### Key Performance Metrics:
**9K** (new followers in 3 months) | **6 / week** (qualified inbound leads) | **+67%** (average engagement per post) | **Top 100** (Google Ads industry listing) | **1,200+** (weekly search views)

#### 1. The Situation & Problem (The Starting Point)
The situation

Denie ran one of the sharpest Google Ads agencies in his space. His client results were strong, really strong. He managed accounts worth millions of euros.

With such a capable team and solid offer, his LinkedIn said almost none of these things. Posts went up occasionally. Engagement was minimal.

The founders and marketing directors who needed exactly what Denie offered were scrolling right past him. It wasn&#039;t because they wouldn&#039;t have hired him. His content never gave them a reason to stop.

The problem

This wasn&#039;t a skills problem or a product problem. Denie had a visibility problem, even with 11K followers on LinkedIn already.

His expertise wasn&#039;t translating into content that built authority and reached the right people. His feed looked like every other agency on LinkedIn: marketing tips, service announcements and casual posts that just didn&#039;t hit.

His competitors were winning, despite having less result and quality than Denie. The diagnosis was a communication and visibility problem.

#### 2. What SLiQWriterS Did (The Approach)
We built Denie&#039;s LinkedIn content system from the ground up. First, we defined his authority angle, not simply &quot;Google Ads agency owner&quot;, but a specific, ownable position in his market. This made him the obvious expert for a particular kind of client.

We built a content calendar that deliberately mixed three things:



1. Posts that educated his ideal client.



2. Posts that demonstrated results.



3. Posts that showed his point of view on the industry.

This wasn&#039;t opinion for opinion&#039;s sake. These were sharp, direct takes that made people say, &quot;finally, someone who gets it.&quot;

We wrote everything in his voice, and it was all result-focused. Every post went out with a purpose: drive engagement from the exact audience we wanted, generate DM conversations, or move profile visitors towards becoming paying clients.

#### 3. What Changed (The Results)
In 3 months, Denie gained 9K followers and generated 6 qualified inbound leads per week from content.

Average engagement per post increased by 67% compared with his previous performance. TAT Agency was listed in the Top 100 in the Google Ads space.

He received numerous podcast invitations, including a notable invitation from a leading YouTuber. His profile also received over 1,200 search views weekly.

### 14.3 Case Study 2: Christina Voll — Rise Remotely (Voicewright)
* **Slug / Route:** `case-study?slug=christina-rise-remotely-linkedin`
* **Title:** "An unmistakable point of view. Three new clients."
* **Client & Role:** Christina Voll (Founder) · Rise Remotely
* **Service Category:** Voicewright · Marketing, SaaS & Remote Work
* **Geography & Timeframe:** Canada · 2 months
* **Summary Excerpt:** A growth marketer with strong client results, but content that blended in. A sharper POV helped take her from 6K to 9K followers, with 3 new clients in 2 months.

#### Key Performance Metrics:
**6K to 9K** (followers in 2 months) | **3** (clients signed in 2 months) | **+50%** (engagement per post) | **1,000+** (profile views in 30 days) | **3 / week** (qualified leads)

#### 1. The Situation & Problem (The Starting Point)
The situation

Christina knew growth marketing deeply and instinctively, with the kind of flow that only comes from years of doing the work.

She had a real offer and product, Rise Remotely. Her client results were strong: over 50 clients in the past few years spoke volumes.

Her LinkedIn presence was the only thing that wasn&#039;t pulling its weight. She was posting and showing up, although not regularly, but the account wasn&#039;t growing as it should. The right people, SaaS founders, remote-first companies and B2B decision-makers, weren&#039;t engaging or reaching out.

The problem

The content was slightly generic. It was the kind of content any growth marketer or fractional CMO could write: tips anyone could find on Google, and insights without a distinctive perspective.

The posts were technically fine but completely forgettable. Christina&#039;s account had plateaued because nothing about it made her the obvious choice for her ideal client.

She was one of many voices in a saturated niche when she needed to be the voice.

#### 2. What SLiQWriterS Did (The Approach)
We repositioned her entire content identity around a specific, ownable point of view. Christina wasn&#039;t just &quot;a growth marketer&quot;. She was the growth marketer who understood remote-first SaaS companies from the inside: the metrics, the culture and the specific growth levers that work for distributed teams. She had been there and lived it.

We built content that spoke directly to that ideal customer. Every post was written for one reader: the SaaS founder or marketing lead who would see it, feel seen and think, &quot;Yes, Christina gets it.&quot;

We created a three-part content mix: thought leadership that demonstrated depth, data-backed insights that built credibility, and strategic social proof that showed results without bragging.

Then we built the system: a consistent posting rhythm, a bank of content that compounded reach week over week, and a profile optimised to convert visitors into paying clients.

#### 3. What Changed (The Results)
Christina&#039;s following grew from 6K to 9K in 2 months, alongside a 50% increase in engagement per post.

She received over 1,000 profile views in 30 days and an average of 3 qualified leads weekly.

She signed 3 clients in the first 2 months.

### 14.4 Case Study 3: Majrooh Abubakar — RemoteGrowthLab (Voicewright)
* **Slug / Route:** `case-study?slug=majrooh-remotegrowthlab-linkedin`
* **Title:** "A credible voice in fintech. An invitation abroad."
* **Client & Role:** Majrooh Abubakar (CEO) · RemoteGrowthLab
* **Service Category:** Voicewright · Financial Services & Fintech
* **Geography & Timeframe:** Australia · 2 months
* **Summary Excerpt:** Under 1K followers and no clear industry voice. A CEO-level content identity helped reach 1K followers in the first month, with 200% more impressions across two months.

#### Key Performance Metrics:
**1K** (followers in the first month) | **+200%** (post impressions across 2 months) | **+70%** (profile views month-on-month) | **1** (industry event invitation abroad)

#### 1. The Situation & Problem (The Starting Point)
The situation

In fintech, trust is the product. Before anyone signs a contract, sends a wire or integrates a financial tool, they vet the people behind it. They Google, check LinkedIn and look for proof that you know what you&#039;re talking about and that others have trusted you and won.

Majrooh, a bespoke customer service professional and CEO of RemoteGrowthLab, had the expertise, track record and results. But his LinkedIn presence didn&#039;t reflect any of it.

He had no consistent content, clear narrative or recognisable voice in the industry. With fewer than 1K followers, the right decision-makers, CFOs, fintech founders and remote finance leads, had no reason to find him or follow him.

The problem

The absence of a LinkedIn presence wasn&#039;t neutral. In a trust-dependent industry, invisibility is a liability.

Prospects were silently vetting Majrooh&#039;s competitors, who had stronger content presences, and choosing them because they showed up more, not because they were better.

His pipeline was suffering from a bad signal, not a bad service.

#### 2. What SLiQWriterS Did (The Approach)
We built a CEO-level content identity for Majrooh: authoritative, credible and precisely targeted at the people who needed to find him.

We identified his exact ideal customer: fintech operators, CFOs and B2B finance decision-makers who valued both technical depth and strategic clarity. Then we built content that spoke directly to them in a language they respected.

The content mix was deliberate:



1. Market analysis posts that demonstrated expertise.



2. Trust-building stories that humanised the brand. Majrooh had stories to tell.



3. Sharp point-of-view content that made him a name people recognised and referenced in his space.

We maintained a consistent posting rhythm that compounded over time and built a recognisable presence, so prospects arrived on calls already familiar with his expertise.

#### 3. What Changed (The Results)
Majrooh reached 1K followers in the first month. Across two months, post impressions increased by 200%.

Profile views increased by 70% month-on-month.

He was invited to an industry-wide event on another continent.

### 14.5 Case Study 4: Socotra Nights — Socotra Nights (Growthwright)
* **Slug / Route:** `case-study?slug=socotra-nights-content-bookings`
* **Title:** "From beautiful visuals to $112K in attributed bookings."
* **Client & Role:** Socotra Nights · Socotra Nights
* **Service Category:** Growthwright · Luxury Travel
* **Geography & Timeframe:** Italy & Saudi Arabia · 90 days
* **Summary Excerpt:** Beautiful visuals, flat captions and no system turning followers into bookings. An editorial content strategy helped generate $112K in attributed bookings in 90 days.

#### Key Performance Metrics:
**$112K** (attributed bookings in 90 days) | **18% to 41%** (enquiry-to-booking conversion) | **1.7% to 8.4%** (Instagram engagement)

#### 1. The Situation & Problem (The Starting Point)
Socotra Nights had beautiful visuals, but flat captions and no system turning followers into bookings.

#### 2. What SLiQWriterS Did (The Approach)
We installed an editorial content strategy.

#### 3. What Changed (The Results)
Instagram engagement increased from 1.7% to 8.4%. Enquiry-to-booking conversion grew from 18% to 41%, with $112K in attributed bookings in 90 days.

### 14.6 Case Study 5: Super — Super (Growthwright)
* **Slug / Route:** `case-study?slug=super-web3-clarity-conversion`
* **Title:** "Less jargon. More reasons to sign up."
* **Client & Role:** Super · Super
* **Service Category:** Growthwright · Crypto & Web3
* **Geography & Timeframe:** UK · 90 days
* **Summary Excerpt:** Jargon-heavy copy only insiders understood. A rewrite for clarity helped take signup conversion from 2.8% to 7.1%, with 5,400 new Twitter/X followers in 90 days.

#### Key Performance Metrics:
**2.8% to 7.1%** (signup conversion) | **-39%** (homepage bounce) | **+5,400** (Twitter/X followers in 90 days)

#### 1. The Situation & Problem (The Starting Point)
Super had jargon-heavy copy that only insiders understood, with no clear reason for new users to stay.

#### 2. What SLiQWriterS Did (The Approach)
We rewrote the copy for clarity.

#### 3. What Changed (The Results)
Homepage bounce dropped by 39%. Signup conversion increased from 2.8% to 7.1%, and Twitter/X gained 5,400 followers in 90 days.

### 14.7 Case Study 6: BrighterFuture — BrighterFuture (Growthwright)
* **Slug / Route:** `case-study?slug=brighterfuture-organic-content-growth`
* **Title:** "A consistent content system. 370% organic traffic growth."
* **Client & Role:** BrighterFuture · BrighterFuture
* **Service Category:** Growthwright · Marketing Agency
* **Geography & Timeframe:** UK · 
* **Summary Excerpt:** High client standards, inconsistent content quality. A done-for-you content system delivered 370% organic traffic growth and two new agency clients directly from content.

#### Key Performance Metrics:
**+370%** (organic traffic growth) | **2** (new agency clients from content)

#### 1. The Situation & Problem (The Starting Point)
BrighterFuture had inconsistent content quality despite high client standards.

#### 2. What SLiQWriterS Did (The Approach)
We installed a done-for-you content system.

#### 3. What Changed (The Results)
Organic traffic grew by 370%. Two new agency clients were acquired directly from content.

### 14.8 Case Study 7: Rockdidit — Rockdidit (Growthwright)
* **Slug / Route:** `case-study?slug=rockdidit-content-vsl-pipeline`
* **Title:** "One VSL campaign. 73 qualified leads."
* **Client & Role:** Rockdidit · Rockdidit
* **Service Category:** Growthwright · Business Growth Agency
* **Geography & Timeframe:** US · 
* **Summary Excerpt:** Strong results, no engine behind the content. A connected social, blog and email system produced 73 qualified leads from one VSL campaign.

#### Key Performance Metrics:
**73** (qualified leads from one VSL campaign) | **+3,600** (LinkedIn followers in 2 months) | **Nearly 3x** (homepage conversion)

#### 1. The Situation & Problem (The Starting Point)
Rockdidit had strong results but no engine behind its content or copy.

#### 2. What SLiQWriterS Did (The Approach)
We built a new system across social, blog and email.

#### 3. What Changed (The Results)
LinkedIn following grew by 3,600 in 2 months. Homepage conversion nearly tripled, and one VSL campaign generated 73 qualified leads.

### 14.9 Case Study 8: Syndy AI — Syndy AI (Growthwright)
* **Slug / Route:** `case-study?slug=syndy-ai-positioning-conversion`
* **Title:** "Beyond features. Positioning that converts."
* **Client & Role:** Syndy AI · Syndy AI
* **Service Category:** Growthwright · SaaS & AI
* **Geography & Timeframe:** US & Korea · 
* **Summary Excerpt:** Competing on features in a crowded AI writing market. New positioning and a content system delivered a 28% lift in trial-to-paid conversion.

#### Key Performance Metrics:
**+28%** (trial-to-paid conversion lift) | **34%** (landing page conversion) | **4.2%** (ad click-through rate)

#### 1. The Situation & Problem (The Starting Point)
Syndy AI, a LinkedIn AI writing tool, was competing on features in a crowded market.

#### 2. What SLiQWriterS Did (The Approach)
We built new positioning and a content system.

#### 3. What Changed (The Results)
Trial-to-paid conversion lifted by 28%. Landing page conversion reached 34%, with a 4.2% ad click-through rate, reported in the supplied brief as 10 times the platform benchmark.

---

## 15. Pricing & Service Packages (`pricing.php`)

### 15.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Pricing Plans`
* **Navigation Path:** `Home` -> `Pricing Plans`
* **Section Eyebrow:** `Pricing`

### 15.2 Blog / SEO Articles Packages
* **Section Heading:** `Blog/SEO Articles`

| Plan Tier | Price | Word Count & Deliverables | Delivery Time | Direct Buy Link |
| :--- | :--- | :--- | :--- | :--- |
| **Silver** | `$40.00` | • 500 Words<br>• SEO-worthy<br>• Plagiarism Free<br>• Well edited and proofread | 48 hours (2 days) | `order-details?desc=Blog/SEO Articles&amt=40&plan=silver` |
| **Gold** *(Featured)* | `$65.00` | • 750 Words<br>• SEO-worthy<br>• Plagiarism Free<br>• Well edited and proofread | 48 hours (2 days) | `order-details?desc=Blog/SEO Articles&amt=65&plan=gold` |
| **Diamond** | `$115.00` | • 1000 Words<br>• SEO-worthy<br>• Plagiarism Free<br>• Well edited and proofread | 48 hours (2 days) | `order-details?desc=Blog/SEO Articles&amt=115&plan=diamond` |

---

### 15.3 Proofreading & Editing Packages
* **Section Heading:** `Proofreading & Editing`

| Plan Tier | Price | Word Count & Deliverables | Delivery Time | Direct Buy Link |
| :--- | :--- | :--- | :--- | :--- |
| **Silver** | `$20.00` | • 500 Words<br>• Manually proofread<br>• Thoroughly edited | 48 hours (2 days) | `order-details?desc=Proofreading and Editing&amt=20&plan=silver` |
| **Gold** *(Featured)* | `$35.00` | • 1000 Words<br>• Manually proofread<br>• Thoroughly edited | 48 hours (2 days) | `order-details?desc=Proofreading and Editing&amt=35&plan=gold` |
| **Diamond** | `$150.00` | • 5000 Words<br>• Manually proofread<br>• Thoroughly edited | 120 hours (5 days) | `order-details?desc=Proofreading and Editing&amt=150&plan=diamond` |

---

### 15.4 Consultation & Coaching Packages
* **Section Heading:** `Consultation/Coaching`

| Plan Tier | Price | Inclusions & Scope | Purchase / Booking Action |
| :--- | :--- | :--- | :--- |
| **Silver Consultation** | `$200.00` | • 90 Minutes deep discussion of pain points<br>• Analyze major growth strategies<br>• Ask direct, tailored questions | `order-details?desc=Consultation with Deh Chukwuka&amt=200&plan=silver` |
| **Gold 6-Week Mentorship** | `$600.00` | • Direct access to Deh Chukwuka<br>• Daily 1-hour sessions<br>• Access to an exclusive support group<br>• Direct referral & outsourcing opportunities<br>• Learning duration: 6 weeks | `order-details?desc=6 Weeks Mentorship with Deh Chukwuka&amt=600&plan=gold` |

---

## 16. Frequently Asked Questions (`faq.php`)

### 16.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Frequently Asked Question`
* **Navigation Path:** `Home` -> `Frequently Asked Question`

### 16.2 General Agency FAQs
1. **Q: What is SliQWriters?**  
   *A:* "SLiQWriterS is a freelance writing, creative and branding agency, dedicated to offering you the very best of digital services."
2. **Q: When was this company founded?**  
   *A:* "The company has been around since 2017."
3. **Q: Does SliQWriters offer mentoring and coaching?**  
   *A:* "Yes, Coaching and Mentorship is included in our list of services. Kindly see the service page for a detailed list of our services."
4. **Q: How can I contact SliQWriters?**  
   *A:* "You can message us at hello@sliqwriters.com, or visit the contact page."

---

## 17. Contact Us & Consultation Inquiries (`contact.php`)

### 17.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Contact Us`
* **Navigation Path:** `Home` -> `Contact Us`

### 17.2 Direct Contact Information
* **Phone Contact:**  
  * *Label:* "Call Us Any Time:"  
  * *Number:* `+234-812-379-6553` / `+(234)-813-372-0549`
* **Email Contact:**  
  * *Label:* "Mail Address:"  
  * *Email:* `hello@sliqwriters.com`
* **Office Location:**  
  * *Label:* "Office Address:"  
  * *Address:* "Nigeria." (Map Location: Ikeja, Lagos, Nigeria)

### 17.3 "Get a Quote" Project Inquiry Form
* **Form Header:** `Get a quote`
* **Form Subtitle:** "get a quotation for your project"
* **Form Fields:**
  1. `Your Name` (Text input, Required)
  2. `Phone Number` (Tel input, Required)
  3. `Email Address` (Email input, Required)
  4. `Your Message` (Textarea, Required)
* **Submit Action:** `Send Message`
* **Response Indicator:** Dynamic status loader (`loader.gif`) & feedback container.

---

## 18. Order Confirmation & Checkout (`order-details.php`)

### 18.1 Header & Breadcrumbs
* **Breadcrumb Title:** `Order Confirmation`
* **Navigation Path:** `Home` -> `My Order`

### 18.2 Order Confirmation Body & Form
* **Section Heading:** `Order confirmation and checkout`
* **Notice:** "Confirm order — You are about to purchase this product/service."
* **Order Details Breakdown:**
  * `Desc:` [Dynamic Service Description, e.g. Blog/SEO Articles]
  * `Price:` [Dynamic Price, e.g. $40.00]
  * `Plan:` [Dynamic Plan Tier, e.g. Silver]
  * `Date:` [Current Timestamp]
* **Customer Intake Fields:**
  * `First Name` (Input, Required)
  * `Email` (Input, Required)
  * `Phone` (Input, Required)
* **Action Button:** `Pay Now` (Paystack USD / Multi-currency checkout gateway)

### 18.3 Customer Notifications & Alerts
* **Order Success Alert:** `"Order successful. Our personnel will contact you via email or phone"`
* **Order Failure Alert:** `"Payment failed, try again"`
* **Payment Cancellation Alert:** `"Payment Cancelled"`

---

## 19. Blog & Knowledge Hub (`blog.php` & `blog-details.php`)

### 19.1 Blog Listing Header (`blog.php`)
* **Page Title:** `Blog | SLiQWriterS`
* **Breadcrumb Title:** `Blog`
* **Navigation Path:** `Home` -> `Blog`
* **Archive Notices:**
  * *Filter Active Notice:* `Showing archive: Category - [Name] | Tag - [Name] (Clear filters)`
  * *Invalid Archive Warning:* `The requested category or tag could not be found. Showing all published posts instead.`
* **Article Card Meta:**
  * Date (`F j, Y`)
  * Views count (`Views(N)`)
  * Read action: `Read More`
* **Pagination Controls:** `Previous page (←)`, Numeric pages (`1, 2, ...`), `Next page (→)`

### 19.2 Blog Article Template (`blog-details.php`)
* **Article Breadcrumb:** `Home` -> `Blog` -> `[Post Title]`
* **Article Meta Bar:**
  * Author attribution: `By [Author Name / SliQWriters]`
  * Publication date: `[Date]`
  * Real-time view count: `Views(N)`
* **404 Post Not Found State:**
  * *Title:* "Post not found"
  * *Body:* "The post you are trying to open does not exist or is not published yet."
  * *Button:* `Back to Blog` (`blog`)

### 19.3 Published Editorial Knowledge Base (Representative Samples)
1. **The Complete Guide to B2B Prospecting: What It Is and How to Do It**
   * *Slug:* `the-complete-guide-to-b2b-prospecting-what-it-is-and-how-to-do-it`
   * *Excerpt:* "What is B2B prospecting, and how can you build a system that actually works? This practical guide explains how to combine inbound and outbound strategies, create verified lead lists, and run efficient outreach using Skrapp and targeted LinkedIn prospecting."
2. **How to Use Intent Data Safely Without Compromising Privacy**
   * *Slug:* `how-to-use-intent-data-safely-without-compromising-privacy`
   * *Excerpt:* "Intent data reveals when prospects are actively researching solutions, helping you time outreach perfectly. This guide explains how to use intent data responsibly while staying compliant with privacy laws."

---
*End of Master Website Copy Deck — SLiQWriterS (`website-copy.md`)*

