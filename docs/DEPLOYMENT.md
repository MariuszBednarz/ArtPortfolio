# Deployment Checklist

## Pre-Deployment Verification ✅

### Build & Tests

- [x] `npm run build` completes successfully
- [x] No TypeScript errors
- [x] No ESLint errors
- [x] All routes compile correctly

### Code Quality

- [x] Next.js 15.5.5 migration complete
- [x] React 19 migration complete
- [x] Tailwind CSS 4 migration complete
- [x] All dependencies updated
- [x] Breaking changes fixed (image remotePatterns)
- [x] Hydration warnings resolved

### Functionality

- [ ] Homepage loads correctly (test both `/en` and `/pl`)
- [ ] Art gallery displays all artworks
- [ ] Individual art pages work
- [ ] Bio page renders with awards
- [ ] Policy page displays
- [ ] Theme switching works (light/dark)
- [ ] Language switching works (EN/PL)
- [ ] Cookie banner appears and persists choice
- [ ] Filters work (category, technique, year)
- [ ] Images load from Hygraph
- [ ] Mobile responsive design works

## Vercel Deployment Steps

### 1. Push to GitHub

```powershell
git add .
git commit -m "feat: migrate to Next.js 15, React 19, Tailwind 4"
git push origin new_version
```

### 2. Configure Vercel Project

**Environment Variables** (add in Vercel dashboard):

```
NEXT_PUBLIC_ENDPOINT=<your-hygraph-graphql-endpoint>
NEXT_GA_MEASUREMENT_ID=<your-google-analytics-id>
```

**Build Settings**:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.next` (default)
- Install Command: `npm install`
- Node Version: `18.x` or `20.x`

### 3. Deploy

1. Import project in Vercel
2. Connect to GitHub repository
3. Select `new_version` branch
4. Add environment variables
5. Click "Deploy"

### 4. Post-Deployment Checks

**Functional Testing**:

- [ ] Visit production URL
- [ ] Test all routes: `/`, `/art`, `/art/[id]`, `/bio`, `/policy`
- [ ] Test both locales: `/en/*` and `/pl/*`
- [ ] Test theme switching
- [ ] Test language switching
- [ ] Verify images load
- [ ] Check filters work
- [ ] Test on mobile device
- [ ] Verify cookie banner works

**Performance**:

- [ ] Check Lighthouse scores
- [ ] Verify Core Web Vitals
- [ ] Check console for errors
- [ ] Monitor initial load time

**Analytics**:

- [ ] Verify Google Analytics tracking works
- [ ] Check GA4 real-time reports

### 5. Monitoring

**First 24 Hours**:

- Monitor Vercel Analytics for errors
- Check Vercel Logs for runtime issues
- Watch for timeout errors from Hygraph
- Monitor page load times

**First Week**:

- Review user behavior in GA4
- Check for any 404s or broken links
- Monitor build times
- Review error rates

## Rollback Plan

If critical issues arise:

```powershell
# Option 1: Revert in Vercel dashboard
# Go to Deployments → Select previous deployment → Promote to Production

# Option 2: Revert Git branch
git checkout main
git push origin main
# Vercel will auto-deploy previous version
```

## Domain Configuration

If using custom domain:

1. Add domain in Vercel dashboard
2. Update DNS records (A/CNAME)
3. Wait for DNS propagation
4. Verify SSL certificate

## Post-Deployment Actions

- [ ] Update README with new version
- [ ] Tag release in GitHub: `git tag v2.0.0`
- [ ] Announce deployment to stakeholders
- [ ] Archive MIGRATION.md (already deleted ✅)
- [ ] Schedule first performance review (1 week)
- [ ] Plan next optimization sprint (see TECHNICAL_DEBT.md)

## Known Issues

### Acceptable (Not Blocking Deployment)

- ✅ Apollo Client timeout set to 30s (some pages may load slowly)
- ✅ No cache strategy (fresh data on every load)
- ✅ 62s build time (acceptable for deployment)

### Monitor After Deployment

- Watch for Hygraph API timeouts
- Monitor page load times (especially `/art`)
- Check for any hydration warnings in production

## Success Criteria

Deployment is successful if:

- ✅ All pages load without errors
- ✅ Both locales work correctly
- ✅ Theme switching works
- ✅ Images display properly
- ✅ No critical console errors
- ✅ Mobile experience is smooth
- ✅ Analytics tracking works

## Support

**Issues?**

1. Check Vercel Logs
2. Review browser console
3. Test in incognito mode (rules out extensions)
4. Check Hygraph API status
5. Review TECHNICAL_DEBT.md for known limitations

---

**Deployment Date**: ******\_******  
**Deployed By**: ******\_******  
**Production URL**: ******\_******  
**Status**: ⬜ Success | ⬜ Issues | ⬜ Rollback
