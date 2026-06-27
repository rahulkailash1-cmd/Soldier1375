// ============================================================
// SITE CONFIGURATION — update these values to change links.
// ============================================================

export const SITE_CONFIG = {
  youtubeUrl: 'https://www.youtube.com/@Soldier1375Tamil',
  youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=Soldier1375Tamil',

  bloggerUrl:
    'https://retiredstudent1375.blogspot.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASqVSdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaddgcjk2q3ytKoRrUhPfn_4bF1gYkjlfrp5gVvyHR0tjdUugd-aN43_AQxP7w_aem_DtJc_urNIqWWvf5rgbJjDQ&m=1',

  amazonUrl:
    'https://www.amazon.in/l/27943762031?me=A3NXTJ4GO1RZIW&tag=ShopReferral_01617e92-5fbb-4db7-ac85-beae8aa0bb47&ref=sf_seller_app_share_new_ls_srb',

  instagramUrl:
    'https://www.instagram.com/aruljothiprime?igsh=MTBwZzE5cWc2dmJmMA==',

  contactEmail: 'frankbusiness1375@gmail.com',

  blogHeroImage: '/images/blog/1778227446490.png',
  homeHeroImage: '/images/home/file_00000000165c71f8bfe5d7631106bde9.png',
};

export const NAV_ITEMS = [
  { label: 'Home',    path: 'home'    },
  { label: 'Blog',    path: 'blog'    },
  { label: 'Store',   path: 'store'   },
  { label: 'About',   path: 'about'   },
  { label: 'Contact', path: 'contact' },
] as const;

export type PagePath = 'home' | 'blog' | 'store' | 'about' | 'contact';
