(function () {
    function fnAddButtons() {
      var btn = document.createElement("input");
      btn.value = "Search gmail";
      btn.id = "search-mm-btn";
      btn.type = "submit";
      document.querySelector(".FPdoLc.lJ9FBc center").appendChild(btn);
    }
    
    function Add_name(){
      var dv=document.createElement("div");
      dv.className="gb_e gb_f"
      var anc = document.createElement("a");
      anc.value ="whatsapp";
      anc.className ="gb_d";
      anc.text="whatsapp";
      anc.href ="https://web.whatsapp.com/";
      dv.appendChild(anc)
      const container = document.getElementById("gb");
      const local=container.querySelector(".gb_6d");
      local.appendChild(dv);
    }
    function fnDefineEvents() {
      document
        .getElementById("search-mm-btn")
        .addEventListener("click", function (event) {
          fnSearch(event.target.value.split(" ")[1]);
        });
    }
    function fnSearch(str) {
      document.querySelector(".gLFyf.gsfi").value = str;
    }

    Add_name();
    fnAddButtons();
    fnDefineEvents();
  })();