<template>
    <div v-if="innerVisible">
        <div class="du-loading-lock" v-if="lock"></div>
        <div class="du-loading" ref="loading">
            <div class="du-loading-loader">
                <LoadingIcon />
            </div>
            <div class="du-loading-content" v-if="content">
                <span>{{ content }}</span>
                <div v-if="cancelText">
                    <button class="du-loading-button" @click="cancel">{{ cancelText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import LoadingIcon from './loading-icon.vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    lock: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        default: '加载中',
    },
    cancelText: {
        type: String,
        default: '',
    },
});

const emits = defineEmits<{
    (e: 'update:visible', visible: boolean): void;
    (e: 'cancel'): void;
}>();

const innerVisible = computed({
    get() {
        return props.visible;
    },
    set(v: boolean) {
        emits('update:visible', v);
    },
});

function cancel() {
    emits('cancel');
    innerVisible.value = false;
}
</script>

<style lang="less">
.du-loading-lock {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 11;
}

.du-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 11;
    min-width: 138px;
    padding: 28px 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    user-select: none;
    transform: translate(-50%, -50%);

    .du-loading-loader {
        text-align: center;

        .du-loading-icon {
            margin: 0 auto;
            font-size: 36px;
            color: white;
        }
    }

    .du-loading-content {
        margin-top: 14px;
        font-size: 14px;
        line-height: 20px;
        color: white;
        text-align: center;
    }

    .du-loading-button {
        padding: 4px 7px;
        margin-top: 4px;
        margin-bottom: -7px;
        font-size: 12px;
        line-height: 17px;
        color: white;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.6;
        }
    }
}
</style>
