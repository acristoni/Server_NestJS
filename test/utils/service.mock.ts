export const mockUsersListResponseFromGitHub = {
  status: 200,
  url: 'https://api.github.com/users?since=1&per_page=30',
  headers: {
    'accept-ranges': 'bytes',
    'access-control-allow-origin': '*',
    'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'public, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 27 Dec 2022 21:47:53 GMT',
    etag: 'W/"83d3496a78e92ac9f1b453e8a3392556b4b00e74fd332b7b356cff648933ffcf"',
    link: '<https://api.github.com/users?since=47&per_page=30>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
    'referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-api-version-selected': '2022-11-28',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'A634:7317:6DD4FD:7F89EA:63AB6809',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '59',
    'x-ratelimit-reset': '1672181273',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '1',
    'x-xss-protection': '0',
  },
  data: [
    {
      login: 'defunkt',
      id: 2,
      node_id: 'MDQ6VXNlcjI=',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/defunkt',
      html_url: 'https://github.com/defunkt',
      followers_url: 'https://api.github.com/users/defunkt/followers',
      following_url:
        'https://api.github.com/users/defunkt/following{/other_user}',
      gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
      organizations_url: 'https://api.github.com/users/defunkt/orgs',
      repos_url: 'https://api.github.com/users/defunkt/repos',
      events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/defunkt/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'pjhyett',
      id: 3,
      node_id: 'MDQ6VXNlcjM=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pjhyett',
      html_url: 'https://github.com/pjhyett',
      followers_url: 'https://api.github.com/users/pjhyett/followers',
      following_url:
        'https://api.github.com/users/pjhyett/following{/other_user}',
      gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
      organizations_url: 'https://api.github.com/users/pjhyett/orgs',
      repos_url: 'https://api.github.com/users/pjhyett/repos',
      events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pjhyett/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'wycats',
      id: 4,
      node_id: 'MDQ6VXNlcjQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wycats',
      html_url: 'https://github.com/wycats',
      followers_url: 'https://api.github.com/users/wycats/followers',
      following_url:
        'https://api.github.com/users/wycats/following{/other_user}',
      gists_url: 'https://api.github.com/users/wycats/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/wycats/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/wycats/subscriptions',
      organizations_url: 'https://api.github.com/users/wycats/orgs',
      repos_url: 'https://api.github.com/users/wycats/repos',
      events_url: 'https://api.github.com/users/wycats/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/wycats/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'ezmobius',
      id: 5,
      node_id: 'MDQ6VXNlcjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ezmobius',
      html_url: 'https://github.com/ezmobius',
      followers_url: 'https://api.github.com/users/ezmobius/followers',
      following_url:
        'https://api.github.com/users/ezmobius/following{/other_user}',
      gists_url: 'https://api.github.com/users/ezmobius/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/ezmobius/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ezmobius/subscriptions',
      organizations_url: 'https://api.github.com/users/ezmobius/orgs',
      repos_url: 'https://api.github.com/users/ezmobius/repos',
      events_url: 'https://api.github.com/users/ezmobius/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/ezmobius/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'ivey',
      id: 6,
      node_id: 'MDQ6VXNlcjY=',
      avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ivey',
      html_url: 'https://github.com/ivey',
      followers_url: 'https://api.github.com/users/ivey/followers',
      following_url: 'https://api.github.com/users/ivey/following{/other_user}',
      gists_url: 'https://api.github.com/users/ivey/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ivey/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ivey/subscriptions',
      organizations_url: 'https://api.github.com/users/ivey/orgs',
      repos_url: 'https://api.github.com/users/ivey/repos',
      events_url: 'https://api.github.com/users/ivey/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ivey/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'evanphx',
      id: 7,
      node_id: 'MDQ6VXNlcjc=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/evanphx',
      html_url: 'https://github.com/evanphx',
      followers_url: 'https://api.github.com/users/evanphx/followers',
      following_url:
        'https://api.github.com/users/evanphx/following{/other_user}',
      gists_url: 'https://api.github.com/users/evanphx/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/evanphx/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/evanphx/subscriptions',
      organizations_url: 'https://api.github.com/users/evanphx/orgs',
      repos_url: 'https://api.github.com/users/evanphx/repos',
      events_url: 'https://api.github.com/users/evanphx/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/evanphx/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'vanpelt',
      id: 17,
      node_id: 'MDQ6VXNlcjE3',
      avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/vanpelt',
      html_url: 'https://github.com/vanpelt',
      followers_url: 'https://api.github.com/users/vanpelt/followers',
      following_url:
        'https://api.github.com/users/vanpelt/following{/other_user}',
      gists_url: 'https://api.github.com/users/vanpelt/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/vanpelt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/vanpelt/subscriptions',
      organizations_url: 'https://api.github.com/users/vanpelt/orgs',
      repos_url: 'https://api.github.com/users/vanpelt/repos',
      events_url: 'https://api.github.com/users/vanpelt/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/vanpelt/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'wayneeseguin',
      id: 18,
      node_id: 'MDQ6VXNlcjE4',
      avatar_url: 'https://avatars.githubusercontent.com/u/18?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wayneeseguin',
      html_url: 'https://github.com/wayneeseguin',
      followers_url: 'https://api.github.com/users/wayneeseguin/followers',
      following_url:
        'https://api.github.com/users/wayneeseguin/following{/other_user}',
      gists_url: 'https://api.github.com/users/wayneeseguin/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/wayneeseguin/subscriptions',
      organizations_url: 'https://api.github.com/users/wayneeseguin/orgs',
      repos_url: 'https://api.github.com/users/wayneeseguin/repos',
      events_url: 'https://api.github.com/users/wayneeseguin/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/wayneeseguin/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'brynary',
      id: 19,
      node_id: 'MDQ6VXNlcjE5',
      avatar_url: 'https://avatars.githubusercontent.com/u/19?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brynary',
      html_url: 'https://github.com/brynary',
      followers_url: 'https://api.github.com/users/brynary/followers',
      following_url:
        'https://api.github.com/users/brynary/following{/other_user}',
      gists_url: 'https://api.github.com/users/brynary/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brynary/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/brynary/subscriptions',
      organizations_url: 'https://api.github.com/users/brynary/orgs',
      repos_url: 'https://api.github.com/users/brynary/repos',
      events_url: 'https://api.github.com/users/brynary/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brynary/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'kevinclark',
      id: 20,
      node_id: 'MDQ6VXNlcjIw',
      avatar_url: 'https://avatars.githubusercontent.com/u/20?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kevinclark',
      html_url: 'https://github.com/kevinclark',
      followers_url: 'https://api.github.com/users/kevinclark/followers',
      following_url:
        'https://api.github.com/users/kevinclark/following{/other_user}',
      gists_url: 'https://api.github.com/users/kevinclark/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/kevinclark/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/kevinclark/subscriptions',
      organizations_url: 'https://api.github.com/users/kevinclark/orgs',
      repos_url: 'https://api.github.com/users/kevinclark/repos',
      events_url: 'https://api.github.com/users/kevinclark/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/kevinclark/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'technoweenie',
      id: 21,
      node_id: 'MDQ6VXNlcjIx',
      avatar_url: 'https://avatars.githubusercontent.com/u/21?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/technoweenie',
      html_url: 'https://github.com/technoweenie',
      followers_url: 'https://api.github.com/users/technoweenie/followers',
      following_url:
        'https://api.github.com/users/technoweenie/following{/other_user}',
      gists_url: 'https://api.github.com/users/technoweenie/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/technoweenie/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/technoweenie/subscriptions',
      organizations_url: 'https://api.github.com/users/technoweenie/orgs',
      repos_url: 'https://api.github.com/users/technoweenie/repos',
      events_url: 'https://api.github.com/users/technoweenie/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/technoweenie/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'macournoyer',
      id: 22,
      node_id: 'MDQ6VXNlcjIy',
      avatar_url: 'https://avatars.githubusercontent.com/u/22?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/macournoyer',
      html_url: 'https://github.com/macournoyer',
      followers_url: 'https://api.github.com/users/macournoyer/followers',
      following_url:
        'https://api.github.com/users/macournoyer/following{/other_user}',
      gists_url: 'https://api.github.com/users/macournoyer/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/macournoyer/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/macournoyer/subscriptions',
      organizations_url: 'https://api.github.com/users/macournoyer/orgs',
      repos_url: 'https://api.github.com/users/macournoyer/repos',
      events_url: 'https://api.github.com/users/macournoyer/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/macournoyer/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'takeo',
      id: 23,
      node_id: 'MDQ6VXNlcjIz',
      avatar_url: 'https://avatars.githubusercontent.com/u/23?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/takeo',
      html_url: 'https://github.com/takeo',
      followers_url: 'https://api.github.com/users/takeo/followers',
      following_url:
        'https://api.github.com/users/takeo/following{/other_user}',
      gists_url: 'https://api.github.com/users/takeo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/takeo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/takeo/subscriptions',
      organizations_url: 'https://api.github.com/users/takeo/orgs',
      repos_url: 'https://api.github.com/users/takeo/repos',
      events_url: 'https://api.github.com/users/takeo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/takeo/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'caged',
      id: 25,
      node_id: 'MDQ6VXNlcjI1',
      avatar_url: 'https://avatars.githubusercontent.com/u/25?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/caged',
      html_url: 'https://github.com/caged',
      followers_url: 'https://api.github.com/users/caged/followers',
      following_url:
        'https://api.github.com/users/caged/following{/other_user}',
      gists_url: 'https://api.github.com/users/caged/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/caged/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/caged/subscriptions',
      organizations_url: 'https://api.github.com/users/caged/orgs',
      repos_url: 'https://api.github.com/users/caged/repos',
      events_url: 'https://api.github.com/users/caged/events{/privacy}',
      received_events_url: 'https://api.github.com/users/caged/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'topfunky',
      id: 26,
      node_id: 'MDQ6VXNlcjI2',
      avatar_url: 'https://avatars.githubusercontent.com/u/26?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/topfunky',
      html_url: 'https://github.com/topfunky',
      followers_url: 'https://api.github.com/users/topfunky/followers',
      following_url:
        'https://api.github.com/users/topfunky/following{/other_user}',
      gists_url: 'https://api.github.com/users/topfunky/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/topfunky/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/topfunky/subscriptions',
      organizations_url: 'https://api.github.com/users/topfunky/orgs',
      repos_url: 'https://api.github.com/users/topfunky/repos',
      events_url: 'https://api.github.com/users/topfunky/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/topfunky/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'anotherjesse',
      id: 27,
      node_id: 'MDQ6VXNlcjI3',
      avatar_url: 'https://avatars.githubusercontent.com/u/27?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/anotherjesse',
      html_url: 'https://github.com/anotherjesse',
      followers_url: 'https://api.github.com/users/anotherjesse/followers',
      following_url:
        'https://api.github.com/users/anotherjesse/following{/other_user}',
      gists_url: 'https://api.github.com/users/anotherjesse/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/anotherjesse/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/anotherjesse/subscriptions',
      organizations_url: 'https://api.github.com/users/anotherjesse/orgs',
      repos_url: 'https://api.github.com/users/anotherjesse/repos',
      events_url: 'https://api.github.com/users/anotherjesse/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/anotherjesse/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'roland',
      id: 28,
      node_id: 'MDQ6VXNlcjI4',
      avatar_url: 'https://avatars.githubusercontent.com/u/28?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/roland',
      html_url: 'https://github.com/roland',
      followers_url: 'https://api.github.com/users/roland/followers',
      following_url:
        'https://api.github.com/users/roland/following{/other_user}',
      gists_url: 'https://api.github.com/users/roland/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/roland/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/roland/subscriptions',
      organizations_url: 'https://api.github.com/users/roland/orgs',
      repos_url: 'https://api.github.com/users/roland/repos',
      events_url: 'https://api.github.com/users/roland/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/roland/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'lukas',
      id: 29,
      node_id: 'MDQ6VXNlcjI5',
      avatar_url: 'https://avatars.githubusercontent.com/u/29?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lukas',
      html_url: 'https://github.com/lukas',
      followers_url: 'https://api.github.com/users/lukas/followers',
      following_url:
        'https://api.github.com/users/lukas/following{/other_user}',
      gists_url: 'https://api.github.com/users/lukas/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/lukas/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/lukas/subscriptions',
      organizations_url: 'https://api.github.com/users/lukas/orgs',
      repos_url: 'https://api.github.com/users/lukas/repos',
      events_url: 'https://api.github.com/users/lukas/events{/privacy}',
      received_events_url: 'https://api.github.com/users/lukas/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'fanvsfan',
      id: 30,
      node_id: 'MDQ6VXNlcjMw',
      avatar_url: 'https://avatars.githubusercontent.com/u/30?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/fanvsfan',
      html_url: 'https://github.com/fanvsfan',
      followers_url: 'https://api.github.com/users/fanvsfan/followers',
      following_url:
        'https://api.github.com/users/fanvsfan/following{/other_user}',
      gists_url: 'https://api.github.com/users/fanvsfan/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/fanvsfan/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/fanvsfan/subscriptions',
      organizations_url: 'https://api.github.com/users/fanvsfan/orgs',
      repos_url: 'https://api.github.com/users/fanvsfan/repos',
      events_url: 'https://api.github.com/users/fanvsfan/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/fanvsfan/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'tomtt',
      id: 31,
      node_id: 'MDQ6VXNlcjMx',
      avatar_url: 'https://avatars.githubusercontent.com/u/31?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/tomtt',
      html_url: 'https://github.com/tomtt',
      followers_url: 'https://api.github.com/users/tomtt/followers',
      following_url:
        'https://api.github.com/users/tomtt/following{/other_user}',
      gists_url: 'https://api.github.com/users/tomtt/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/tomtt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/tomtt/subscriptions',
      organizations_url: 'https://api.github.com/users/tomtt/orgs',
      repos_url: 'https://api.github.com/users/tomtt/repos',
      events_url: 'https://api.github.com/users/tomtt/events{/privacy}',
      received_events_url: 'https://api.github.com/users/tomtt/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'railsjitsu',
      id: 32,
      node_id: 'MDQ6VXNlcjMy',
      avatar_url: 'https://avatars.githubusercontent.com/u/32?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/railsjitsu',
      html_url: 'https://github.com/railsjitsu',
      followers_url: 'https://api.github.com/users/railsjitsu/followers',
      following_url:
        'https://api.github.com/users/railsjitsu/following{/other_user}',
      gists_url: 'https://api.github.com/users/railsjitsu/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/railsjitsu/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/railsjitsu/subscriptions',
      organizations_url: 'https://api.github.com/users/railsjitsu/orgs',
      repos_url: 'https://api.github.com/users/railsjitsu/repos',
      events_url: 'https://api.github.com/users/railsjitsu/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/railsjitsu/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'nitay',
      id: 34,
      node_id: 'MDQ6VXNlcjM0',
      avatar_url: 'https://avatars.githubusercontent.com/u/34?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/nitay',
      html_url: 'https://github.com/nitay',
      followers_url: 'https://api.github.com/users/nitay/followers',
      following_url:
        'https://api.github.com/users/nitay/following{/other_user}',
      gists_url: 'https://api.github.com/users/nitay/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/nitay/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/nitay/subscriptions',
      organizations_url: 'https://api.github.com/users/nitay/orgs',
      repos_url: 'https://api.github.com/users/nitay/repos',
      events_url: 'https://api.github.com/users/nitay/events{/privacy}',
      received_events_url: 'https://api.github.com/users/nitay/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'kevwil',
      id: 35,
      node_id: 'MDQ6VXNlcjM1',
      avatar_url: 'https://avatars.githubusercontent.com/u/35?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kevwil',
      html_url: 'https://github.com/kevwil',
      followers_url: 'https://api.github.com/users/kevwil/followers',
      following_url:
        'https://api.github.com/users/kevwil/following{/other_user}',
      gists_url: 'https://api.github.com/users/kevwil/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kevwil/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kevwil/subscriptions',
      organizations_url: 'https://api.github.com/users/kevwil/orgs',
      repos_url: 'https://api.github.com/users/kevwil/repos',
      events_url: 'https://api.github.com/users/kevwil/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/kevwil/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'KirinDave',
      id: 36,
      node_id: 'MDQ6VXNlcjM2',
      avatar_url: 'https://avatars.githubusercontent.com/u/36?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/KirinDave',
      html_url: 'https://github.com/KirinDave',
      followers_url: 'https://api.github.com/users/KirinDave/followers',
      following_url:
        'https://api.github.com/users/KirinDave/following{/other_user}',
      gists_url: 'https://api.github.com/users/KirinDave/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/KirinDave/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/KirinDave/subscriptions',
      organizations_url: 'https://api.github.com/users/KirinDave/orgs',
      repos_url: 'https://api.github.com/users/KirinDave/repos',
      events_url: 'https://api.github.com/users/KirinDave/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/KirinDave/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'jamesgolick',
      id: 37,
      node_id: 'MDQ6VXNlcjM3',
      avatar_url: 'https://avatars.githubusercontent.com/u/37?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jamesgolick',
      html_url: 'https://github.com/jamesgolick',
      followers_url: 'https://api.github.com/users/jamesgolick/followers',
      following_url:
        'https://api.github.com/users/jamesgolick/following{/other_user}',
      gists_url: 'https://api.github.com/users/jamesgolick/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/jamesgolick/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/jamesgolick/subscriptions',
      organizations_url: 'https://api.github.com/users/jamesgolick/orgs',
      repos_url: 'https://api.github.com/users/jamesgolick/repos',
      events_url: 'https://api.github.com/users/jamesgolick/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/jamesgolick/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'atmos',
      id: 38,
      node_id: 'MDQ6VXNlcjM4',
      avatar_url: 'https://avatars.githubusercontent.com/u/38?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/atmos',
      html_url: 'https://github.com/atmos',
      followers_url: 'https://api.github.com/users/atmos/followers',
      following_url:
        'https://api.github.com/users/atmos/following{/other_user}',
      gists_url: 'https://api.github.com/users/atmos/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/atmos/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/atmos/subscriptions',
      organizations_url: 'https://api.github.com/users/atmos/orgs',
      repos_url: 'https://api.github.com/users/atmos/repos',
      events_url: 'https://api.github.com/users/atmos/events{/privacy}',
      received_events_url: 'https://api.github.com/users/atmos/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'errfree',
      id: 44,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0',
      avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/errfree',
      html_url: 'https://github.com/errfree',
      followers_url: 'https://api.github.com/users/errfree/followers',
      following_url:
        'https://api.github.com/users/errfree/following{/other_user}',
      gists_url: 'https://api.github.com/users/errfree/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/errfree/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/errfree/subscriptions',
      organizations_url: 'https://api.github.com/users/errfree/orgs',
      repos_url: 'https://api.github.com/users/errfree/repos',
      events_url: 'https://api.github.com/users/errfree/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/errfree/received_events',
      type: 'Organization',
      site_admin: false,
    },
    {
      login: 'mojodna',
      id: 45,
      node_id: 'MDQ6VXNlcjQ1',
      avatar_url: 'https://avatars.githubusercontent.com/u/45?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojodna',
      html_url: 'https://github.com/mojodna',
      followers_url: 'https://api.github.com/users/mojodna/followers',
      following_url:
        'https://api.github.com/users/mojodna/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojodna/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mojodna/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojodna/subscriptions',
      organizations_url: 'https://api.github.com/users/mojodna/orgs',
      repos_url: 'https://api.github.com/users/mojodna/repos',
      events_url: 'https://api.github.com/users/mojodna/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mojodna/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'bmizerany',
      id: 46,
      node_id: 'MDQ6VXNlcjQ2',
      avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/bmizerany',
      html_url: 'https://github.com/bmizerany',
      followers_url: 'https://api.github.com/users/bmizerany/followers',
      following_url:
        'https://api.github.com/users/bmizerany/following{/other_user}',
      gists_url: 'https://api.github.com/users/bmizerany/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/bmizerany/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/bmizerany/subscriptions',
      organizations_url: 'https://api.github.com/users/bmizerany/orgs',
      repos_url: 'https://api.github.com/users/bmizerany/repos',
      events_url: 'https://api.github.com/users/bmizerany/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/bmizerany/received_events',
      type: 'User',
      site_admin: false,
    },
    {
      login: 'jnewland',
      id: 47,
      node_id: 'MDQ6VXNlcjQ3',
      avatar_url: 'https://avatars.githubusercontent.com/u/47?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jnewland',
      html_url: 'https://github.com/jnewland',
      followers_url: 'https://api.github.com/users/jnewland/followers',
      following_url:
        'https://api.github.com/users/jnewland/following{/other_user}',
      gists_url: 'https://api.github.com/users/jnewland/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/jnewland/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jnewland/subscriptions',
      organizations_url: 'https://api.github.com/users/jnewland/orgs',
      repos_url: 'https://api.github.com/users/jnewland/repos',
      events_url: 'https://api.github.com/users/jnewland/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/jnewland/received_events',
      type: 'User',
      site_admin: false,
    },
  ],
};

export const mockUsersListResponse = {
  usersList: [
    {
      login: 'defunkt',
      id: 2,
    },
    {
      login: 'pjhyett',
      id: 3,
    },
    {
      login: 'wycats',
      id: 4,
    },
    {
      login: 'ezmobius',
      id: 5,
    },
    {
      login: 'ivey',
      id: 6,
    },
    {
      login: 'evanphx',
      id: 7,
    },
    {
      login: 'vanpelt',
      id: 17,
    },
    {
      login: 'wayneeseguin',
      id: 18,
    },
    {
      login: 'brynary',
      id: 19,
    },
    {
      login: 'kevinclark',
      id: 20,
    },
    {
      login: 'technoweenie',
      id: 21,
    },
    {
      login: 'macournoyer',
      id: 22,
    },
    {
      login: 'takeo',
      id: 23,
    },
    {
      login: 'caged',
      id: 25,
    },
    {
      login: 'topfunky',
      id: 26,
    },
    {
      login: 'anotherjesse',
      id: 27,
    },
    {
      login: 'roland',
      id: 28,
    },
    {
      login: 'lukas',
      id: 29,
    },
    {
      login: 'fanvsfan',
      id: 30,
    },
    {
      login: 'tomtt',
      id: 31,
    },
    {
      login: 'railsjitsu',
      id: 32,
    },
    {
      login: 'nitay',
      id: 34,
    },
    {
      login: 'kevwil',
      id: 35,
    },
    {
      login: 'KirinDave',
      id: 36,
    },
    {
      login: 'jamesgolick',
      id: 37,
    },
    {
      login: 'atmos',
      id: 38,
    },
    {
      login: 'errfree',
      id: 44,
    },
    {
      login: 'mojodna',
      id: 45,
    },
    {
      login: 'bmizerany',
      id: 46,
    },
    {
      login: 'jnewland',
      id: 47,
    },
  ],
  pageSize: 30,
  page: 1,
};

export const mockUserDetail = {
  id: 107071638,
  login: 'acristoni',
  URL: 'https://api.github.com/users/acristoni',
  crationAccoutDate: '2022-06-07T18:18:14Z',
};

export const mockUserDetailFromGitHub = {
  status: 200,
  url: 'https://api.github.com/users/acristoni',
  headers: {
    'accept-ranges': 'bytes',
    'access-control-allow-origin': '*',
    'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'public, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-length': 440,
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 27 Dec 2022 22:04:49 GMT',
    etag: 'W/"f16a955abed855d8b5cb85d180f0b0d06f7b8048857d7b772d181e4a9b84e2db"',
    'last-modified': 'Sat, 17 Dec 2022 13:17:01 GMT',
    'referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-api-version-selected': '2022-11-28',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'A0E6:3057:1760DC:19F3CA:63AB6C01',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '57',
    'x-ratelimit-reset': '1672181273',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '3',
    'x-xss-protection': '0',
  },
  data: {
    login: 'acristoni',
    id: 107071638,
    node_id: 'U_kgDOBmHIlg',
    avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/acristoni',
    html_url: 'https://github.com/acristoni',
    followers_url: 'https://api.github.com/users/acristoni/followers',
    following_url:
      'https://api.github.com/users/acristoni/following{/other_user}',
    gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/acristoni/subscriptions',
    organizations_url: 'https://api.github.com/users/acristoni/orgs',
    repos_url: 'https://api.github.com/users/acristoni/repos',
    events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/acristoni/received_events',
    type: 'User',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 22,
    public_gists: 0,
    followers: 3,
    following: 2,
    created_at: '2022-06-07T18:18:14Z',
    updated_at: '2022-12-17T13:17:01Z',
  },
};

export const mockUserRepositories = [
  {
    id: 518512384,
    name: 'AirBnb-Clone',
    URL: 'https://github.com/acristoni/AirBnb-Clone',
  },
  {
    id: 518329655,
    name: 'api-dioshopping',
    URL: 'https://github.com/acristoni/api-dioshopping',
  },
  {
    id: 503106504,
    name: 'app-mosquito',
    URL: 'https://github.com/acristoni/app-mosquito',
  },
  {
    id: 522710246,
    name: 'Client_Agencia_Veiculos',
    URL: 'https://github.com/acristoni/Client_Agencia_Veiculos',
  },
  {
    id: 504265815,
    name: 'desafio-typescript',
    URL: 'https://github.com/acristoni/desafio-typescript',
  },
  {
    id: 518501596,
    name: 'Digital-Business-Card',
    URL: 'https://github.com/acristoni/Digital-Business-Card',
  },
  {
    id: 518329419,
    name: 'dioshopping',
    URL: 'https://github.com/acristoni/dioshopping',
  },
  {
    id: 513355219,
    name: 'github-api-interface',
    URL: 'https://github.com/acristoni/github-api-interface',
  },
  {
    id: 523916381,
    name: 'GraphQL-event-booking',
    URL: 'https://github.com/acristoni/GraphQL-event-booking',
  },
  {
    id: 501773189,
    name: 'instagram-dio',
    URL: 'https://github.com/acristoni/instagram-dio',
  },
  {
    id: 576408541,
    name: 'JavaScript-Data-Structure',
    URL: 'https://github.com/acristoni/JavaScript-Data-Structure',
  },
  {
    id: 518514012,
    name: 'my-travel',
    URL: 'https://github.com/acristoni/my-travel',
  },
  {
    id: 518515500,
    name: 'Naruto-Quotes',
    URL: 'https://github.com/acristoni/Naruto-Quotes',
  },
  {
    id: 569356521,
    name: 'Portfolio',
    URL: 'https://github.com/acristoni/Portfolio',
  },
  {
    id: 518494615,
    name: 'React-Info',
    URL: 'https://github.com/acristoni/React-Info',
  },
  {
    id: 525875188,
    name: 'sample-analytics',
    URL: 'https://github.com/acristoni/sample-analytics',
  },
  {
    id: 525860814,
    name: 'sample-backend',
    URL: 'https://github.com/acristoni/sample-backend',
  },
  {
    id: 525875037,
    name: 'sample-communication',
    URL: 'https://github.com/acristoni/sample-communication',
  },
  {
    id: 522695486,
    name: 'Server_Agencia_Veiculos',
    URL: 'https://github.com/acristoni/Server_Agencia_Veiculos',
  },
  {
    id: 502023339,
    name: 'Sonic-Pixel-Art',
    URL: 'https://github.com/acristoni/Sonic-Pixel-Art',
  },
  {
    id: 501003472,
    name: 'TudoSobreALua',
    URL: 'https://github.com/acristoni/TudoSobreALua',
  },
  {
    id: 581555486,
    name: 'youtube-serie-redux-front-end',
    URL: 'https://github.com/acristoni/youtube-serie-redux-front-end',
  },
];

export const mockUserRepositoriesFromGitHub = {
  status: 200,
  url: 'https://api.github.com/users/acristoni',
  headers: {
    'accept-ranges': 'bytes',
    'access-control-allow-origin': '*',
    'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'public, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-length': 440,
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 27 Dec 2022 22:04:49 GMT',
    etag: 'W/"f16a955abed855d8b5cb85d180f0b0d06f7b8048857d7b772d181e4a9b84e2db"',
    'last-modified': 'Sat, 17 Dec 2022 13:17:01 GMT',
    'referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-api-version-selected': '2022-11-28',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'A0E6:3057:1760DC:19F3CA:63AB6C01',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '57',
    'x-ratelimit-reset': '1672181273',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '3',
    'x-xss-protection': '0',
  },
  data: [
    {
      id: 518512384,
      node_id: 'R_kgDOHuffAA',
      name: 'AirBnb-Clone',
      full_name: 'acristoni/AirBnb-Clone',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/AirBnb-Clone',
      description: 'AirBnb Clone in ReacJS build during Scrimba course',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/AirBnb-Clone',
      forks_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/AirBnb-Clone/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/AirBnb-Clone/deployments',
      created_at: '2022-07-27T15:24:33Z',
      updated_at: '2022-07-27T15:27:44Z',
      pushed_at: '2022-07-27T15:27:42Z',
      git_url: 'git://github.com/acristoni/AirBnb-Clone.git',
      ssh_url: 'git@github.com:acristoni/AirBnb-Clone.git',
      clone_url: 'https://github.com/acristoni/AirBnb-Clone.git',
      svn_url: 'https://github.com/acristoni/AirBnb-Clone',
      homepage: null,
      size: 1029,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 518329655,
      node_id: 'R_kgDOHuUVNw',
      name: 'api-dioshopping',
      full_name: 'acristoni/api-dioshopping',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/api-dioshopping',
      description:
        'Backend do projeto final do Bootcamp DIO/Impulso com node e typescript',
      fork: true,
      url: 'https://api.github.com/repos/acristoni/api-dioshopping',
      forks_url: 'https://api.github.com/repos/acristoni/api-dioshopping/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/api-dioshopping/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/api-dioshopping/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/api-dioshopping/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/api-dioshopping/deployments',
      created_at: '2022-07-27T06:03:36Z',
      updated_at: '2022-07-31T02:05:38Z',
      pushed_at: '2022-07-31T02:27:22Z',
      git_url: 'git://github.com/acristoni/api-dioshopping.git',
      ssh_url: 'git@github.com:acristoni/api-dioshopping.git',
      clone_url: 'https://github.com/acristoni/api-dioshopping.git',
      svn_url: 'https://github.com/acristoni/api-dioshopping',
      homepage: null,
      size: 117,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 503106504,
      node_id: 'R_kgDOHfzLyA',
      name: 'app-mosquito',
      full_name: 'acristoni/app-mosquito',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/app-mosquito',
      description: 'App de jogo para matar mosquitos feito em Javascript',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/app-mosquito',
      forks_url: 'https://api.github.com/repos/acristoni/app-mosquito/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/app-mosquito/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/app-mosquito/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/app-mosquito/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/app-mosquito/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/app-mosquito/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/app-mosquito/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/app-mosquito/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/app-mosquito/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/app-mosquito/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/app-mosquito/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/app-mosquito/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/app-mosquito/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/app-mosquito/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/app-mosquito/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/app-mosquito/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/app-mosquito/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/app-mosquito/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/app-mosquito/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/app-mosquito/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/app-mosquito/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/app-mosquito/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/app-mosquito/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/app-mosquito/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/app-mosquito/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/app-mosquito/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/app-mosquito/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/app-mosquito/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/app-mosquito/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/app-mosquito/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/app-mosquito/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/app-mosquito/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/app-mosquito/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/app-mosquito/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/app-mosquito/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/app-mosquito/deployments',
      created_at: '2022-06-13T20:33:08Z',
      updated_at: '2022-06-13T20:35:52Z',
      pushed_at: '2022-07-27T15:10:50Z',
      git_url: 'git://github.com/acristoni/app-mosquito.git',
      ssh_url: 'git@github.com:acristoni/app-mosquito.git',
      clone_url: 'https://github.com/acristoni/app-mosquito.git',
      svn_url: 'https://github.com/acristoni/app-mosquito',
      homepage: null,
      size: 1207,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 522710246,
      node_id: 'R_kgDOHyfs5g',
      name: 'Client_Agencia_Veiculos',
      full_name: 'acristoni/Client_Agencia_Veiculos',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Client_Agencia_Veiculos',
      description: 'FrontEnd da Agencia de Veiculos em ReactJS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos',
      forks_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Client_Agencia_Veiculos/deployments',
      created_at: '2022-08-08T21:18:38Z',
      updated_at: '2022-08-08T21:20:34Z',
      pushed_at: '2022-08-09T20:45:25Z',
      git_url: 'git://github.com/acristoni/Client_Agencia_Veiculos.git',
      ssh_url: 'git@github.com:acristoni/Client_Agencia_Veiculos.git',
      clone_url: 'https://github.com/acristoni/Client_Agencia_Veiculos.git',
      svn_url: 'https://github.com/acristoni/Client_Agencia_Veiculos',
      homepage: null,
      size: 892,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 504265815,
      node_id: 'R_kgDOHg58Vw',
      name: 'desafio-typescript',
      full_name: 'acristoni/desafio-typescript',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/desafio-typescript',
      description: 'Desafio de Projeto do Bootcamp JavaScript Impulso DIO',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/desafio-typescript',
      forks_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/desafio-typescript/deployments',
      created_at: '2022-06-16T18:33:19Z',
      updated_at: '2022-06-17T20:26:02Z',
      pushed_at: '2022-06-20T12:02:09Z',
      git_url: 'git://github.com/acristoni/desafio-typescript.git',
      ssh_url: 'git@github.com:acristoni/desafio-typescript.git',
      clone_url: 'https://github.com/acristoni/desafio-typescript.git',
      svn_url: 'https://github.com/acristoni/desafio-typescript',
      homepage: null,
      size: 12,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 518501596,
      node_id: 'R_kgDOHue03A',
      name: 'Digital-Business-Card',
      full_name: 'acristoni/Digital-Business-Card',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Digital-Business-Card',
      description: 'Digital Business Card build in ReactJS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Digital-Business-Card',
      forks_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Digital-Business-Card/deployments',
      created_at: '2022-07-27T14:55:19Z',
      updated_at: '2022-07-27T15:02:58Z',
      pushed_at: '2022-07-27T15:02:55Z',
      git_url: 'git://github.com/acristoni/Digital-Business-Card.git',
      ssh_url: 'git@github.com:acristoni/Digital-Business-Card.git',
      clone_url: 'https://github.com/acristoni/Digital-Business-Card.git',
      svn_url: 'https://github.com/acristoni/Digital-Business-Card',
      homepage: null,
      size: 307,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 518329419,
      node_id: 'R_kgDOHuUUSw',
      name: 'dioshopping',
      full_name: 'acristoni/dioshopping',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/dioshopping',
      description:
        'Front-end  de E-commerce para projeto final no bootcamp Dio/Impulso',
      fork: true,
      url: 'https://api.github.com/repos/acristoni/dioshopping',
      forks_url: 'https://api.github.com/repos/acristoni/dioshopping/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/dioshopping/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/dioshopping/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/dioshopping/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/dioshopping/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/dioshopping/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/dioshopping/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/dioshopping/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/dioshopping/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/dioshopping/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/dioshopping/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/dioshopping/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/dioshopping/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/dioshopping/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/dioshopping/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/dioshopping/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/dioshopping/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/dioshopping/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/dioshopping/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/dioshopping/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/dioshopping/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/dioshopping/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/dioshopping/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/dioshopping/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/dioshopping/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/dioshopping/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/dioshopping/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/dioshopping/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/dioshopping/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/dioshopping/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/dioshopping/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/dioshopping/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/dioshopping/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/dioshopping/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/dioshopping/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/dioshopping/deployments',
      created_at: '2022-07-27T06:02:47Z',
      updated_at: '2022-07-31T02:07:55Z',
      pushed_at: '2022-07-31T02:28:15Z',
      git_url: 'git://github.com/acristoni/dioshopping.git',
      ssh_url: 'git@github.com:acristoni/dioshopping.git',
      clone_url: 'https://github.com/acristoni/dioshopping.git',
      svn_url: 'https://github.com/acristoni/dioshopping',
      homepage: null,
      size: 11641,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 513355219,
      node_id: 'R_kgDOHpkt0w',
      name: 'github-api-interface',
      full_name: 'acristoni/github-api-interface',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/github-api-interface',
      description:
        'Desafio de projeto, criando um app ReactJS totalmente componetizado, do Bootcampo DIO/Impulso',
      fork: true,
      url: 'https://api.github.com/repos/acristoni/github-api-interface',
      forks_url:
        'https://api.github.com/repos/acristoni/github-api-interface/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/github-api-interface/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/github-api-interface/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/github-api-interface/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/github-api-interface/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/github-api-interface/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/github-api-interface/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/github-api-interface/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/github-api-interface/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/github-api-interface/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/github-api-interface/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/github-api-interface/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/github-api-interface/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/github-api-interface/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/github-api-interface/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/github-api-interface/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/github-api-interface/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/github-api-interface/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/github-api-interface/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/github-api-interface/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/github-api-interface/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/github-api-interface/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/github-api-interface/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/github-api-interface/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/github-api-interface/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/github-api-interface/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/github-api-interface/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/github-api-interface/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/github-api-interface/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/github-api-interface/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/github-api-interface/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/github-api-interface/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/github-api-interface/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/github-api-interface/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/github-api-interface/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/github-api-interface/deployments',
      created_at: '2022-07-13T02:30:52Z',
      updated_at: '2022-07-15T14:12:12Z',
      pushed_at: '2022-08-03T03:25:36Z',
      git_url: 'git://github.com/acristoni/github-api-interface.git',
      ssh_url: 'git@github.com:acristoni/github-api-interface.git',
      clone_url: 'https://github.com/acristoni/github-api-interface.git',
      svn_url: 'https://github.com/acristoni/github-api-interface',
      homepage: null,
      size: 1260,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 523916381,
      node_id: 'R_kgDOHzpUXQ',
      name: 'GraphQL-event-booking',
      full_name: 'acristoni/GraphQL-event-booking',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/GraphQL-event-booking',
      description:
        'API em NodeJS, usando o frameword express para criar a API, mongoose para interagir com o banco de dados MongoDB e GraphQL para os endpoints da aplicação',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/GraphQL-event-booking',
      forks_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/GraphQL-event-booking/deployments',
      created_at: '2022-08-12T01:15:57Z',
      updated_at: '2022-08-12T05:52:53Z',
      pushed_at: '2022-08-13T03:38:42Z',
      git_url: 'git://github.com/acristoni/GraphQL-event-booking.git',
      ssh_url: 'git@github.com:acristoni/GraphQL-event-booking.git',
      clone_url: 'https://github.com/acristoni/GraphQL-event-booking.git',
      svn_url: 'https://github.com/acristoni/GraphQL-event-booking',
      homepage: null,
      size: 42,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 501773189,
      node_id: 'R_kgDOHehzhQ',
      name: 'instagram-dio',
      full_name: 'acristoni/instagram-dio',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/instagram-dio',
      description: 'Desafio de Projeto Bootcamp Impulso Javascript Evolution',
      fork: true,
      url: 'https://api.github.com/repos/acristoni/instagram-dio',
      forks_url: 'https://api.github.com/repos/acristoni/instagram-dio/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/instagram-dio/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/instagram-dio/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/instagram-dio/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/instagram-dio/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/instagram-dio/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/instagram-dio/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/instagram-dio/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/instagram-dio/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/instagram-dio/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/instagram-dio/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/instagram-dio/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/instagram-dio/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/instagram-dio/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/instagram-dio/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/instagram-dio/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/instagram-dio/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/instagram-dio/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/instagram-dio/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/instagram-dio/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/instagram-dio/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/instagram-dio/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/instagram-dio/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/instagram-dio/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/instagram-dio/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/instagram-dio/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/instagram-dio/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/instagram-dio/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/instagram-dio/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/instagram-dio/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/instagram-dio/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/instagram-dio/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/instagram-dio/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/instagram-dio/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/instagram-dio/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/instagram-dio/deployments',
      created_at: '2022-06-09T18:50:59Z',
      updated_at: '2022-06-09T20:36:57Z',
      pushed_at: '2022-06-09T20:48:46Z',
      git_url: 'git://github.com/acristoni/instagram-dio.git',
      ssh_url: 'git@github.com:acristoni/instagram-dio.git',
      clone_url: 'https://github.com/acristoni/instagram-dio.git',
      svn_url: 'https://github.com/acristoni/instagram-dio',
      homepage: null,
      size: 1217,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'CSS',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 576408541,
      node_id: 'R_kgDOIltL3Q',
      name: 'JavaScript-Data-Structure',
      full_name: 'acristoni/JavaScript-Data-Structure',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/JavaScript-Data-Structure',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/acristoni/JavaScript-Data-Structure',
      forks_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/JavaScript-Data-Structure/deployments',
      created_at: '2022-12-09T19:30:17Z',
      updated_at: '2022-12-09T19:30:24Z',
      pushed_at: '2022-12-22T20:16:44Z',
      git_url: 'git://github.com/acristoni/JavaScript-Data-Structure.git',
      ssh_url: 'git@github.com:acristoni/JavaScript-Data-Structure.git',
      clone_url: 'https://github.com/acristoni/JavaScript-Data-Structure.git',
      svn_url: 'https://github.com/acristoni/JavaScript-Data-Structure',
      homepage: null,
      size: 108,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 518514012,
      node_id: 'R_kgDOHuflXA',
      name: 'my-travel',
      full_name: 'acristoni/my-travel',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/my-travel',
      description: 'My travel journal "solo project" in ReactJS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/my-travel',
      forks_url: 'https://api.github.com/repos/acristoni/my-travel/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/my-travel/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/my-travel/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/my-travel/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/my-travel/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/my-travel/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/my-travel/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/my-travel/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/my-travel/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/my-travel/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/my-travel/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/my-travel/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/my-travel/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/my-travel/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/my-travel/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/my-travel/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/my-travel/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/my-travel/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/my-travel/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/my-travel/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/my-travel/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/my-travel/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/my-travel/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/my-travel/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/my-travel/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/my-travel/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/my-travel/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/my-travel/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/my-travel/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/my-travel/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/my-travel/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/my-travel/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/my-travel/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/my-travel/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/my-travel/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/my-travel/deployments',
      created_at: '2022-07-27T15:29:02Z',
      updated_at: '2022-07-27T15:31:21Z',
      pushed_at: '2022-07-27T15:31:18Z',
      git_url: 'git://github.com/acristoni/my-travel.git',
      ssh_url: 'git@github.com:acristoni/my-travel.git',
      clone_url: 'https://github.com/acristoni/my-travel.git',
      svn_url: 'https://github.com/acristoni/my-travel',
      homepage: null,
      size: 398,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 518515500,
      node_id: 'R_kgDOHufrLA',
      name: 'Naruto-Quotes',
      full_name: 'acristoni/Naruto-Quotes',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Naruto-Quotes',
      description: 'Naruto quotes generator web app',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Naruto-Quotes',
      forks_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/Naruto-Quotes/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Naruto-Quotes/deployments',
      created_at: '2022-07-27T15:33:15Z',
      updated_at: '2022-07-27T15:35:30Z',
      pushed_at: '2022-07-27T15:35:27Z',
      git_url: 'git://github.com/acristoni/Naruto-Quotes.git',
      ssh_url: 'git@github.com:acristoni/Naruto-Quotes.git',
      clone_url: 'https://github.com/acristoni/Naruto-Quotes.git',
      svn_url: 'https://github.com/acristoni/Naruto-Quotes',
      homepage: null,
      size: 955,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 569356521,
      node_id: 'R_kgDOIe-w6Q',
      name: 'Portfolio',
      full_name: 'acristoni/Portfolio',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Portfolio',
      description:
        'Page of my personal portfolio where you can find out a little more about my work',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Portfolio',
      forks_url: 'https://api.github.com/repos/acristoni/Portfolio/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Portfolio/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Portfolio/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/Portfolio/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/Portfolio/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Portfolio/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/Portfolio/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Portfolio/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Portfolio/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/Portfolio/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Portfolio/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Portfolio/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Portfolio/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Portfolio/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Portfolio/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Portfolio/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Portfolio/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Portfolio/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Portfolio/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Portfolio/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Portfolio/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Portfolio/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Portfolio/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Portfolio/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Portfolio/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Portfolio/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/Portfolio/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Portfolio/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Portfolio/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Portfolio/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Portfolio/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Portfolio/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Portfolio/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Portfolio/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Portfolio/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Portfolio/deployments',
      created_at: '2022-11-22T16:35:01Z',
      updated_at: '2022-11-22T16:57:26Z',
      pushed_at: '2022-12-23T11:55:21Z',
      git_url: 'git://github.com/acristoni/Portfolio.git',
      ssh_url: 'git@github.com:acristoni/Portfolio.git',
      clone_url: 'https://github.com/acristoni/Portfolio.git',
      svn_url: 'https://github.com/acristoni/Portfolio',
      homepage: null,
      size: 564,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 518494615,
      node_id: 'R_kgDOHueZlw',
      name: 'React-Info',
      full_name: 'acristoni/React-Info',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/React-Info',
      description: 'First static web page build in ReactJS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/React-Info',
      forks_url: 'https://api.github.com/repos/acristoni/React-Info/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/React-Info/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/React-Info/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/React-Info/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/React-Info/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/React-Info/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/React-Info/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/React-Info/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/React-Info/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/React-Info/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/React-Info/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/React-Info/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/React-Info/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/React-Info/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/React-Info/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/React-Info/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/React-Info/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/React-Info/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/React-Info/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/React-Info/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/React-Info/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/React-Info/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/React-Info/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/React-Info/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/React-Info/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/React-Info/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/React-Info/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/React-Info/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/React-Info/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/React-Info/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/React-Info/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/React-Info/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/React-Info/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/React-Info/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/React-Info/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/React-Info/deployments',
      created_at: '2022-07-27T14:36:24Z',
      updated_at: '2022-07-27T14:46:35Z',
      pushed_at: '2022-07-27T14:46:32Z',
      git_url: 'git://github.com/acristoni/React-Info.git',
      ssh_url: 'git@github.com:acristoni/React-Info.git',
      clone_url: 'https://github.com/acristoni/React-Info.git',
      svn_url: 'https://github.com/acristoni/React-Info',
      homepage: null,
      size: 335,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 525875188,
      node_id: 'R_kgDOH1g39A',
      name: 'sample-analytics',
      full_name: 'acristoni/sample-analytics',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/sample-analytics',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/acristoni/sample-analytics',
      forks_url:
        'https://api.github.com/repos/acristoni/sample-analytics/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/sample-analytics/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/sample-analytics/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/sample-analytics/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/sample-analytics/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/sample-analytics/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/sample-analytics/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/sample-analytics/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/sample-analytics/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/sample-analytics/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/sample-analytics/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/sample-analytics/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/sample-analytics/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/sample-analytics/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/sample-analytics/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/sample-analytics/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/sample-analytics/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/sample-analytics/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/sample-analytics/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/sample-analytics/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/sample-analytics/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/sample-analytics/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/sample-analytics/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/sample-analytics/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/sample-analytics/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/sample-analytics/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/sample-analytics/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/sample-analytics/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/sample-analytics/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/sample-analytics/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/sample-analytics/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/sample-analytics/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/sample-analytics/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/sample-analytics/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/sample-analytics/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/sample-analytics/deployments',
      created_at: '2022-08-17T16:33:42Z',
      updated_at: '2022-08-17T16:33:49Z',
      pushed_at: '2022-08-17T19:22:34Z',
      git_url: 'git://github.com/acristoni/sample-analytics.git',
      ssh_url: 'git@github.com:acristoni/sample-analytics.git',
      clone_url: 'https://github.com/acristoni/sample-analytics.git',
      svn_url: 'https://github.com/acristoni/sample-analytics',
      homepage: null,
      size: 93,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 525860814,
      node_id: 'R_kgDOH1f_zg',
      name: 'sample-backend',
      full_name: 'acristoni/sample-backend',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/sample-backend',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/acristoni/sample-backend',
      forks_url: 'https://api.github.com/repos/acristoni/sample-backend/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/sample-backend/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/sample-backend/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/sample-backend/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/sample-backend/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/sample-backend/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/sample-backend/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/sample-backend/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/sample-backend/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/sample-backend/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/sample-backend/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/sample-backend/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/sample-backend/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/sample-backend/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/sample-backend/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/sample-backend/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/sample-backend/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/sample-backend/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/sample-backend/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/sample-backend/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/sample-backend/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/sample-backend/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/sample-backend/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/sample-backend/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/sample-backend/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/sample-backend/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/sample-backend/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/sample-backend/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/sample-backend/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/sample-backend/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/sample-backend/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/sample-backend/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/sample-backend/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/sample-backend/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/sample-backend/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/sample-backend/deployments',
      created_at: '2022-08-17T15:52:05Z',
      updated_at: '2022-08-17T16:34:41Z',
      pushed_at: '2022-08-17T19:22:21Z',
      git_url: 'git://github.com/acristoni/sample-backend.git',
      ssh_url: 'git@github.com:acristoni/sample-backend.git',
      clone_url: 'https://github.com/acristoni/sample-backend.git',
      svn_url: 'https://github.com/acristoni/sample-backend',
      homepage: null,
      size: 95,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 525875037,
      node_id: 'R_kgDOH1g3XQ',
      name: 'sample-communication',
      full_name: 'acristoni/sample-communication',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/sample-communication',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/acristoni/sample-communication',
      forks_url:
        'https://api.github.com/repos/acristoni/sample-communication/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/sample-communication/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/sample-communication/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/sample-communication/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/sample-communication/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/sample-communication/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/sample-communication/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/sample-communication/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/sample-communication/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/sample-communication/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/sample-communication/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/sample-communication/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/sample-communication/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/sample-communication/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/sample-communication/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/sample-communication/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/sample-communication/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/sample-communication/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/sample-communication/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/sample-communication/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/sample-communication/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/sample-communication/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/sample-communication/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/sample-communication/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/sample-communication/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/sample-communication/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/sample-communication/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/sample-communication/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/sample-communication/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/sample-communication/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/sample-communication/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/sample-communication/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/sample-communication/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/sample-communication/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/sample-communication/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/sample-communication/deployments',
      created_at: '2022-08-17T16:33:15Z',
      updated_at: '2022-08-17T16:33:24Z',
      pushed_at: '2022-08-17T19:08:34Z',
      git_url: 'git://github.com/acristoni/sample-communication.git',
      ssh_url: 'git@github.com:acristoni/sample-communication.git',
      clone_url: 'https://github.com/acristoni/sample-communication.git',
      svn_url: 'https://github.com/acristoni/sample-communication',
      homepage: null,
      size: 93,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 522695486,
      node_id: 'R_kgDOHyezPg',
      name: 'Server_Agencia_Veiculos',
      full_name: 'acristoni/Server_Agencia_Veiculos',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Server_Agencia_Veiculos',
      description: 'BackEnd da aplicação Agência de Veículos em NestJS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos',
      forks_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Server_Agencia_Veiculos/deployments',
      created_at: '2022-08-08T20:21:35Z',
      updated_at: '2022-08-08T21:14:54Z',
      pushed_at: '2022-08-11T00:54:16Z',
      git_url: 'git://github.com/acristoni/Server_Agencia_Veiculos.git',
      ssh_url: 'git@github.com:acristoni/Server_Agencia_Veiculos.git',
      clone_url: 'https://github.com/acristoni/Server_Agencia_Veiculos.git',
      svn_url: 'https://github.com/acristoni/Server_Agencia_Veiculos',
      homepage: null,
      size: 170,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 502023339,
      node_id: 'R_kgDOHexEqw',
      name: 'Sonic-Pixel-Art',
      full_name: 'acristoni/Sonic-Pixel-Art',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/Sonic-Pixel-Art',
      description: 'Sonic feito em Pixel Art, apenas utilizando HTML e CSS',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/Sonic-Pixel-Art',
      forks_url: 'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/Sonic-Pixel-Art/deployments',
      created_at: '2022-06-10T11:48:56Z',
      updated_at: '2022-06-13T15:33:18Z',
      pushed_at: '2022-07-27T15:06:38Z',
      git_url: 'git://github.com/acristoni/Sonic-Pixel-Art.git',
      ssh_url: 'git@github.com:acristoni/Sonic-Pixel-Art.git',
      clone_url: 'https://github.com/acristoni/Sonic-Pixel-Art.git',
      svn_url: 'https://github.com/acristoni/Sonic-Pixel-Art',
      homepage: null,
      size: 4,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'main',
    },
    {
      id: 501003472,
      node_id: 'R_kgDOHdy00A',
      name: 'TudoSobreALua',
      full_name: 'acristoni/TudoSobreALua',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/TudoSobreALua',
      description:
        'Site, estilo blog, com informações interessantes sobre a Lua!',
      fork: false,
      url: 'https://api.github.com/repos/acristoni/TudoSobreALua',
      forks_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/teams',
      hooks_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/issues/events{/number}',
      events_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/branches{/branch}',
      tags_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/acristoni/TudoSobreALua/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/TudoSobreALua/deployments',
      created_at: '2022-06-07T21:04:31Z',
      updated_at: '2022-06-07T21:11:19Z',
      pushed_at: '2022-07-27T15:19:59Z',
      git_url: 'git://github.com/acristoni/TudoSobreALua.git',
      ssh_url: 'git@github.com:acristoni/TudoSobreALua.git',
      clone_url: 'https://github.com/acristoni/TudoSobreALua.git',
      svn_url: 'https://github.com/acristoni/TudoSobreALua',
      homepage: null,
      size: 22459,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'CSS',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 581555486,
      node_id: 'R_kgDOIqnVHg',
      name: 'youtube-serie-redux-front-end',
      full_name: 'acristoni/youtube-serie-redux-front-end',
      private: false,
      owner: {
        login: 'acristoni',
        id: 107071638,
        node_id: 'U_kgDOBmHIlg',
        avatar_url: 'https://avatars.githubusercontent.com/u/107071638?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/acristoni',
        html_url: 'https://github.com/acristoni',
        followers_url: 'https://api.github.com/users/acristoni/followers',
        following_url:
          'https://api.github.com/users/acristoni/following{/other_user}',
        gists_url: 'https://api.github.com/users/acristoni/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/acristoni/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/acristoni/subscriptions',
        organizations_url: 'https://api.github.com/users/acristoni/orgs',
        repos_url: 'https://api.github.com/users/acristoni/repos',
        events_url: 'https://api.github.com/users/acristoni/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/acristoni/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/acristoni/youtube-serie-redux-front-end',
      description: null,
      fork: true,
      url: 'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end',
      forks_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/forks',
      keys_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/teams',
      hooks_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/hooks',
      issue_events_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/events',
      assignees_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/tags',
      blobs_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/languages',
      stargazers_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/stargazers',
      contributors_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/contributors',
      subscribers_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/subscribers',
      subscription_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/subscription',
      commits_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/merges',
      archive_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/downloads',
      issues_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/labels{/name}',
      releases_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/acristoni/youtube-serie-redux-front-end/deployments',
      created_at: '2022-12-23T14:35:45Z',
      updated_at: '2022-12-21T23:21:54Z',
      pushed_at: '2022-12-11T14:11:25Z',
      git_url: 'git://github.com/acristoni/youtube-serie-redux-front-end.git',
      ssh_url: 'git@github.com:acristoni/youtube-serie-redux-front-end.git',
      clone_url:
        'https://github.com/acristoni/youtube-serie-redux-front-end.git',
      svn_url: 'https://github.com/acristoni/youtube-serie-redux-front-end',
      homepage: null,
      size: 999,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
  ],
};

export const mockUserZeroRepositoriesFromGitHub = {
  status: 200,
  url: 'https://api.github.com/users/acristoni',
  headers: {
    'accept-ranges': 'bytes',
    'access-control-allow-origin': '*',
    'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'public, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-length': 440,
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 27 Dec 2022 22:04:49 GMT',
    etag: 'W/"f16a955abed855d8b5cb85d180f0b0d06f7b8048857d7b772d181e4a9b84e2db"',
    'last-modified': 'Sat, 17 Dec 2022 13:17:01 GMT',
    'referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-api-version-selected': '2022-11-28',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'A0E6:3057:1760DC:19F3CA:63AB6C01',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '57',
    'x-ratelimit-reset': '1672181273',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '3',
    'x-xss-protection': '0',
  },
  data: [],
};
