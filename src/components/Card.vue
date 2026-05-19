<script setup lang="ts">
import { ref } from 'vue'
import type { CardItem } from '../types/card'

const props = defineProps<{
  item: CardItem
}>()

const fallbackImage = `https://picsum.photos/seed/${props.item.id}/800/450`
const imageSrc = ref(props.item.thumbnail)

const handleImageError = () => {
  imageSrc.value = fallbackImage
}
</script>

<template>
  <article class="card">

    <header v-if="item.isLocked" class="card-header">
      <div class="title">
        <span v-if="item.badge" class="badge">{{ item.badge }}</span>
        <h2>{{ item.title }}</h2>
      </div>

      <button type="button">...</button>
    </header>

    <header v-else class="card-header unlock">
      <div class="title">
        <span v-if="item.badge" class="badge">{{ item.badge }}</span>
        <h2>{{ item.title }}</h2>
        <div class="tag-wrap">
          <div class="tags">
            <span v-for="tag in item.tags" :key="tag">#{{ tag }}</span>
          </div>
        </div>
      </div>

      <button type="button">...</button>
    </header>

    <p class="description">{{ item.description }}</p>

    <div class="card-image">
      <img :src="imageSrc" :alt="item.title" @error="handleImageError" />
      <span v-if="item.isLocked" class="lock">LOCK</span>
      <span v-else class="lock">PLAY</span>
      <span class="duration">{{ item.duration }}</span>
    </div>

    <div class="tag-wrap">
      <p>包含的標籤：</p>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag">#{{ tag }}</span>
      </div>
    </div>

    <div class="stats-wrap">
      <span>點讚 {{ item.stats.likes }} · </span>
      <span>收藏 {{ item.stats.favorites }} · </span>
      <span>觀看 {{ item.stats.views }}</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 16px;
  padding: 20px 16px;
  border-radius: 8px;
  background: #fff;
  text-align: left;
  box-shadow: 0 2px 10px 0 #ccc;
}

.card-header,
.title,
.tags,
.stats {
  display: flex;
  align-items: center;
}

.card-header {
  justify-content: space-between;
  gap: 12px;

  .title {
    gap: 12px;
    align-items: center;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 5px;
    background: #ff4040;
    color: #fff;
    font-weight: 700;
  }

  h2 {
    color: black;
    margin: 0;
  }

  button {
    border: 0;
    background: transparent;
    color: #888;
    font-size: 24px;
    cursor: pointer;
  }
}

.description,
.tag-wrap p {
  margin: 8px 0;
  color: #757575;
  font-size: 12px;
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: #e5e7eb;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.lock {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
}

.duration {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 4px 8px;
  border-radius: 5px;
  background: rgb(0 0 0 / 70%);
  color: #fff;
  font-weight: 700;
}

.tag-wrap {
  margin-top: 8px;

  p {
    margin: 0;
  }

  .tags {
    flex-wrap: wrap;
    gap: 12px;

    span {
      color: #c74716;
      font-weight: 700;
      font-size: 12px;

    }
  }
}

.stats-wrap {
  flex-wrap: wrap;
  color: #888;
  margin-top: 8px;
  gap: 12px;

  span {
    font-size: 12px;
  }
}

.unlock {
  .card-header {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    width: 100%;
  }
}
</style>
