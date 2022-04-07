document.querySelector("button").onclick=function(){
    let httpReq= new XMLHttpRequest()

    httpReq.onreadystatechange=function(){
        if(this.readyState == 4 && this.status==200){
        let users=JSON.parse(this.responseText)
        let tbody=document.querySelector("#quote")
             console.log(users)
                let tr=document.createElement("tr")
                let tdquote= document.createElement("td")
                tdquote.append(
                    document.createTextNode(users.quote)
                )
                tr.append(tdquote)
                tbody.append(tr)
                }


            
        
    
}
    httpReq.open('GET', 'https://api.kanye.rest/', true)
    httpReq.send()
}



