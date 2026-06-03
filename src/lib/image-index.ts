export interface GalleryShow {
  id: string;
  label: string;
  images: string[];
}

export const GALLERY_SHOWS: GalleryShow[] = [
  {
    id: 'nse-imma',
    label: 'NSE / IMMA',
    images: [
      '/gallery/1000084960.jpg',
      '/gallery/1000084962.jpg',
      '/gallery/1000084963.jpg',
      '/gallery/1000084965.jpg',
      '/gallery/1000084967.jpg',
      '/gallery/1000084970.jpg',
      '/gallery/1000084971.jpg',
      '/gallery/1000084973.jpg',
      '/gallery/1000084979.jpg',
      '/gallery/1000084983.jpg',
      '/gallery/1000084986.jpg',
      '/gallery/1000084988.jpg',
      '/gallery/1000085004.jpg',
      '/gallery/1000085009.jpg',
    ],
  },
];

// All images flat (used by lightbox etc.)
export const GALLERY_IMAGES = GALLERY_SHOWS.flatMap((s) => s.images);
