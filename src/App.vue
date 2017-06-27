<template>
  <div id="app">

      <tree-view :items="departments">
          <template slot="children" scope="props">
              <tree-view :items="sectionsFor(props.id)">
                  <template slot="children" scope="props">
                      <tree-view :items="subSectionsFor(props.id)"></tree-view>
                  </template>
              </tree-view>
          </template>
      </tree-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    sectionsFor(department) {
        return _.filter(this.sections, section => { return section.department == department })
    },
    subSectionsFor(section) {
        return _.filter(this.subsections, subsection => { return subsection.section == section })
    }
  },
  data () {
    return {
      departments: [
          { name: 'department 1', id: 1, showChildren: false },
          { name: 'department 2', id: 2, showChildren: false  },
          { name: 'department 3', id: 3, showChildren: false },
        { name: 'department 4', id: 4, showChildren: false }
      ],
      sections: [
          { name: 'section 1', id: 1, department: 1, showChildren: false },
          { name: 'section 2', id: 2, department: 1, showChildren: false },
          { name: 'section 3', id: 3, department: 2, showChildren: false },
          { name: 'section 4', id: 4, department: 3, showChildren: false },
          { name: 'section 5', id: 5, department: 3, showChildren: false },
          { name: 'section 6', id: 6, department: 4, showChildren: false }
      ],
        subsections: [
            { name: 'sub section 1', id: 1, section: 1 },
            { name: 'sub section 2', id: 2, section: 1 },
            { name: 'sub section 3', id: 3, section: 2 },
            { name: 'sub section 4', id: 4, section: 2 },
            { name: 'sub section 5', id: 5, section: 3 },
            { name: 'sub section 6', id: 6, section: 4 },
            { name: 'sub section 7', id: 7, section: 4 },
            { name: 'sub section 8', id: 8, section: 4 }
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
