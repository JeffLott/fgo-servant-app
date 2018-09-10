Vue.component('effect-list', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    template: `
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full icon</th>
            <th>Status icon</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="effect in effects">
            <td>{{effect.id}}</td>
            <td><img v-bind:src="getFullSource(effect)"></img></td>
            <td><img v-bind:src="getStatusSource(effect)"></img></td>
            <td>{{effect.name}}</td>
            <td>{{effect.description}}</td>
          </tr>
        </tbody>
      </table>`,
    data : function(){
      return {
        effects: []
      }
    },
    created: function(){
      this.$http.get('/effects').then(response => {
        // get body data
        this.effects = response.body;
      }, response => {
        // error callback
      });
    },
    methods: {
      getFullSource: function(effect){
        return `effects/full-icons/${effect.id}.png`;
      },
      getStatusSource: function(effect){
        return `effects/status-icons/${effect.id}.png`;
      }
    }
  })

  var app = new Vue({
    el: '#app',
  })