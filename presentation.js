
function Presentation() {


   this.displayReceipe = () => {
      this.business = new BusinessLayer();
      var body = $('body');
      var mainMenu = $('<div>').attr('class', 'main-menu');
      body.append(mainMenu);
      var mainTopic = $('<h1>').text('Food Manager').attr('class', 'mainTopic');
      mainMenu.append(mainTopic);
      var inputLine = $('<div>').attr('class', 'inputLine');
      mainMenu.append(inputLine);

      /*function ImageGallery(){
         this.gallery={};


         this.populateGallery = function(){
            this.gallery.push(new.);
         }
      }
      /*var myImage = new Image(100, 200);
      myImage.src = 'images/slika1.jpg';
      document.body.appendChild(myImage);

      var myImage = new Image(100, 200);
      myImage.src = 'images/slika2.jpg';
      document.body.appendChild(myImage);

      var myImage = new Image(100, 200);
      myImage.src = 'images/slika3.jpg';
      document.body.appendChild(myImage);

      var myImage = new Image(100, 200);
      myImage.src = 'images/slika4.jpg';
      document.body.appendChild(myImage); */

      var input = $('<input type="text" placeholder="Search food and recipes">').attr('class', 'input-search')
      var body = $("body");
      inputLine.append(input);

      var box30 = $("<div>").attr("class", "box-30");
      var searchResults = $("<div>").addClass("search-res");
      var registerDiv = $("<div>").addClass("box-50");
      var loginDiv = $("<div>").addClass("box-50");
      var userName = $("<input>").attr("placeholder", "Username");
      var password = $("<input type='password'>").attr("placeholder", "password");
      var email = $("<input>").attr("placeholder", "email");
      var registerBtn = $("<button>").text("Register");
      var loginUser = $("<input>").attr("placeholder", "Enter your username");
      var loginPassword = $("<input type='password'>").attr("placeholder", "Enter your password");
      var loginBtn = $("<button>").text("Sign IN");
      var infoHolder = $("<div>").addClass("info-holder");
      var footer = $("<div>").attr("class", "footer").text("There is no sincere love than the love of food");
      body.append(footer);

      body.append(box30);
      body.append(searchResults);
      box30.append(registerDiv);
      box30.append(loginDiv);
      loginDiv.append(loginUser);
      loginDiv.append(loginPassword);
      loginDiv.append(loginBtn);
      registerDiv.append(userName);
      registerDiv.append(password);
      registerDiv.append(email);
      registerDiv.append(registerBtn);
      body.append(infoHolder);

      
      registerBtn.on("click", () => {
         localStorage.setItem(userName.val(), password.val());
      })
      loginBtn.on("click", () => {
         if (localStorage.getItem(loginUser.val()) === loginPassword.val()) {
            window.location = "http://google.com";
         } else {
            document.write("ERROR");
         }

      })

      
      input.on("keyup", async (event) => {
         var query = $(event.target).val();
         // console.log(query);
         var allData = await this.business.resolveFoodData(query);

         console.log(allData)

         // console.log("Data: " + allData);
            for(var i = 0 ; i < allData.length; i++){
               // if(allData[0].title[i].includes($(event.target).val())){
                  var titleP = $("<p>").text(allData[i].title).attr("class", "recipe-title");
                  var button = $("<button>").attr("class", "show-details").text("Show details").attr("id", allData[i].id);
                  searchResults.append(titleP);
                  searchResults.append(button);


                  
               // }
               button.on("click", async (event)=> {
                  loginDiv.fadeOut(500);
                  registerDiv.fadeOut(500);
                  footer.fadeOut(500);
                  infoHolder.html("")
                  // location.href = "page2.html";
                  var searchInfo = $(event.target).attr("id");
                  console.log(searchInfo);
                  const info  =  await this.business.giveInfo(searchInfo);
                  var infoH2 = $("<h2>").html(info.instructions);
                  infoHolder.append(infoH2);
                  if(infoH2.html() === ""){
                     infoH2.html("Not recipe found")
                  }
               })
            
            
         }

        
            
      })

   }

   // this.checkData =  async (searchInfo) => {
   //    var data = await this.business.giveInfo(searchInfo);
   //    console.log(data)
   // }

}



























