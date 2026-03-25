# Weekly Publish Checklist

After publishing new content or updates:

## 1. Verify Build
- Run `npm run build` — must complete with zero errors
- Check page count matches expectations

## 2. Push to Production
- `git add -A && git commit && git push`
- Verify Vercel deployment succeeds

## 3. Verify Rendered HTML
- Visit 2-3 new pages in browser
- View Source → confirm main content is in the HTML (not just client JS)
- Check titles and H1s are clean (no template artifacts)

## 4. Submit to Google Search Console
- Go to https://search.google.com/search-console
- Use "URL Inspection" tool for each new page URL
- Click "Request Indexing" for each new URL
- Submit updated sitemap if new page types were added

## 5. Update Social Command Center
- Go to sasanova.com/admin
- Review new posts generated from this week's content
- Mark any outdated posts as "Posted" to prevent reuse

## 6. Newsletter
- Draft this week's "SaaS Price Report" using the newsletter tab in /admin
- Include: 1 pricing change, 1 comparison, 1 hidden cost, 1 cheaper alternative
- Send via beehiiv

## 7. Social Distribution
- Post 1 LinkedIn insight from /admin
- Post 1 Reddit thread from /admin (r/SaaS or r/startups)
- Post 1 Indie Hackers update from /admin
