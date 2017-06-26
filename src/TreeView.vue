<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <slot name="children" :id="item.id" :display="" ></slot>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        props: ['items', 'display'],
        data () {
            return {
                display: false
            }
        },
        methods: {
            toggleDisplay() {
                this.display = !this.display
            }
        }
    }
</script>