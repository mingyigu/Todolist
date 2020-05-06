$(function (){
    
    var vm = new Vue({
      el: '#head',
      data: function() {
        return { 
            
        thing: '',
        deadline: '',
        toDoNum: 0,
        toDo:[],
        }
      },
      methods: {
        creat: function(){
          ve.toDoNum++;
          var thing ={};
          thing.deadline = this.deadline;
          thing.thing = this.thing;
          this.toDo.push(thing);
            
        },
        
      }
    })

    var ve = new Vue({
      el: "#bodyer",
      data: function(){
        return{
          toDo: vm.toDo,
          done:[],
          toDoNum:0,
          doneNum:0,
        }
      },
      methods: {
        deleteThing: function(nu){
          var clickedNode = event.target;
          var str = String(clickedNode.parentNode.innerHTML);
          var num = str.split(" ");
          var thing = num[16];
          for(var i = 0; i < nu.length; i++) {
            if(nu[i].thing == thing) {
                if(clickedNode.parentNode.parentNode.parentNode.id == "done"){
                    this.doneNum--;
                }
                else{
                    this.toDoNum--;
                }
                
              return nu.splice(i,1);
              
            }
          }
        },
        complete:function(){
          var clickedNode = event.target;
          var str = String(clickedNode.parentNode.parentNode.innerHTML);
          var num = str.split(" ");
          for(var i = 0; i < this.toDo.length; i++) {
            if(this.toDo[i].thing == num[16]) {
              var thing ={};
              thing.thing = this.toDo[i].thing;
              thing.deadline = this.toDo[i].deadline;
               this.done.push(thing);
               this.toDo.splice(i,1)
               this.toDoNum--;
               this.doneNum++;
               break;
            }
          }
        } 

      }
    })
  })
    
    