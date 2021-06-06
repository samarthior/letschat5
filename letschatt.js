function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);

    user_id = document.getElementById("user_id").value;
  
    localStorage.setItem("user_id", user_id);
    
      window.location = "letschat_room.html";
  }