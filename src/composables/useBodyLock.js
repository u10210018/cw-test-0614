import { tryOnScopeDispose } from '@vueuse/shared';

export const useBodyLock = (initialState = false) => {
    const isLocked = ref(initialState);
    const ele = ref();

    onMounted(() => {
        ele.value = document.body;
    });

    const lock = () => {
        if (!ele.value || isLocked.value) return;
        isLocked.value = true;
    };

    const unlock = () => {
        if (!ele.value || !isLocked.value) return;
        isLocked.value = false;
    };

    tryOnScopeDispose(unlock);

    watch(isLocked, (nVal) => {
        if (!ele.value) return;
        const classList = ele.value.classList;
        classList.toggle('no-scroll', nVal);
    });

    return computed({
        get() {
            return isLocked.value;
        },
        set(v) {
            if (v) lock();
            else unlock();
        }
    });
};
