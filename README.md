# SLiQWriterS rebrand

Next.js App Router, TypeScript and Tailwind CSS. The PHP site is retained as the
blog CMS and database host; this project does not replace its admin.

## Local development (Windows / XAMPP)

Start Apache and MySQL in XAMPP, then:

```powershell
Set-Location C:\okemmanuel\sliqwriters-rebrand
npm ci
npm run setup:local
npm run backend:migrate
npm run dev:local
```

Open http://localhost:3000. The PHP API listens on **127.0.0.1:8085**.
The generated, ignored `.env.local` contains a random development API key and
pointers to the existing PHP executable and database configuration. Database
passwords are not copied into this project. Edit those paths if XAMPP moves.
Do not run `dev:local` alongside an already running API or Next.js instance.

Alternatively, use `npm run backend:serve` and `npm run dev` in two terminals.
Production preview: `npm run build`, then `npm start`, with the API running.

## Architecture and database decision

```text
Browser -> Next.js on Vercel -> authenticated HTTPS PHP API on cPanel
                                                       -> local MySQL
Existing PHP admin -------------------------------------> same MySQL
```

**MySQL is the recommended choice.** It preserves the existing schema, data,
publication rules, admin, and phpMyAdmin workflow. PostgreSQL would introduce
an unnecessary database and CMS migration.

Namecheap's [plan comparison](https://www.namecheap.com/support/knowledgebase/article.aspx/10112/22/shared-hosting-plans-comparison/)
lists MySQL across shared plans and PostgreSQL on Stellar Plus/Business, but not
Stellar. PostgreSQL availability is therefore plan-dependent, not universally
absent. Namecheap [disables direct remote MySQL on shared hosting](https://www.namecheap.com/support/knowledgebase/article.aspx/1249/89/how-to-remotely-connect-to-a-mysql-database-located-on-our-shared-server/).
Its documented SSH tunnel is suitable for administration, not a persistent
connection from Vercel serverless functions. The HTTPS gateway avoids this
constraint and keeps database credentials on cPanel. Documentation checked
26 November 2026; confirm the actual hosting plan before launch.

## Content and visual system

- `src/content/website-copy.md` is an unchanged snapshot of the supplied deck.
- `src/content/deck.json` contains its sections and SHA-256 fingerprint.
- `src/lib/copy.ts` extracts copy without rewriting sentences or emphasis.
- `npm run content:import -- C:\xampp\htdocs\sliqwriters` refreshes the snapshot,
  section data, favicon, and the three original brand images.
- Main site: locally hosted Manrope, yellow `#fed700`, ink `#171916`, paper
  `#f8f8f4`, consistent containers, spacing, buttons and bordered cards.
- Offer pages retain the black/yellow/cream direction, italic serif emphasis,
  Growthwright blueprint/phase cards, Voicewright alternating timeline,
  case-study grids, testimonials, founder blocks and closing calls to action.
- The current PHP offers contain text not in the deck and different headlines.
  The deck takes precedence; these are layout recreations with the supplied
  copy, not pixel-identical captures of conflicting content.
- Pricing and checkout are deferred by request. No new price/checkout links
  are exposed. The existing PHP checkout was not changed.

Implemented routes: Home, About, Services, Blog/archive/article, Contact,
Growthwright, Voicewright, Copywriting, Marketing, LinkedIn Growth, Branding,
Mentorship, Founder, FAQ, case-study library and eight case-study details.
Case studies are published from the supplied copy deck, not synchronized from
the PHP case-study admin. Blog posts remain live database content.

`/index`, `.php` URLs, `/blog-details?slug=...`, and `/case-study?slug=...`
redirect to the new routes. Existing blog slugs and slug-history redirects are
preserved. Admin View links should point at the production frontend origin
when the admin is moved to a backend subdomain.

## Forms and publishing

- Blog queries require `status = 'published'` and a due publication time;
  null publication dates retain the existing site's compatibility behavior.
- Reads use `no-store`, so publishing/unpublishing does not require rebuilding.
- Unknown posts return 404; historical slugs redirect to the currently published
  post. Category and tag filters and six-post pagination are supported.
- Article HTML is allowlist-sanitized server-side; images use the configured
  legacy media origin. Article views are recorded after mounting, not on link
  prefetches or metadata requests.
- Contact inquiries are durably stored in `rebrand_inquiries`.
- Newsletter subscriptions are stored idempotently in `rebrand_subscribers`;
  newsletter campaigns/delivery remain with the business's email workflow.
- Both forms validate on client, Next.js and PHP. Requests require same-origin
  submission to Next.js and an API bearer key to PHP. A honeypot, body-size cap,
  and shared MySQL rate limit (5 submissions per IP hash per hour) are included.
  No raw IP is stored. Review retention and privacy notices before launch.
- Vercel overwrites `x-forwarded-for`. Any other reverse proxy must do the same.
- Responses report actual persistence, not simulated email delivery. Failure
  states are visible; the API key and upstream error details never reach users.
- `backend/notify.php` sends queued contact notifications using the existing
  PHPMailer installation and mail configuration. It sets SMTP debugging to zero,
  uses the visitor only as Reply-To, retries unsent records and prevents
  concurrent workers. Run it from a cPanel cron every five minutes.
  Only dry-run behavior is validated locally; live mail requires SMTP verification.

## cPanel deployment

1. Back up the existing database. Keep the legacy site/admin and uploads on a
   backend subdomain such as `cms.sliqwriters.com` with a valid TLS certificate.
2. Upload `backend/public/index.php` to an API-only directory/subdomain.
   **Only `backend/public` should be the API document root.**
   Keep migrations, tests, source, and secrets outside it.
3. Configure `SLIQ_API_KEY` (at least 32 random characters, a fresh production
   secret) and `SLIQ_DATABASE_CONFIG` (absolute path to the existing
   `config/database.php`) in the PHP environment. Configure cPanel PHP-FPM or
   Apache environment settings; verify `getenv` receives them.
4. Ensure PHP 8.2+, PDO MySQL, mbstring, and JSON are available. Use a dedicated
   least-privilege database user in production. The API needs SELECT on blog
   tables, UPDATE on post views, and CRUD on the three rebrand tables.
   Use a migration-capable account only for schema setup.
5. Import `backend/schema.sql` with phpMyAdmin, or run `backend/migrate.php`
   from cPanel Terminal with `SLIQ_DATABASE_CONFIG` set. This adds only
   `rebrand_*` tables; it does not alter the existing blog/admin schema.
6. Configure the contact-notification cron with `SLIQ_DATABASE_CONFIG` and the
   absolute path to `backend/notify.php`. Keep the existing PHPMailer files and
   `includes/mail_credentials.php` available beside the legacy site. First run
   `php backend/notify.php --dry-run`, then verify delivery using an approved
   test address before enabling the schedule.
7. Verify unauthenticated API requests return 401 and authenticated requests
   return JSON. Disable PHP display_errors in production; retain server logs.
   No CORS wildcard is needed: the browser never calls cPanel directly.

## Vercel deployment

Import **this directory** as the Next.js project. Use Node.js 24 and the lockfile.
Configure server-only environment variables (never prefix these with
`NEXT_PUBLIC_`):

| Variable | Production value |
| --- | --- |
| `SITE_URL` | Public frontend origin, e.g. `https://sliqwriters.com` |
| `SLIQ_API_URL` | HTTPS address of the cPanel API `index.php` |
| `SLIQ_API_KEY` | Same production secret as cPanel |
| `LEGACY_MEDIA_URL` | HTTPS legacy site root with trailing slash |

Build command: `npm run build`. No database credentials belong on Vercel.
Set `SITE_URL` separately for previews, or omit it on previews to use their
request origin for form checks (SEO defaults to the production brand domain).
Restrict indexing of public preview deployments in Vercel.

Before DNS cutover, validate production blog images, canonical/OG metadata,
sitemap and RSS, scheduled/unpublished posts, admin View URLs, form persistence,
SMTP delivery, and the academy/booking links. Keep the old origin reachable for
rollback and legacy checkout until the deferred payment phase is implemented.
No deployment, DNS, or production database change has been performed here.

## Validation

```powershell
npm run lint
npm run typecheck
npm test
npm run build
C:\xampp\php\php.exe -l backend\public\index.php
C:\xampp\php\php.exe -l backend\notify.php
```

With the API and frontend running against **local/test MySQL only**:

```powershell
$env:SLIQ_TEST_DATABASE = '1'
npm test
```

Integration tests create uniquely named test posts, a slug redirect, and form
records, then delete exactly those fixtures in `finally`. They verify draft and
future-post exclusion, redirects, sanitization, authentication, form validation,
durable storage, deduplicated subscribers, and rate limiting. Do not point the
tests at production.

Builds and tests do not send mail. The copy test checks the snapshot fingerprint
and all repeated FAQ/service structures. Browser validation covers the core and
offer pages at mobile, tablet and desktop sizes, keyboard navigation and forms.

## Verified locally, 26 November 2026

- Production build, TypeScript, ESLint and PHP syntax checks passed.
- Seven automated tests passed with local database integration enabled.
- Eight pages at 375px, 768px and 1440px: 24 checks passed, with no horizontal
  overflow, broken images or uncaught page errors.
- Mobile navigation, Escape/focus restoration, keyboard accordion operation,
  actual contact-form persistence/reset and visible 503 failure were checked.
- Homepage mobile Lighthouse: Accessibility 100, Best Practices 100, SEO 100.
- Local, unthrottled homepage trace: LCP 325ms, CLS 0.00. These are lab readings,
  not production performance guarantees; remeasure after deployment.
- Test fixtures were removed. No test email was sent.

## Project map

- `src/app`: routes, metadata, robots, sitemap, RSS and browser-facing API.
- `src/components`: shared UI, editorial sections, forms and offer layouts.
- `src/lib`: exact-copy helpers, typed gateway, blog sanitization and SEO.
- `src/content`: original copy snapshot and generated data.
- `public/images`: existing brand photography.
- `backend`: cPanel gateway, schema and contact notification worker.
- `scripts`: local setup, API startup, content import and combined development.
- `tests`: copy and opt-in local-database integration tests.

Remaining launch work: cPanel/Vercel configuration, domain cutover, SMTP delivery
verification, privacy/retention approval and stakeholder visual sign-off.
Pricing/Paystack migration is explicitly deferred.
