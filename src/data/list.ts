import type { CardItem } from "../types/card";

export const list: CardItem[] = [
  {
    id: "item_001",
    badge: "測試主題",
    title: "測試頻道A",
    description: "測試簡介文字",
    thumbnail: "https://example.com/images/test-a.jpg",
    duration: "00:23",
    isLocked: true,
    tags: ["測試標籤1", "測試標籤2"],
    stats: {
      likes: 0,
      favorites: 0,
      views: 0,
    },
  },
  {
    id: "item_002",
    badge: null,
    title: "測試頻道B",
    description: "測試簡介文字",
    thumbnail: "https://example.com/images/test-b.jpg",
    duration: "00:21",
    isLocked: false,
    tags: ["測試標籤A", "測試標籤B", "測試標籤C"],
    stats: {
      likes: 0,
      favorites: 0,
      views: 0,
    },
  },
];
