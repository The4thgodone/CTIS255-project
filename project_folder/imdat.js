// alert('hello world');

$(function(){
    // alert('hello world');

    class TaskLists {
        constructor(list_name, list_contents, list_item_number){
            //list_name: Task listesinin adı
            //list_contents: İçindekiler, it should be passed as an array 
            //list_item_number: Task listesinin içindeki task sayısı
            this.list_name = list_name;
            this.list_contents = list_contents;
            this.list_contents = list_contents.length;
            
        }
    }

    var List_of_Lists = [];

    function storeInLocalStorage(){
        localStorage.setItem("List_of_Lists", JSON.stringify(List_of_Lists));
    }

    $(".newList").on("click", function(e){
        //help me create a prompt for a string
        // alert("hello world");
        $(".prompt-box-container").css({ "opacity" : "0.7", "display": "flex", "flex-basis": "100vw", "align-items": "center", "justify-content":"center"});
        $(".input-container").css("opacity", "1");
        $(".input-container input").focus()
                                   
    })
       

    $("#prompt-newList").on( "keyup keydown", function(e){
        // alert("hello world");
        if (e.key === "Enter") {
         var new_list_name = $(".input-container input").val();
         var temp_list = new TaskLists(new_list_name, [], 0);
         List_of_Lists.push(temp_list);
         storeInLocalStorage();
         $(".input-container").css("opacity", "0");
         $(".prompt-box-container").css("opacity", "0");
         $(".prompt-box-container").css("display", "none");
         $(".input-container input").val("");
        }
    })


    console.log(List_of_Lists);


})