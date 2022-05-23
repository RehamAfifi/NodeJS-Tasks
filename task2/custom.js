
const mainURL = "https://jsonplaceholder.typicode.com/"
const apis = [
    {
        urlKeyWord: "posts",
        showKeyWord: "Posts Data",
        classes: "btn btn-danger mx-3",
        headers: ["userId", "id", "title", "body"]
    },
    {
        urlKeyWord: "photos",
        showKeyWord: "Photos Data",
        classes: "btn btn-success mx-3",
        headers: ["albumId", "id", "title", "url", "thumbnailUrl"]
    },
    { urlKeyWord: "todos",
     showKeyWord: "ToDos Data",
      classes: "btn btn-dark mx-3",
       headers: ["userId", "id", "title", "completed"] 
    },

    {
    urlKeyWord: "users",
    showKeyWord: "Users Data",
    classes: "btn btn-primary mx-3",
    headers: [
    "id",
    "name",
    "username",
    "email",
    "address",
    "phone",
    "website",
    "company"
    ]
    }
]

//=["street","suite","city","zipcode","geo"]
//=["name","catchPhrase","bs"]

const Buttons = document.querySelector("#Buttons")
const data = document.querySelector("#data")

apis.forEach(api => {
    btn = document.createElement("button")
    btn.innerText = api.showKeyWord
    btn.classList = api.classes
    Buttons.appendChild(btn)
    btn.addEventListener("click", async () => {
        let myResult = await (await fetch(`${mainURL}${api.urlKeyWord}`)).json()
        const heads = document.querySelector("#heads")
        heads.innerText=""
        const tbody=document.querySelector("#tbody")
        tbody.innerHTML=""

        api.headers.forEach(head => {
             th = document.createElement("th")
             th.innerText = head
             heads.appendChild(th)
         })
        //  myResult.forEach(res => {
        //      const tbody=document.querySelector("#tbody")
        //       const tr =document.createElement("tr")
        //       api.headers.forEach(head => {
        //         const td =document.createElement("td")
        //         tbody.appendChild(tr)
        //         tr.appendChild(td)
        //         td.innerText=res[head]
        //       })
        //   })

         myResult.forEach(res => {

            const tbody=document.querySelector("#tbody")
            const tr =document.createElement("tr")

            // loopThrough(res,tr,tbody);
             api.headers.forEach(head => {

                 const td =document.createElement("td")
                 tbody.appendChild(tr)
                 tr.appendChild(td)
                 td.innerText=res[head]
                 

                // if(typeof res[head] == 'object'){
                //     console.log(res[head]);
                //     OBJ = res[head];

                //     try {
                //         OBJ.forEach(h=>{
                //             td.innerText=res[head][h]
                //     }) 
                //     } catch (error) {
                        
                //     }
                //     }
                //  else{
                //      td.innerText=res[head]
                //  }
             })
         })

    })

    })

    // function loopThrough(obj,tr,tbody){
    //     for(var key in obj){
    //       // skip loop if the property is from prototype
    //       if(!obj.hasOwnProperty(key)) continue;
      
    //       if(typeof obj[key] !== 'object'){
    //         //your code
    //         const td =document.createElement("td")
    //         tbody.appendChild(tr)
    //         tr.appendChild(td)
    //         td.innerText = obj[key];
    //       } else {
    //         loopThrough(obj[key]);
    //       }
    //     }
    //   }
      
// handleAPi= async(urlKeyWord)=>{
//     let myResult = await (await fetch(`${mainURL}${urlKeyWord}`)).json()
//     console.log(myResult)
// }