<template>
    <ul>
      <li v-for="item in items">
        <a href="#" @click="toggleDisplay(item)">{{ item.name }}</a>
        {{ item }}
        <slot name="children" :id="item.id" v-if="item.showChildren">
          default value
        </slot>
      </li>
    </ul>
</template>

<script>
    export default {
        props: ['items'],
        methods: {
            toggleDisplay (item) {
                if (item.showChildren) item.showChildren = false
                else {
                  item.showChildren = true
                  _.chain(this.items).reject(_item => _item == item)
                    .each(_item => _item.showChildren = !item.showChildren)
                }

            }
        }
    }
</script>