# Technical Debt & Future Optimizations

> **Status**: Post Next.js 15 migration - production ready but not fully optimized

## Performance Optimizations (Future Work)

### 1. Apollo Client Cache Strategy

**Current**: `fetchPolicy: "no-cache"` for all queries  
**Impact**: Every page load fetches fresh data from Hygraph (slower)  
**Proposal**:

```typescript
// Enable cache for static content
fetchPolicy: "cache-first"; // or "network-only" with revalidation
```

**Benefit**: Faster page loads, reduced API calls

### 2. GraphQL Query Optimization

**Current**: May be fetching more data than needed  
**Action Items**:

- [ ] Audit all GraphQL queries for over-fetching
- [ ] Use query fragments for reusable fields
- [ ] Implement pagination for large datasets
- [ ] Add DataLoader pattern if N+1 queries exist

### 3. Image Optimization

**Current**: Works but could be enhanced  
**Action Items**:

- [ ] Review image sizes from Hygraph
- [ ] Consider adding blur placeholders
- [ ] Optimize Masonry grid image loading
- [ ] Lazy load images below the fold

### 4. Build Performance

**Current**: 62s build time (acceptable but could be faster)  
**Action Items**:

- [ ] Enable Turbopack in dev: `next dev --turbo`
- [ ] Analyze bundle size: `npm install -D @next/bundle-analyzer`
- [ ] Consider code splitting for large components

### 5. Runtime Performance

**Current**: Some pages load in ~10 seconds (Hygraph API bottleneck)  
**Action Items**:

- [ ] Implement Incremental Static Regeneration (ISR)
- [ ] Add loading skeletons for better UX
- [ ] Consider CDN caching for Hygraph responses
- [ ] Monitor Core Web Vitals in production

### 6. Error Handling

**Current**: Basic error handling with `errorPolicy: "all"`  
**Action Items**:

- [ ] Add proper error boundaries
- [ ] Implement retry logic for failed GraphQL requests
- [ ] Add user-friendly error messages
- [ ] Set up error monitoring (Sentry?)

### 7. SEO Enhancements

**Current**: Basic metadata, could be improved  
**Action Items**:

- [ ] Add JSON-LD structured data
- [ ] Generate dynamic sitemap.xml
- [ ] Add robots.txt
- [ ] Implement OpenGraph images per artwork

## Non-Functional Improvements

### Testing

- [ ] Add unit tests for utility functions
- [ ] Add integration tests for critical paths
- [ ] Set up E2E tests (Playwright?)
- [ ] Add visual regression tests

### Monitoring

- [ ] Set up performance monitoring
- [ ] Track GraphQL query performance
- [ ] Monitor error rates
- [ ] Set up uptime monitoring

### Documentation

- [ ] Add JSDoc comments to complex functions
- [ ] Document GraphQL schema
- [ ] Create contribution guidelines
- [ ] Add troubleshooting guide

## Priority Matrix

### High Priority (Next Sprint)

1. Apollo Client caching - Easy win, big impact
2. Loading skeletons - Better UX during slow loads
3. Error boundaries - Production stability

### Medium Priority (Next Month)

1. Image optimization audit
2. Bundle size analysis
3. ISR implementation

### Low Priority (Future)

1. Full test coverage
2. Advanced monitoring
3. Turbopack migration

## Notes

- Current implementation is **production-ready**
- Focus is on **correctness over performance**
- Optimizations should be data-driven (measure first!)
- Don't optimize without profiling

## Tracking

Last updated: October 13, 2025  
Next review: After first production deployment
