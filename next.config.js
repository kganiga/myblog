const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net https://www.google-analytics.com/analytics.js https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9300442050014882;
  style-src 'self' 'unsafe-inline' *.googleapis.com cdn.jsdelivr.net pagead2.googlesyndication.com;
  frame-src youtube.com www.youtube.com https://bid.g.doubleclick.net;
  img-src * blob: data:pagead2.googlesyndication.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com;
  media-src 'none';
  connect-src * https://pagead2.googlesyndication.com https://www.google-analytics.com;
  font-src 'self' fonts.gstatic.com cdn.jsdelivr.net googleads.g.doubleclick.net tpc.googlesyndication.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'video.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-ort2-2.cdninstagram.com',
      '*.cdninstagram.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/:path/index.xml',
        destination: '/:path/feed.xml',
        permanent: true,
      },
    ]
  },
})
