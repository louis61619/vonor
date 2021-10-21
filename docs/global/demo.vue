<template>
  <div class="demo-block" @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- example -->
    <div class="example-case">
      <component :is="current"></component>
    </div>

    <!-- code -->
    <transition name="zoom">
      <div v-if="isExpanded" ref="meta" class="meta">
        <!-- <div> -->
        <div class="language-vue ext-vue">
          <pre code="language-vue">
            <!-- <code>
              <div v-html="decoded"></div>
            </code> -->
              <code v-html="'<div></div>' + decoded"></code>
            </pre>
        </div>
        <!-- </div> -->
      </div>
    </transition>

    <!-- control -->
    <div
      ref="control"
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
    >
      <el-icon
        :class="[
          'iconfont',
          'control-icon',
          { 'icon-caret-down': !isExpanded, 'icon-caret-up': isExpanded, hovering: hover }
        ]"
      >
        <CaretBottom v-if="!isExpanded" />
        <CaretTop v-else />
      </el-icon>
      <span v-show="hover" class="control-text">{{ controlText }}</span>
      <div class="control-button-wrap">
        <transition name="text-slide">
          <span v-show="isExpanded" class="control-button copy-button" @click.stop="onCopy">
            複製
          </span>
        </transition>
      </div>
    </div>

    <!-- <div>{{ description }}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance, ref } from 'vue'
import { CaretBottom, CaretTop } from '@element-plus/icons'

export default defineComponent({
  components: {
    CaretBottom,
    CaretTop
  },
  props: {
    customClass: {
      type: String,
      default: ''
    },
    sourceCode: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const app = getCurrentInstance()

    const hover = ref(false)
    const fixedControl = ref(false)
    const isExpanded = ref(false)

    const decoded = computed(() => {
      return decodeURIComponent(props.source)
    })

    const controlText = computed(() => {
      return isExpanded.value ? '收起' : '展開'
    })

    // template refs
    const descriptions = ref(null)
    const meta = ref(null)
    const control = ref(null)

    return {
      decoded,
      current: app && app.appContext.config.globalProperties.$compsMap[props.path],
      hover,
      fixedControl,
      isExpanded,
      controlText,
      descriptions,
      meta,
      control
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-block {
  margin: 10px 0;
  border: solid 1px var(--demoblock-border);
  border-radius: 3px;
  transition: 0.2s;

  /* --code-bg-color: #f9fafb; */
  /* --code-line-height: 24px; */
  /* --code-font-size: 14px; */
  /* --code-font-family: var(--font-family-mono); */
  --demoblock-border: #eaecef;
  --demoblock-control: #d3dce6;
  --demoblock-control-bg: var(--c-bg);
  --demoblock-control-bg-hover: #f9fafc;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
}

.example-case {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
}

.meta {
  border-top: solid 1px var(--demoblock-border);
  /* background-color: var(--code-bg-color); */
  overflow: hidden;
  /* height: 0; */
  /* transition: height 0.2s; */
}

.description {
  border: solid 1px var(--demoblock-border);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--c-text);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  /* background-color: var(--c-bg); */
}

.demo-block-control {
  border-top: solid 1px var(--demoblock-border);
  height: 44px;
  box-sizing: border-box;
  /* background-color: var(--demoblock-control-bg); */
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--demoblock-control);
  cursor: pointer;
  position: relative;
}

.demo-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: calc(100% - 20rem - 3rem - 12.5rem - 1px);
  border-right: solid 1px var(--demoblock-border);
  z-index: 1;
}

.demo-block-control .control-icon {
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}

.demo-block-control .control-icon.hovering {
  transform: translateX(-40px);
}

.demo-block-control .control-text {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}

.demo-block-control:hover {
  color: var(--c-brand);
  background-color: var(--demoblock-control-bg-hover);
}

.demo-block-control .text-slide-enter,
.demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.demo-block-control .control-button {
  padding: 14px 0;
  /* color: var(--c-brand); */
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
}

.demo-block-control .control-button-wrap {
  line-height: 44px;
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 5px;
  padding-right: 25px;
}

.zoom-enter-active {
  transition: max-height 2s ease-in;
  max-height: 9999px;
}
.zoom-leave-active {
  transition: max-height 0.5s ease-out;
  max-height: 9999px;
}

.zoom-enter-from,
.zoom-leave-to {
  max-height: 0;
}

.demo-block::v-deep table {
  margin: 0;
}
</style>
